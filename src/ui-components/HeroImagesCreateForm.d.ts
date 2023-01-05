/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeroImagesCreateFormInputValues = {
    images?: string;
    catch?: string;
};
export declare type HeroImagesCreateFormValidationValues = {
    images?: ValidationFunction<string>;
    catch?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroImagesCreateFormOverridesProps = {
    HeroImagesCreateFormGrid?: FormProps<GridProps>;
    images?: FormProps<TextFieldProps>;
    catch?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeroImagesCreateFormProps = React.PropsWithChildren<{
    overrides?: HeroImagesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: HeroImagesCreateFormInputValues) => HeroImagesCreateFormInputValues;
    onSuccess?: (fields: HeroImagesCreateFormInputValues) => void;
    onError?: (fields: HeroImagesCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HeroImagesCreateFormInputValues) => HeroImagesCreateFormInputValues;
    onValidate?: HeroImagesCreateFormValidationValues;
} & React.CSSProperties>;
export default function HeroImagesCreateForm(props: HeroImagesCreateFormProps): React.ReactElement;
