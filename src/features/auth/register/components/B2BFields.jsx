import { FormInput } from "./FormInput";
import { useTranslation } from "react-i18next";

export const B2BFields = ({ register, errors }) => {
  const { t } = useTranslation();

  return (
    <>
      <FormInput
        id="issuing_authority"
        label={t("registration.issuing_authority")}
        register={register}
        error={errors.issuing_authority}
      />
      <FormInput
        id="company_name"
        label={t("registration.company_name")}
        register={register}
        error={errors.company_name}
      />
      <FormInput
        id="commercial_license_number"
        label={t("registration.commercial_license_number")}
        register={register}
        error={errors.commercial_license_number}
      />
    </>
  );
};
