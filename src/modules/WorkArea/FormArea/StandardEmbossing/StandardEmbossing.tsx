import { useFormContext } from "react-hook-form";
import { InputFormField } from "../../../../components/FormFields/InputFormField";
import style from "./styles.module.scss";
import SelectFormField from "../../../../components/FormFields/SelectFormField";
import { useSelector } from "react-redux";
import { RenderHTML } from "../../../../utils/renderHTML";
import OptionSelector from "../../../../components/OptionSelector/OptionSelector";
import {
  COMPONENTS_NAMES,
  FORM_FIELDS,
  FORM_TYPE_REDUCERS,
  MODAL_TYPE_REDUCERS,
  MODAL_TYPES,
} from "../../../../types/enums";
import { useWatchFormChanges } from "../../../../hooks/useWatchFormChanges";
import { useEffect, useMemo, useState } from "react";
import { useFormDispatch, useModalDispatch } from "../../../../context";
import {
  ONLY_DATES_REG_EXP,
  ONLY_LETTERS_REG_EXP,
} from "../../../../constants/globalData";
import useGetTranslations from "../../../../hooks/configuration/useGetTranslations";
import {
  checkInvalidCharacters,
  selectAllowedChars,
} from "../../../../utils/checkInvalidLines";
import InfoIcon from "../../../../components/Icons/InfoIcon";

export const StandardEmbossing: React.FC = () => {
  const [onlyDatesMap, setOnlyDatesMap] = useState<Record<string, boolean>>({});
  const [invalidCharactersMap, setInvalidCharactersMap] = useState<
    Record<string, string>
  >({});

  const serverCoverData = useSelector(
    (state: any) => state.albumConfiguration.coverData
  );
  const { standard_embossing: standardEmbossingServerData, general } =
    serverCoverData;

  const modalDispatch = useModalDispatch();

  const formDispatch = useFormDispatch();
  const { watch, setValue } = useFormContext();
  const standardEmbossingFormValue = watch(COMPONENTS_NAMES.STANDARD_EMBOSSING);

  const {
    font_cover_front_standard_embossing_line1_id: font1,
    font_cover_front_standard_embossing_line2_id: font2,
    font_cover_front_standard_embossing_line3_id: font3,
    cover_front_standard_embossing_line1: line1,
    cover_front_standard_embossing_line2: line2,
    cover_front_standard_embossing_line3: line3,
  } = standardEmbossingFormValue;

  const selectedPairs = useMemo(() => {
    return [
      { fontId: font1, text: line1 },
      { fontId: font2, text: line2 },
      { fontId: font3, text: line3 },
    ];
  }, [font1, font2, font3, line1, line2, line3]);

  useWatchFormChanges(COMPONENTS_NAMES.STANDARD_EMBOSSING);

  const { t } = useGetTranslations();
  const labels = {
    validationOnlyNumbersRequired: t(
      "standardEmbossingForm.validationOnlyNumbersRequired"
    ),
    validationSpecialCharacters: t(
      "standardEmbossingForm.validationSpecialCharacters"
    ),
    changeFontsInform: t("standardEmbossingForm.changeFontsInform"),
  };

  const {
    cover_front_standard_embossing_placement,
    cover_front_embossing_color,
    font_change_charge,
    lines,
  } = standardEmbossingServerData;

  const isAdditionalPayNeeded = useMemo(() => {
    const validSelections = selectedPairs
      .filter(({ text, fontId }) => text?.trim() && fontId)
      .map(({ fontId }) => fontId.split("-")[0]);

    const uniqueElements = new Set(validSelections);

    return uniqueElements.size > 1;
  }, [selectedPairs]);

  useEffect(() => {
    formDispatch({
      type: FORM_TYPE_REDUCERS.UPDATE,
      section: COMPONENTS_NAMES.STANDARD_EMBOSSING,
      field: FORM_FIELDS.STANDARD_EMBOSSING_EXTRA_PAYMENT,
      value: isAdditionalPayNeeded,
    });
  }, [isAdditionalPayNeeded, formDispatch]);

  useEffect(() => {
    setInvalidCharactersMap({
      cover_front_standard_embossing_line1: checkInvalidCharacters(
        line1,
        selectAllowedChars(font1)
      ),
      cover_front_standard_embossing_line2: checkInvalidCharacters(
        line2,
        selectAllowedChars(font2)
      ),
      cover_front_standard_embossing_line3: checkInvalidCharacters(
        line3,
        selectAllowedChars(font3)
      ),
    });
  }, [line1, line2, line3, font1, font2, font3]);

  return (
    <div className={style.wrapperFormStandardEmbossing}>
      <div className={style.containerWithLinesAndHint}>
        <div className={style.containerWithLinesEmbossing}>
          {lines.map((element: any) => {
            const currentText = standardEmbossingFormValue[element.id] || "";
            const currentLength = currentText.length;

            return (
              <div
                className={style.contentEmbossingBlockWithSelect}
                key={element.id}
              >
                <div className={style.itemBlock}>
                  <div className={style.itemBlockLabelBlock}>
                    <p>{element?.title}</p>
                    <span>
                      {currentLength}/{element?.character_count}
                    </span>
                  </div>
                  <InputFormField
                    name={`standardEmbossing.${element.id}`}
                    placeholder={element.placeholder}
                    maxLength={element?.character_count}
                    invalidCaracters={invalidCharactersMap[element.id]}
                    rules={{
                      pattern: onlyDatesMap[element.id]
                        ? {
                            value: ONLY_DATES_REG_EXP,
                            message: labels.validationOnlyNumbersRequired,
                          }
                        : {
                            value: ONLY_LETTERS_REG_EXP,
                            message: labels.validationSpecialCharacters,
                          },
                    }}
                  />

                  {element.subtitle && (
                    <RenderHTML
                      elementToRender={element.subtitle}
                      hintStyle={style.hintEmbossingLine}
                    />
                  )}
                </div>

                <div className={style.containerWithSelectEmbossing}>
                  <SelectFormField
                    name={`standardEmbossing.font_${element.id}_id`}
                    options={element.fonts.map((font: any) => ({
                      label: font.label,
                      value: font.id,
                    }))}
                    selectClassName={style.selectStandardEmbossing}
                    onChange={(
                      selectedValue: string,
                      oldValue: string | undefined
                    ) => {
                      const selectedOption = element.fonts.find(
                        (font: any) => font.id === selectedValue
                      );

                      if (selectedOption) {
                        const currentText =
                          standardEmbossingFormValue[element.id] || "";
                        const wasOnlyDates = onlyDatesMap[element.id] || false;
                        const isOnlyDates = selectedOption.onlyDates;

                        if (
                          !wasOnlyDates &&
                          isOnlyDates &&
                          currentText.trim()
                        ) {
                          if (oldValue) {
                            setValue(
                              `standardEmbossing.font_${element.id}_id`,
                              oldValue
                            );
                          }

                          modalDispatch({
                            type: MODAL_TYPE_REDUCERS.OPEN,
                            payload: {
                              type: MODAL_TYPES.INFO,
                              message: labels.changeFontsInform,
                              confirmAction: () => {
                                setValue(`standardEmbossing.${element.id}`, "");
                                setValue(
                                  `standardEmbossing.font_${element.id}_id`,
                                  selectedValue
                                );
                                setValue(
                                  `standardEmbossing.font_${element.id}`,
                                  selectedOption.label
                                );
                                setOnlyDatesMap((prev) => ({
                                  ...prev,
                                  [element.id]: selectedOption.onlyDates,
                                }));
                              },
                            },
                            isOpen: true,
                          });
                          return;
                        }

                        setValue(
                          `standardEmbossing.font_${element.id}_id`,
                          selectedValue
                        );
                        setValue(
                          `standardEmbossing.font_${element.id}`,
                          selectedOption.label
                        );
                        setOnlyDatesMap((prev) => ({
                          ...prev,
                          [element.id]: selectedOption.onlyDates,
                        }));
                      }
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {isAdditionalPayNeeded && (
          <div className={style.containerHintExtraPayment}>
            <InfoIcon fill="#F5BA63" />
            <p className={style.hintExtraPaymentStandardEmbossing}>
              {font_change_charge?.subtitle}
              {font_change_charge?.variant_price} {general?.currency}
            </p>
          </div>
        )}
      </div>

      <div className={style.containerWithColorsStandardEmbossing}>
        <p>{cover_front_embossing_color?.title}</p>
        <RenderHTML
          elementToRender={cover_front_embossing_color?.subtitle}
          hintStyle={style.hintStyle}
        />
        <OptionSelector
          name="standardEmbossing.cover_front_embossing_color_id"
          options={cover_front_embossing_color?.values}
          itemClassName={style.containerWithOptions}
          onChange={(selectedId: number) => {
            const selectedOption = cover_front_embossing_color?.values.find(
              (option: any) => option.id === selectedId
            );

            if (selectedOption) {
              setValue(
                "standardEmbossing.cover_front_embossing_color",
                selectedOption.label
              );
            }
          }}
        />
      </div>

      <div className={style.containerWithPlacementStandardEmbossing}>
        <p>{cover_front_standard_embossing_placement?.title}</p>
        <RenderHTML
          elementToRender={cover_front_standard_embossing_placement?.subtitle}
          hintStyle={style.hintStyle}
        />

        <div className={style.containerWithPlacementItemsStandardEmbossing}>
          <OptionSelector
            name="standardEmbossing.cover_front_standard_embossing_placement_id"
            options={cover_front_standard_embossing_placement?.values}
            itemClassName={style.containerWithOptions}
            onChange={(selectedId: number) => {
              const selectedOption =
                cover_front_standard_embossing_placement?.values.find(
                  (option: any) => option.id === selectedId
                );

              if (selectedOption) {
                setValue(
                  "standardEmbossing.cover_front_standard_embossing_placement",
                  selectedOption.label
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};
