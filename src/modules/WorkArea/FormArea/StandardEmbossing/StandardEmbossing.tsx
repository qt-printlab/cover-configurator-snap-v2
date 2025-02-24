import { useFormContext } from "react-hook-form";
import { InputFormField } from "../../../../components/FormFields/InputFormField";
import style from "./styles.module.scss";
import SelectFormField from "../../../../components/FormFields/SelectFormField";
import { useSelector } from "react-redux";
import Image from "../../../../components/Image/Image";
import { RenderHTML } from "../../../../utils/renderHTML";
import OptionSelector from "../../../../components/OptionSelector/OptionSelector";
import { useDispatch } from "react-redux";
import { FC, useEffect } from "react";
import { updateStandardEmbossing } from "../../../../redux/slices/formSlice";

type EmbossingLine = {
  id: string;
  count: number;
  fonts: { label: string; src: string }[];
};

export const StandardEmbossing: React.FC = () => {
  const { watch } = useFormContext();
  const dispatch = useDispatch();
  const standardEmbossingState = useSelector(
    (state: any) => state.albumConfiguration.coverData.standard_embossing
  );

  const {
    cover_front_standard_embossing_placement,
    cover_front_embossing_color,
    lines,
  } = standardEmbossingState;

  useEffect(() => {
    const subscription = watch((value) =>
      dispatch(updateStandardEmbossing(value.standardEmbossing))
    );
    return () => subscription.unsubscribe();
  }, [dispatch]);

  return (
    <div className={style.wrapperFormStandardEmbossing}>
      <div className={style.containerWithLinesEmbossing}>
        {lines.map((element: any) => {
          return (
            <div
              className={style.contentEmbossingBlockWithSelect}
              key={element.id}
            >
              <div className={style.itemBlock}>
                <div className={style.itemBlockLabelBlock}>
                  <p>{element?.title}</p>
                  <span>
                    {/* change 0 to real count of elements */}
                    {0}/{element?.character_count}
                  </span>
                </div>
                <InputFormField
                  name={`standardEmbossing.${element.id}`}
                  placeholder={element.placeholder}
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
                  name={`standardEmbossing.font_${element.id}`}
                  options={element.fonts.map((font: any) => ({
                    label: font.label,
                    value: font.id,
                  }))}
                  selectClassName={style.selectStandardEmbossing}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className={style.containerWithColorsStandardEmbossing}>
        <p>{cover_front_embossing_color?.title}</p>
        <RenderHTML
          elementToRender={cover_front_embossing_color?.subtitle}
          hintStyle={style.hintStyle}
        />
        <OptionSelector
          name="standardEmbossing.cover_front_embossing_color"
          options={cover_front_embossing_color?.values}
          itemClassName={style.containerWithOptions}
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
            name="standardEmbossing.cover_front_standard_embossing_placement"
            options={cover_front_standard_embossing_placement?.values}
            itemClassName={style.containerWithOptions}
          />
        </div>
      </div>
    </div>
  );
};
