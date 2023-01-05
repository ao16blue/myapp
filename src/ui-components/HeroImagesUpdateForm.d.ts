/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { HeroImages } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type HeroImagesUpdateFormInputValues = {
    images?: string;
    catch?: string;
};
export declare type HeroImagesUpdateFormValidationValues = {
    images?: ValidationFunction<string>;
    catch?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroImagesUpdateFormOverridesProps = {
    HeroImagesUpdateFormGrid?: FormProps<GridProps>;
    images?: FormProps<TextFieldProps>;
    catch?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeroImagesUpdateFormProps = React.PropsWithChildren<{
    overrides?: HeroImagesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    heroImages?: HeroImages;
    onSubmit?: (fields: HeroImagesUpdateFormInputValues) => HeroImagesUpdateFormInputValues;
    onSuccess?: (fields: HeroImagesUpdateFormInputValues) => void;
    onError?: (fields: HeroImagesUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: HeroImagesUpdateFormInputValues) => HeroImagesUpdateFormInputValues;
    onValidate?: HeroImagesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function HeroImagesUpdateForm(props: HeroImagesUpdateFormProps): React.ReactElement;
