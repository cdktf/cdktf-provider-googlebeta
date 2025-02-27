/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypes {
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypesToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypesOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypesOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllText {
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllTextToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllTextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllTextToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllTextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColor {
  /**
  * The amount of blue in the color as a value in the interval [0, 1].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#blue GoogleDataLossPreventionDeidentifyTemplate#blue}
  */
  readonly blue?: number;
  /**
  * The amount of green in the color as a value in the interval [0, 1].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#green GoogleDataLossPreventionDeidentifyTemplate#green}
  */
  readonly green?: number;
  /**
  * The amount of red in the color as a value in the interval [0, 1].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#red GoogleDataLossPreventionDeidentifyTemplate#red}
  */
  readonly red?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColorToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColorOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blue: cdktf.numberToTerraform(struct!.blue),
    green: cdktf.numberToTerraform(struct!.green),
    red: cdktf.numberToTerraform(struct!.red),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColorToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColorOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blue: {
      value: cdktf.numberToHclTerraform(struct!.blue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    green: {
      value: cdktf.numberToHclTerraform(struct!.green),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    red: {
      value: cdktf.numberToHclTerraform(struct!.red),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blue = this._blue;
    }
    if (this._green !== undefined) {
      hasAnyValues = true;
      internalValueResult.green = this._green;
    }
    if (this._red !== undefined) {
      hasAnyValues = true;
      internalValueResult.red = this._red;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blue = undefined;
      this._green = undefined;
      this._red = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blue = value.blue;
      this._green = value.green;
      this._red = value.red;
    }
  }

  // blue - computed: false, optional: true, required: false
  private _blue?: number; 
  public get blue() {
    return this.getNumberAttribute('blue');
  }
  public set blue(value: number) {
    this._blue = value;
  }
  public resetBlue() {
    this._blue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueInput() {
    return this._blue;
  }

  // green - computed: false, optional: true, required: false
  private _green?: number; 
  public get green() {
    return this.getNumberAttribute('green');
  }
  public set green(value: number) {
    this._green = value;
  }
  public resetGreen() {
    this._green = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greenInput() {
    return this._green;
  }

  // red - computed: false, optional: true, required: false
  private _red?: number; 
  public get red() {
    return this.getNumberAttribute('red');
  }
  public set red(value: number) {
    this._red = value;
  }
  public resetRed() {
    this._red = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redInput() {
    return this._red;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#score GoogleDataLossPreventionDeidentifyTemplate#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypes {
  /**
  * Name of the information type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#version GoogleDataLossPreventionDeidentifyTemplate#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#sensitivity_score GoogleDataLossPreventionDeidentifyTemplate#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScore;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypes {
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#info_types GoogleDataLossPreventionDeidentifyTemplate#info_types}
  */
  readonly infoTypes: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypes[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesToTerraform, true)(struct!.infoTypes),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_types: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infoTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infoTypes.internalValue = value.infoTypes;
    }
  }

  // info_types - computed: false, optional: false, required: true
  private _infoTypes = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransforms {
  /**
  * all_info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#all_info_types GoogleDataLossPreventionDeidentifyTemplate#all_info_types}
  */
  readonly allInfoTypes?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypes;
  /**
  * all_text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#all_text GoogleDataLossPreventionDeidentifyTemplate#all_text}
  */
  readonly allText?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllText;
  /**
  * redaction_color block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#redaction_color GoogleDataLossPreventionDeidentifyTemplate#redaction_color}
  */
  readonly redactionColor?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColor;
  /**
  * selected_info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#selected_info_types GoogleDataLossPreventionDeidentifyTemplate#selected_info_types}
  */
  readonly selectedInfoTypes?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypes;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransforms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_info_types: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypesToTerraform(struct!.allInfoTypes),
    all_text: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllTextToTerraform(struct!.allText),
    redaction_color: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColorToTerraform(struct!.redactionColor),
    selected_info_types: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesToTerraform(struct!.selectedInfoTypes),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransforms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_info_types: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypesToHclTerraform(struct!.allInfoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypesList",
    },
    all_text: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllTextToHclTerraform(struct!.allText),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllTextList",
    },
    redaction_color: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColorToHclTerraform(struct!.redactionColor),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColorList",
    },
    selected_info_types: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesToHclTerraform(struct!.selectedInfoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransforms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allInfoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allInfoTypes = this._allInfoTypes?.internalValue;
    }
    if (this._allText?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allText = this._allText?.internalValue;
    }
    if (this._redactionColor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionColor = this._redactionColor?.internalValue;
    }
    if (this._selectedInfoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedInfoTypes = this._selectedInfoTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransforms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allInfoTypes.internalValue = undefined;
      this._allText.internalValue = undefined;
      this._redactionColor.internalValue = undefined;
      this._selectedInfoTypes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allInfoTypes.internalValue = value.allInfoTypes;
      this._allText.internalValue = value.allText;
      this._redactionColor.internalValue = value.redactionColor;
      this._selectedInfoTypes.internalValue = value.selectedInfoTypes;
    }
  }

  // all_info_types - computed: false, optional: true, required: false
  private _allInfoTypes = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypesOutputReference(this, "all_info_types");
  public get allInfoTypes() {
    return this._allInfoTypes;
  }
  public putAllInfoTypes(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllInfoTypes) {
    this._allInfoTypes.internalValue = value;
  }
  public resetAllInfoTypes() {
    this._allInfoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInfoTypesInput() {
    return this._allInfoTypes.internalValue;
  }

  // all_text - computed: false, optional: true, required: false
  private _allText = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllTextOutputReference(this, "all_text");
  public get allText() {
    return this._allText;
  }
  public putAllText(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsAllText) {
    this._allText.internalValue = value;
  }
  public resetAllText() {
    this._allText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTextInput() {
    return this._allText.internalValue;
  }

  // redaction_color - computed: false, optional: true, required: false
  private _redactionColor = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColorOutputReference(this, "redaction_color");
  public get redactionColor() {
    return this._redactionColor;
  }
  public putRedactionColor(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsRedactionColor) {
    this._redactionColor.internalValue = value;
  }
  public resetRedactionColor() {
    this._redactionColor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionColorInput() {
    return this._redactionColor.internalValue;
  }

  // selected_info_types - computed: false, optional: true, required: false
  private _selectedInfoTypes = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypesOutputReference(this, "selected_info_types");
  public get selectedInfoTypes() {
    return this._selectedInfoTypes;
  }
  public putSelectedInfoTypes(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsSelectedInfoTypes) {
    this._selectedInfoTypes.internalValue = value;
  }
  public resetSelectedInfoTypes() {
    this._selectedInfoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedInfoTypesInput() {
    return this._selectedInfoTypes.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransforms[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformations {
  /**
  * transforms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#transforms GoogleDataLossPreventionDeidentifyTemplate#transforms}
  */
  readonly transforms: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransforms[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transforms: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsToTerraform, true)(struct!.transforms),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transforms: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsToHclTerraform, true)(struct!.transforms),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transforms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transforms = this._transforms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transforms.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transforms.internalValue = value.transforms;
    }
  }

  // transforms - computed: false, optional: false, required: true
  private _transforms = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransformsList(this, "transforms", false);
  public get transforms() {
    return this._transforms;
  }
  public putTransforms(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigImageTransformationsTransforms[] | cdktf.IResolvable) {
    this._transforms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformsInput() {
    return this._transforms.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#score GoogleDataLossPreventionDeidentifyTemplate#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes {
  /**
  * Name of the information type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#version GoogleDataLossPreventionDeidentifyTemplate#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#sensitivity_score GoogleDataLossPreventionDeidentifyTemplate#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScore;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax {
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin {
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue {
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#max GoogleDataLossPreventionDeidentifyTemplate#max}
  */
  readonly max?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax;
  /**
  * min block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#min GoogleDataLossPreventionDeidentifyTemplate#min}
  */
  readonly min?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin;
  /**
  * replacement_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#replacement_value GoogleDataLossPreventionDeidentifyTemplate#replacement_value}
  */
  readonly replacementValue: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToTerraform(struct!.max),
    min: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinToTerraform(struct!.min),
    replacement_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToTerraform(struct!.replacementValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxList",
    },
    min: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinToHclTerraform(struct!.min),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinList",
    },
    replacement_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToHclTerraform(struct!.replacementValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    if (this._min?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min?.internalValue;
    }
    if (this._replacementValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementValue = this._replacementValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
      this._min.internalValue = undefined;
      this._replacementValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
      this._min.internalValue = value.min;
      this._replacementValue.internalValue = value.replacementValue;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }

  // min - computed: false, optional: true, required: false
  private _min = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }
  public putMin(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin) {
    this._min.internalValue = value;
  }
  public resetMin() {
    this._min.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min.internalValue;
  }

  // replacement_value - computed: false, optional: false, required: true
  private _replacementValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference(this, "replacement_value");
  public get replacementValue() {
    return this._replacementValue;
  }
  public putReplacementValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue) {
    this._replacementValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementValueInput() {
    return this._replacementValue.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig {
  /**
  * buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#buckets GoogleDataLossPreventionDeidentifyTemplate#buckets}
  */
  readonly buckets?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buckets: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsToTerraform, true)(struct!.buckets),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buckets: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsToHclTerraform, true)(struct!.buckets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buckets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buckets.internalValue = value.buckets;
    }
  }

  // buckets - computed: false, optional: true, required: false
  private _buckets = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
  public putBuckets(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets[] | cdktf.IResolvable) {
    this._buckets.internalValue = value;
  }
  public resetBuckets() {
    this._buckets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore {
  /**
  * Characters to not transform when masking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#characters_to_skip GoogleDataLossPreventionDeidentifyTemplate#characters_to_skip}
  */
  readonly charactersToSkip?: string;
  /**
  * Common characters to not transform when masking. Useful to avoid removing punctuation. Possible values: ["NUMERIC", "ALPHA_UPPER_CASE", "ALPHA_LOWER_CASE", "PUNCTUATION", "WHITESPACE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#common_characters_to_ignore GoogleDataLossPreventionDeidentifyTemplate#common_characters_to_ignore}
  */
  readonly commonCharactersToIgnore?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    characters_to_skip: cdktf.stringToTerraform(struct!.charactersToSkip),
    common_characters_to_ignore: cdktf.stringToTerraform(struct!.commonCharactersToIgnore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    characters_to_skip: {
      value: cdktf.stringToHclTerraform(struct!.charactersToSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_characters_to_ignore: {
      value: cdktf.stringToHclTerraform(struct!.commonCharactersToIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._charactersToSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.charactersToSkip = this._charactersToSkip;
    }
    if (this._commonCharactersToIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonCharactersToIgnore = this._commonCharactersToIgnore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._charactersToSkip = undefined;
      this._commonCharactersToIgnore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._charactersToSkip = value.charactersToSkip;
      this._commonCharactersToIgnore = value.commonCharactersToIgnore;
    }
  }

  // characters_to_skip - computed: false, optional: true, required: false
  private _charactersToSkip?: string; 
  public get charactersToSkip() {
    return this.getStringAttribute('characters_to_skip');
  }
  public set charactersToSkip(value: string) {
    this._charactersToSkip = value;
  }
  public resetCharactersToSkip() {
    this._charactersToSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charactersToSkipInput() {
    return this._charactersToSkip;
  }

  // common_characters_to_ignore - computed: false, optional: true, required: false
  private _commonCharactersToIgnore?: string; 
  public get commonCharactersToIgnore() {
    return this.getStringAttribute('common_characters_to_ignore');
  }
  public set commonCharactersToIgnore(value: string) {
    this._commonCharactersToIgnore = value;
  }
  public resetCommonCharactersToIgnore() {
    this._commonCharactersToIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonCharactersToIgnoreInput() {
    return this._commonCharactersToIgnore;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig {
  /**
  * Character to use to mask the sensitive values—for example, * for an alphabetic string such as a name, or 0 for a numeric string
  * such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to * for
  * strings, and 0 for digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#masking_character GoogleDataLossPreventionDeidentifyTemplate#masking_character}
  */
  readonly maskingCharacter?: string;
  /**
  * Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#number_to_mask GoogleDataLossPreventionDeidentifyTemplate#number_to_mask}
  */
  readonly numberToMask?: number;
  /**
  * Mask characters in reverse order. For example, if masking_character is 0, number_to_mask is 14, and reverse_order is 'false', then the
  * input string '1234-5678-9012-3456' is masked as '00000000000000-3456'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#reverse_order GoogleDataLossPreventionDeidentifyTemplate#reverse_order}
  */
  readonly reverseOrder?: boolean | cdktf.IResolvable;
  /**
  * characters_to_ignore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#characters_to_ignore GoogleDataLossPreventionDeidentifyTemplate#characters_to_ignore}
  */
  readonly charactersToIgnore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masking_character: cdktf.stringToTerraform(struct!.maskingCharacter),
    number_to_mask: cdktf.numberToTerraform(struct!.numberToMask),
    reverse_order: cdktf.booleanToTerraform(struct!.reverseOrder),
    characters_to_ignore: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToTerraform, true)(struct!.charactersToIgnore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masking_character: {
      value: cdktf.stringToHclTerraform(struct!.maskingCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_to_mask: {
      value: cdktf.numberToHclTerraform(struct!.numberToMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reverse_order: {
      value: cdktf.booleanToHclTerraform(struct!.reverseOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    characters_to_ignore: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToHclTerraform, true)(struct!.charactersToIgnore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maskingCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskingCharacter = this._maskingCharacter;
    }
    if (this._numberToMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberToMask = this._numberToMask;
    }
    if (this._reverseOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseOrder = this._reverseOrder;
    }
    if (this._charactersToIgnore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.charactersToIgnore = this._charactersToIgnore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maskingCharacter = undefined;
      this._numberToMask = undefined;
      this._reverseOrder = undefined;
      this._charactersToIgnore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maskingCharacter = value.maskingCharacter;
      this._numberToMask = value.numberToMask;
      this._reverseOrder = value.reverseOrder;
      this._charactersToIgnore.internalValue = value.charactersToIgnore;
    }
  }

  // masking_character - computed: false, optional: true, required: false
  private _maskingCharacter?: string; 
  public get maskingCharacter() {
    return this.getStringAttribute('masking_character');
  }
  public set maskingCharacter(value: string) {
    this._maskingCharacter = value;
  }
  public resetMaskingCharacter() {
    this._maskingCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingCharacterInput() {
    return this._maskingCharacter;
  }

  // number_to_mask - computed: false, optional: true, required: false
  private _numberToMask?: number; 
  public get numberToMask() {
    return this.getNumberAttribute('number_to_mask');
  }
  public set numberToMask(value: number) {
    this._numberToMask = value;
  }
  public resetNumberToMask() {
    this._numberToMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberToMaskInput() {
    return this._numberToMask;
  }

  // reverse_order - computed: false, optional: true, required: false
  private _reverseOrder?: boolean | cdktf.IResolvable; 
  public get reverseOrder() {
    return this.getBooleanAttribute('reverse_order');
  }
  public set reverseOrder(value: boolean | cdktf.IResolvable) {
    this._reverseOrder = value;
  }
  public resetReverseOrder() {
    this._reverseOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseOrderInput() {
    return this._reverseOrder;
  }

  // characters_to_ignore - computed: false, optional: true, required: false
  private _charactersToIgnore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreList(this, "characters_to_ignore", false);
  public get charactersToIgnore() {
    return this._charactersToIgnore;
  }
  public putCharactersToIgnore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore[] | cdktf.IResolvable) {
    this._charactersToIgnore.internalValue = value;
  }
  public resetCharactersToIgnore() {
    this._charactersToIgnore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charactersToIgnoreInput() {
    return this._charactersToIgnore.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#score GoogleDataLossPreventionDeidentifyTemplate#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at [https://cloud.google.com/dlp/docs/infotypes-reference](https://cloud.google.com/dlp/docs/infotypes-reference) when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern '[A-Za-z0-9$-_]{1,64}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
  /**
  * Optional version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#version GoogleDataLossPreventionDeidentifyTemplate#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#sensitivity_score GoogleDataLossPreventionDeidentifyTemplate#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig {
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#context GoogleDataLossPreventionDeidentifyTemplate#context}
  */
  readonly context?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext;
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey;
  /**
  * surrogate_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#surrogate_info_type GoogleDataLossPreventionDeidentifyTemplate#surrogate_info_type}
  */
  readonly surrogateInfoType?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToTerraform(struct!.context),
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToTerraform(struct!.cryptoKey),
    surrogate_info_type: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToTerraform(struct!.surrogateInfoType),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToHclTerraform(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextList",
    },
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyList",
    },
    surrogate_info_type: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToHclTerraform(struct!.surrogateInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    if (this._surrogateInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateInfoType = this._surrogateInfoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context.internalValue = undefined;
      this._cryptoKey.internalValue = undefined;
      this._surrogateInfoType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context.internalValue = value.context;
      this._cryptoKey.internalValue = value.cryptoKey;
      this._surrogateInfoType.internalValue = value.surrogateInfoType;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  public resetCryptoKey() {
    this._cryptoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }

  // surrogate_info_type - computed: false, optional: true, required: false
  private _surrogateInfoType = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference(this, "surrogate_info_type");
  public get surrogateInfoType() {
    return this._surrogateInfoType;
  }
  public putSurrogateInfoType(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType) {
    this._surrogateInfoType.internalValue = value;
  }
  public resetSurrogateInfoType() {
    this._surrogateInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateInfoTypeInput() {
    return this._surrogateInfoType.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig {
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToTerraform(struct!.cryptoKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKey.internalValue = value.cryptoKey;
    }
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  public resetCryptoKey() {
    this._cryptoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#score GoogleDataLossPreventionDeidentifyTemplate#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at [https://cloud.google.com/dlp/docs/infotypes-reference](https://cloud.google.com/dlp/docs/infotypes-reference) when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern '[A-Za-z0-9$-_]{1,64}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
  /**
  * Optional version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#version GoogleDataLossPreventionDeidentifyTemplate#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#sensitivity_score GoogleDataLossPreventionDeidentifyTemplate#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig {
  /**
  * Common alphabets. Possible values: ["FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED", "NUMERIC", "HEXADECIMAL", "UPPER_CASE_ALPHA_NUMERIC", "ALPHA_NUMERIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#common_alphabet GoogleDataLossPreventionDeidentifyTemplate#common_alphabet}
  */
  readonly commonAlphabet?: string;
  /**
  * This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range \[2, 95\]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is:
  * 
  * ''0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~'!@#$%^&*()_-+={[}]|:;"'<,>.?/''
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#custom_alphabet GoogleDataLossPreventionDeidentifyTemplate#custom_alphabet}
  */
  readonly customAlphabet?: string;
  /**
  * The native way to select the alphabet. Must be in the range \[2, 95\].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#radix GoogleDataLossPreventionDeidentifyTemplate#radix}
  */
  readonly radix?: number;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#context GoogleDataLossPreventionDeidentifyTemplate#context}
  */
  readonly context?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext;
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey;
  /**
  * surrogate_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#surrogate_info_type GoogleDataLossPreventionDeidentifyTemplate#surrogate_info_type}
  */
  readonly surrogateInfoType?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_alphabet: cdktf.stringToTerraform(struct!.commonAlphabet),
    custom_alphabet: cdktf.stringToTerraform(struct!.customAlphabet),
    radix: cdktf.numberToTerraform(struct!.radix),
    context: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToTerraform(struct!.context),
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToTerraform(struct!.cryptoKey),
    surrogate_info_type: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToTerraform(struct!.surrogateInfoType),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_alphabet: {
      value: cdktf.stringToHclTerraform(struct!.commonAlphabet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_alphabet: {
      value: cdktf.stringToHclTerraform(struct!.customAlphabet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radix: {
      value: cdktf.numberToHclTerraform(struct!.radix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToHclTerraform(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextList",
    },
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyList",
    },
    surrogate_info_type: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToHclTerraform(struct!.surrogateInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAlphabet !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAlphabet = this._commonAlphabet;
    }
    if (this._customAlphabet !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAlphabet = this._customAlphabet;
    }
    if (this._radix !== undefined) {
      hasAnyValues = true;
      internalValueResult.radix = this._radix;
    }
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    if (this._surrogateInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateInfoType = this._surrogateInfoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAlphabet = undefined;
      this._customAlphabet = undefined;
      this._radix = undefined;
      this._context.internalValue = undefined;
      this._cryptoKey.internalValue = undefined;
      this._surrogateInfoType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAlphabet = value.commonAlphabet;
      this._customAlphabet = value.customAlphabet;
      this._radix = value.radix;
      this._context.internalValue = value.context;
      this._cryptoKey.internalValue = value.cryptoKey;
      this._surrogateInfoType.internalValue = value.surrogateInfoType;
    }
  }

  // common_alphabet - computed: false, optional: true, required: false
  private _commonAlphabet?: string; 
  public get commonAlphabet() {
    return this.getStringAttribute('common_alphabet');
  }
  public set commonAlphabet(value: string) {
    this._commonAlphabet = value;
  }
  public resetCommonAlphabet() {
    this._commonAlphabet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAlphabetInput() {
    return this._commonAlphabet;
  }

  // custom_alphabet - computed: false, optional: true, required: false
  private _customAlphabet?: string; 
  public get customAlphabet() {
    return this.getStringAttribute('custom_alphabet');
  }
  public set customAlphabet(value: string) {
    this._customAlphabet = value;
  }
  public resetCustomAlphabet() {
    this._customAlphabet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAlphabetInput() {
    return this._customAlphabet;
  }

  // radix - computed: false, optional: true, required: false
  private _radix?: number; 
  public get radix() {
    return this.getNumberAttribute('radix');
  }
  public set radix(value: number) {
    this._radix = value;
  }
  public resetRadix() {
    this._radix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radixInput() {
    return this._radix;
  }

  // context - computed: false, optional: true, required: false
  private _context = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  public resetCryptoKey() {
    this._cryptoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }

  // surrogate_info_type - computed: false, optional: true, required: false
  private _surrogateInfoType = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference(this, "surrogate_info_type");
  public get surrogateInfoType() {
    return this._surrogateInfoType;
  }
  public putSurrogateInfoType(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType) {
    this._surrogateInfoType.internalValue = value;
  }
  public resetSurrogateInfoType() {
    this._surrogateInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateInfoTypeInput() {
    return this._surrogateInfoType.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig {
  /**
  * Range of shift in days. Negative means shift to earlier in time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#lower_bound_days GoogleDataLossPreventionDeidentifyTemplate#lower_bound_days}
  */
  readonly lowerBoundDays: number;
  /**
  * Range of shift in days. Actual shift will be selected at random within this range (inclusive ends).
  * Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#upper_bound_days GoogleDataLossPreventionDeidentifyTemplate#upper_bound_days}
  */
  readonly upperBoundDays: number;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#context GoogleDataLossPreventionDeidentifyTemplate#context}
  */
  readonly context?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext;
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lower_bound_days: cdktf.numberToTerraform(struct!.lowerBoundDays),
    upper_bound_days: cdktf.numberToTerraform(struct!.upperBoundDays),
    context: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextToTerraform(struct!.context),
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToTerraform(struct!.cryptoKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lower_bound_days: {
      value: cdktf.numberToHclTerraform(struct!.lowerBoundDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_bound_days: {
      value: cdktf.numberToHclTerraform(struct!.upperBoundDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextToHclTerraform(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextList",
    },
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerBoundDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBoundDays = this._lowerBoundDays;
    }
    if (this._upperBoundDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBoundDays = this._upperBoundDays;
    }
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lowerBoundDays = undefined;
      this._upperBoundDays = undefined;
      this._context.internalValue = undefined;
      this._cryptoKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lowerBoundDays = value.lowerBoundDays;
      this._upperBoundDays = value.upperBoundDays;
      this._context.internalValue = value.context;
      this._cryptoKey.internalValue = value.cryptoKey;
    }
  }

  // lower_bound_days - computed: false, optional: false, required: true
  private _lowerBoundDays?: number; 
  public get lowerBoundDays() {
    return this.getNumberAttribute('lower_bound_days');
  }
  public set lowerBoundDays(value: number) {
    this._lowerBoundDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundDaysInput() {
    return this._lowerBoundDays;
  }

  // upper_bound_days - computed: false, optional: false, required: true
  private _upperBoundDays?: number; 
  public get upperBoundDays() {
    return this.getNumberAttribute('upper_bound_days');
  }
  public set upperBoundDays(value: number) {
    this._upperBoundDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundDaysInput() {
    return this._upperBoundDays;
  }

  // context - computed: false, optional: true, required: false
  private _context = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  public resetCryptoKey() {
    this._cryptoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound {
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._floatValue = undefined;
      this._integerValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
    }
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound {
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._floatValue = undefined;
      this._integerValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
    }
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig {
  /**
  * Size of each bucket (except for minimum and maximum buckets).
  * So if lower_bound = 10, upper_bound = 89, and bucketSize = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+.
  * Precision up to 2 decimals works.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#bucket_size GoogleDataLossPreventionDeidentifyTemplate#bucket_size}
  */
  readonly bucketSize: number;
  /**
  * lower_bound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#lower_bound GoogleDataLossPreventionDeidentifyTemplate#lower_bound}
  */
  readonly lowerBound: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound;
  /**
  * upper_bound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#upper_bound GoogleDataLossPreventionDeidentifyTemplate#upper_bound}
  */
  readonly upperBound: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_size: cdktf.numberToTerraform(struct!.bucketSize),
    lower_bound: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToTerraform(struct!.lowerBound),
    upper_bound: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToTerraform(struct!.upperBound),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_size: {
      value: cdktf.numberToHclTerraform(struct!.bucketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lower_bound: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToHclTerraform(struct!.lowerBound),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundList",
    },
    upper_bound: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToHclTerraform(struct!.upperBound),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketSize = this._bucketSize;
    }
    if (this._lowerBound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBound = this._lowerBound?.internalValue;
    }
    if (this._upperBound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBound = this._upperBound?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketSize = undefined;
      this._lowerBound.internalValue = undefined;
      this._upperBound.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketSize = value.bucketSize;
      this._lowerBound.internalValue = value.lowerBound;
      this._upperBound.internalValue = value.upperBound;
    }
  }

  // bucket_size - computed: false, optional: false, required: true
  private _bucketSize?: number; 
  public get bucketSize() {
    return this.getNumberAttribute('bucket_size');
  }
  public set bucketSize(value: number) {
    this._bucketSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSizeInput() {
    return this._bucketSize;
  }

  // lower_bound - computed: false, optional: false, required: true
  private _lowerBound = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference(this, "lower_bound");
  public get lowerBound() {
    return this._lowerBound;
  }
  public putLowerBound(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound) {
    this._lowerBound.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundInput() {
    return this._lowerBound.internalValue;
  }

  // upper_bound - computed: false, optional: false, required: true
  private _upperBound = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference(this, "upper_bound");
  public get upperBound() {
    return this._upperBound;
  }
  public putUpperBound(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound) {
    this._upperBound.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig {
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue {
  /**
  * Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a
  * year by itself or a year and month where the day is not significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of year. Must be from 1 to 12, or 0 if specifying a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#boolean_value GoogleDataLossPreventionDeidentifyTemplate#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: number;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  * Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._booleanValue = undefined;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._booleanValue = value.booleanValue;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig {
  /**
  * new_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#new_value GoogleDataLossPreventionDeidentifyTemplate#new_value}
  */
  readonly newValue: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueToTerraform(struct!.newValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueToHclTerraform(struct!.newValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newValue = this._newValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newValue.internalValue = value.newValue;
    }
  }

  // new_value - computed: false, optional: false, required: true
  private _newValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference(this, "new_value");
  public get newValue() {
    return this._newValue;
  }
  public putNewValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue) {
    this._newValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newValueInput() {
    return this._newValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#words GoogleDataLossPreventionDeidentifyTemplate#words}
  */
  readonly words: string[];
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    words: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.words),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig {
  /**
  * word_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#word_list GoogleDataLossPreventionDeidentifyTemplate#word_list}
  */
  readonly wordList: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    word_list: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToTerraform(struct!.wordList),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    word_list: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToHclTerraform(struct!.wordList),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wordList.internalValue = value.wordList;
    }
  }

  // word_list - computed: false, optional: false, required: true
  private _wordList = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct) {
    this._wordList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig {
  /**
  * The part of the time to keep. Possible values: ["YEAR", "MONTH", "DAY_OF_MONTH", "DAY_OF_WEEK", "WEEK_OF_YEAR", "HOUR_OF_DAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#part_to_extract GoogleDataLossPreventionDeidentifyTemplate#part_to_extract}
  */
  readonly partToExtract?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    part_to_extract: cdktf.stringToTerraform(struct!.partToExtract),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    part_to_extract: {
      value: cdktf.stringToHclTerraform(struct!.partToExtract),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partToExtract !== undefined) {
      hasAnyValues = true;
      internalValueResult.partToExtract = this._partToExtract;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partToExtract = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partToExtract = value.partToExtract;
    }
  }

  // part_to_extract - computed: false, optional: true, required: false
  private _partToExtract?: string; 
  public get partToExtract() {
    return this.getStringAttribute('part_to_extract');
  }
  public set partToExtract(value: string) {
    this._partToExtract = value;
  }
  public resetPartToExtract() {
    this._partToExtract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partToExtractInput() {
    return this._partToExtract;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformation {
  /**
  * Replace each matching finding with the name of the info type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#replace_with_info_type_config GoogleDataLossPreventionDeidentifyTemplate#replace_with_info_type_config}
  */
  readonly replaceWithInfoTypeConfig?: boolean | cdktf.IResolvable;
  /**
  * bucketing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#bucketing_config GoogleDataLossPreventionDeidentifyTemplate#bucketing_config}
  */
  readonly bucketingConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig;
  /**
  * character_mask_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#character_mask_config GoogleDataLossPreventionDeidentifyTemplate#character_mask_config}
  */
  readonly characterMaskConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig;
  /**
  * crypto_deterministic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_deterministic_config GoogleDataLossPreventionDeidentifyTemplate#crypto_deterministic_config}
  */
  readonly cryptoDeterministicConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig;
  /**
  * crypto_hash_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_hash_config GoogleDataLossPreventionDeidentifyTemplate#crypto_hash_config}
  */
  readonly cryptoHashConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig;
  /**
  * crypto_replace_ffx_fpe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_replace_ffx_fpe_config GoogleDataLossPreventionDeidentifyTemplate#crypto_replace_ffx_fpe_config}
  */
  readonly cryptoReplaceFfxFpeConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig;
  /**
  * date_shift_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_shift_config GoogleDataLossPreventionDeidentifyTemplate#date_shift_config}
  */
  readonly dateShiftConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig;
  /**
  * fixed_size_bucketing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#fixed_size_bucketing_config GoogleDataLossPreventionDeidentifyTemplate#fixed_size_bucketing_config}
  */
  readonly fixedSizeBucketingConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig;
  /**
  * redact_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#redact_config GoogleDataLossPreventionDeidentifyTemplate#redact_config}
  */
  readonly redactConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig;
  /**
  * replace_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#replace_config GoogleDataLossPreventionDeidentifyTemplate#replace_config}
  */
  readonly replaceConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig;
  /**
  * replace_dictionary_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#replace_dictionary_config GoogleDataLossPreventionDeidentifyTemplate#replace_dictionary_config}
  */
  readonly replaceDictionaryConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig;
  /**
  * time_part_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_part_config GoogleDataLossPreventionDeidentifyTemplate#time_part_config}
  */
  readonly timePartConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replace_with_info_type_config: cdktf.booleanToTerraform(struct!.replaceWithInfoTypeConfig),
    bucketing_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigToTerraform(struct!.bucketingConfig),
    character_mask_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigToTerraform(struct!.characterMaskConfig),
    crypto_deterministic_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigToTerraform(struct!.cryptoDeterministicConfig),
    crypto_hash_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigToTerraform(struct!.cryptoHashConfig),
    crypto_replace_ffx_fpe_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToTerraform(struct!.cryptoReplaceFfxFpeConfig),
    date_shift_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigToTerraform(struct!.dateShiftConfig),
    fixed_size_bucketing_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigToTerraform(struct!.fixedSizeBucketingConfig),
    redact_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigToTerraform(struct!.redactConfig),
    replace_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigToTerraform(struct!.replaceConfig),
    replace_dictionary_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigToTerraform(struct!.replaceDictionaryConfig),
    time_part_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigToTerraform(struct!.timePartConfig),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replace_with_info_type_config: {
      value: cdktf.booleanToHclTerraform(struct!.replaceWithInfoTypeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bucketing_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigToHclTerraform(struct!.bucketingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigList",
    },
    character_mask_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigToHclTerraform(struct!.characterMaskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigList",
    },
    crypto_deterministic_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigToHclTerraform(struct!.cryptoDeterministicConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigList",
    },
    crypto_hash_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigToHclTerraform(struct!.cryptoHashConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigList",
    },
    crypto_replace_ffx_fpe_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToHclTerraform(struct!.cryptoReplaceFfxFpeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigList",
    },
    date_shift_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigToHclTerraform(struct!.dateShiftConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigList",
    },
    fixed_size_bucketing_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigToHclTerraform(struct!.fixedSizeBucketingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigList",
    },
    redact_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigToHclTerraform(struct!.redactConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigList",
    },
    replace_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigToHclTerraform(struct!.replaceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigList",
    },
    replace_dictionary_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigToHclTerraform(struct!.replaceDictionaryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigList",
    },
    time_part_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigToHclTerraform(struct!.timePartConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replaceWithInfoTypeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceWithInfoTypeConfig = this._replaceWithInfoTypeConfig;
    }
    if (this._bucketingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketingConfig = this._bucketingConfig?.internalValue;
    }
    if (this._characterMaskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterMaskConfig = this._characterMaskConfig?.internalValue;
    }
    if (this._cryptoDeterministicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoDeterministicConfig = this._cryptoDeterministicConfig?.internalValue;
    }
    if (this._cryptoHashConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHashConfig = this._cryptoHashConfig?.internalValue;
    }
    if (this._cryptoReplaceFfxFpeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoReplaceFfxFpeConfig = this._cryptoReplaceFfxFpeConfig?.internalValue;
    }
    if (this._dateShiftConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateShiftConfig = this._dateShiftConfig?.internalValue;
    }
    if (this._fixedSizeBucketingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedSizeBucketingConfig = this._fixedSizeBucketingConfig?.internalValue;
    }
    if (this._redactConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactConfig = this._redactConfig?.internalValue;
    }
    if (this._replaceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceConfig = this._replaceConfig?.internalValue;
    }
    if (this._replaceDictionaryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceDictionaryConfig = this._replaceDictionaryConfig?.internalValue;
    }
    if (this._timePartConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePartConfig = this._timePartConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replaceWithInfoTypeConfig = undefined;
      this._bucketingConfig.internalValue = undefined;
      this._characterMaskConfig.internalValue = undefined;
      this._cryptoDeterministicConfig.internalValue = undefined;
      this._cryptoHashConfig.internalValue = undefined;
      this._cryptoReplaceFfxFpeConfig.internalValue = undefined;
      this._dateShiftConfig.internalValue = undefined;
      this._fixedSizeBucketingConfig.internalValue = undefined;
      this._redactConfig.internalValue = undefined;
      this._replaceConfig.internalValue = undefined;
      this._replaceDictionaryConfig.internalValue = undefined;
      this._timePartConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replaceWithInfoTypeConfig = value.replaceWithInfoTypeConfig;
      this._bucketingConfig.internalValue = value.bucketingConfig;
      this._characterMaskConfig.internalValue = value.characterMaskConfig;
      this._cryptoDeterministicConfig.internalValue = value.cryptoDeterministicConfig;
      this._cryptoHashConfig.internalValue = value.cryptoHashConfig;
      this._cryptoReplaceFfxFpeConfig.internalValue = value.cryptoReplaceFfxFpeConfig;
      this._dateShiftConfig.internalValue = value.dateShiftConfig;
      this._fixedSizeBucketingConfig.internalValue = value.fixedSizeBucketingConfig;
      this._redactConfig.internalValue = value.redactConfig;
      this._replaceConfig.internalValue = value.replaceConfig;
      this._replaceDictionaryConfig.internalValue = value.replaceDictionaryConfig;
      this._timePartConfig.internalValue = value.timePartConfig;
    }
  }

  // replace_with_info_type_config - computed: false, optional: true, required: false
  private _replaceWithInfoTypeConfig?: boolean | cdktf.IResolvable; 
  public get replaceWithInfoTypeConfig() {
    return this.getBooleanAttribute('replace_with_info_type_config');
  }
  public set replaceWithInfoTypeConfig(value: boolean | cdktf.IResolvable) {
    this._replaceWithInfoTypeConfig = value;
  }
  public resetReplaceWithInfoTypeConfig() {
    this._replaceWithInfoTypeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceWithInfoTypeConfigInput() {
    return this._replaceWithInfoTypeConfig;
  }

  // bucketing_config - computed: false, optional: true, required: false
  private _bucketingConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigOutputReference(this, "bucketing_config");
  public get bucketingConfig() {
    return this._bucketingConfig;
  }
  public putBucketingConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig) {
    this._bucketingConfig.internalValue = value;
  }
  public resetBucketingConfig() {
    this._bucketingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketingConfigInput() {
    return this._bucketingConfig.internalValue;
  }

  // character_mask_config - computed: false, optional: true, required: false
  private _characterMaskConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference(this, "character_mask_config");
  public get characterMaskConfig() {
    return this._characterMaskConfig;
  }
  public putCharacterMaskConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig) {
    this._characterMaskConfig.internalValue = value;
  }
  public resetCharacterMaskConfig() {
    this._characterMaskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterMaskConfigInput() {
    return this._characterMaskConfig.internalValue;
  }

  // crypto_deterministic_config - computed: false, optional: true, required: false
  private _cryptoDeterministicConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference(this, "crypto_deterministic_config");
  public get cryptoDeterministicConfig() {
    return this._cryptoDeterministicConfig;
  }
  public putCryptoDeterministicConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig) {
    this._cryptoDeterministicConfig.internalValue = value;
  }
  public resetCryptoDeterministicConfig() {
    this._cryptoDeterministicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoDeterministicConfigInput() {
    return this._cryptoDeterministicConfig.internalValue;
  }

  // crypto_hash_config - computed: false, optional: true, required: false
  private _cryptoHashConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigOutputReference(this, "crypto_hash_config");
  public get cryptoHashConfig() {
    return this._cryptoHashConfig;
  }
  public putCryptoHashConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig) {
    this._cryptoHashConfig.internalValue = value;
  }
  public resetCryptoHashConfig() {
    this._cryptoHashConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHashConfigInput() {
    return this._cryptoHashConfig.internalValue;
  }

  // crypto_replace_ffx_fpe_config - computed: false, optional: true, required: false
  private _cryptoReplaceFfxFpeConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference(this, "crypto_replace_ffx_fpe_config");
  public get cryptoReplaceFfxFpeConfig() {
    return this._cryptoReplaceFfxFpeConfig;
  }
  public putCryptoReplaceFfxFpeConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig) {
    this._cryptoReplaceFfxFpeConfig.internalValue = value;
  }
  public resetCryptoReplaceFfxFpeConfig() {
    this._cryptoReplaceFfxFpeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoReplaceFfxFpeConfigInput() {
    return this._cryptoReplaceFfxFpeConfig.internalValue;
  }

  // date_shift_config - computed: false, optional: true, required: false
  private _dateShiftConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigOutputReference(this, "date_shift_config");
  public get dateShiftConfig() {
    return this._dateShiftConfig;
  }
  public putDateShiftConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig) {
    this._dateShiftConfig.internalValue = value;
  }
  public resetDateShiftConfig() {
    this._dateShiftConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateShiftConfigInput() {
    return this._dateShiftConfig.internalValue;
  }

  // fixed_size_bucketing_config - computed: false, optional: true, required: false
  private _fixedSizeBucketingConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference(this, "fixed_size_bucketing_config");
  public get fixedSizeBucketingConfig() {
    return this._fixedSizeBucketingConfig;
  }
  public putFixedSizeBucketingConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig) {
    this._fixedSizeBucketingConfig.internalValue = value;
  }
  public resetFixedSizeBucketingConfig() {
    this._fixedSizeBucketingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedSizeBucketingConfigInput() {
    return this._fixedSizeBucketingConfig.internalValue;
  }

  // redact_config - computed: false, optional: true, required: false
  private _redactConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigOutputReference(this, "redact_config");
  public get redactConfig() {
    return this._redactConfig;
  }
  public putRedactConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig) {
    this._redactConfig.internalValue = value;
  }
  public resetRedactConfig() {
    this._redactConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactConfigInput() {
    return this._redactConfig.internalValue;
  }

  // replace_config - computed: false, optional: true, required: false
  private _replaceConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigOutputReference(this, "replace_config");
  public get replaceConfig() {
    return this._replaceConfig;
  }
  public putReplaceConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig) {
    this._replaceConfig.internalValue = value;
  }
  public resetReplaceConfig() {
    this._replaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceConfigInput() {
    return this._replaceConfig.internalValue;
  }

  // replace_dictionary_config - computed: false, optional: true, required: false
  private _replaceDictionaryConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference(this, "replace_dictionary_config");
  public get replaceDictionaryConfig() {
    return this._replaceDictionaryConfig;
  }
  public putReplaceDictionaryConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig) {
    this._replaceDictionaryConfig.internalValue = value;
  }
  public resetReplaceDictionaryConfig() {
    this._replaceDictionaryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceDictionaryConfigInput() {
    return this._replaceDictionaryConfig.internalValue;
  }

  // time_part_config - computed: false, optional: true, required: false
  private _timePartConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigOutputReference(this, "time_part_config");
  public get timePartConfig() {
    return this._timePartConfig;
  }
  public putTimePartConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig) {
    this._timePartConfig.internalValue = value;
  }
  public resetTimePartConfig() {
    this._timePartConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePartConfigInput() {
    return this._timePartConfig.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations {
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#info_types GoogleDataLossPreventionDeidentifyTemplate#info_types}
  */
  readonly infoTypes?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes[] | cdktf.IResolvable;
  /**
  * primitive_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#primitive_transformation GoogleDataLossPreventionDeidentifyTemplate#primitive_transformation}
  */
  readonly primitiveTransformation: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformation;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesToTerraform, true)(struct!.infoTypes),
    primitive_transformation: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationToTerraform(struct!.primitiveTransformation),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_types: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesList",
    },
    primitive_transformation: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationToHclTerraform(struct!.primitiveTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    if (this._primitiveTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primitiveTransformation = this._primitiveTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = undefined;
      this._primitiveTransformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = value.infoTypes;
      this._primitiveTransformation.internalValue = value.primitiveTransformation;
    }
  }

  // info_types - computed: false, optional: true, required: false
  private _infoTypes = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  public resetInfoTypes() {
    this._infoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }

  // primitive_transformation - computed: false, optional: false, required: true
  private _primitiveTransformation = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformationOutputReference(this, "primitive_transformation");
  public get primitiveTransformation() {
    return this._primitiveTransformation;
  }
  public putPrimitiveTransformation(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsPrimitiveTransformation) {
    this._primitiveTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primitiveTransformationInput() {
    return this._primitiveTransformation.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations {
  /**
  * transformations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#transformations GoogleDataLossPreventionDeidentifyTemplate#transformations}
  */
  readonly transformations: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformations: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsToTerraform, true)(struct!.transformations),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformations: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsToHclTerraform, true)(struct!.transformations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformations = this._transformations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformations.internalValue = value.transformations;
    }
  }

  // transformations - computed: false, optional: false, required: true
  private _transformations = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformationsList(this, "transformations", false);
  public get transformations() {
    return this._transformations;
  }
  public putTransformations(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformationsTransformations[] | cdktf.IResolvable) {
    this._transformations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationsInput() {
    return this._transformations.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsField {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsFieldToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsFieldOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsFieldToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsFieldOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValue {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#boolean_value GoogleDataLossPreventionDeidentifyTemplate#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._booleanValue = undefined;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._booleanValue = value.booleanValue;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditions {
  /**
  * Operator used to compare the field or infoType to the value. Possible values: ["EQUAL_TO", "NOT_EQUAL_TO", "GREATER_THAN", "LESS_THAN", "GREATER_THAN_OR_EQUALS", "LESS_THAN_OR_EQUALS", "EXISTS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#operator GoogleDataLossPreventionDeidentifyTemplate#operator}
  */
  readonly operator: string;
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#field GoogleDataLossPreventionDeidentifyTemplate#field}
  */
  readonly field: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsField;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#value GoogleDataLossPreventionDeidentifyTemplate#value}
  */
  readonly value?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    field: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsFieldToTerraform(struct!.field),
    value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueToTerraform(struct!.value),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsFieldList",
    },
    value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._field.internalValue = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._field.internalValue = value.field;
      this._value.internalValue = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // field - computed: false, optional: false, required: true
  private _field = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsField) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }

  // value - computed: false, optional: true, required: false
  private _value = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditions {
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#conditions GoogleDataLossPreventionDeidentifyTemplate#conditions}
  */
  readonly conditions?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditions[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsToTerraform, true)(struct!.conditions),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressions {
  /**
  * The operator to apply to the result of conditions. Default and currently only supported value is AND Default value: "AND" Possible values: ["AND"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#logical_operator GoogleDataLossPreventionDeidentifyTemplate#logical_operator}
  */
  readonly logicalOperator?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#conditions GoogleDataLossPreventionDeidentifyTemplate#conditions}
  */
  readonly conditions?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditions;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logical_operator: cdktf.stringToTerraform(struct!.logicalOperator),
    conditions: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsToTerraform(struct!.conditions),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logical_operator: {
      value: cdktf.stringToHclTerraform(struct!.logicalOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logicalOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalOperator = this._logicalOperator;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logicalOperator = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logicalOperator = value.logicalOperator;
      this._conditions.internalValue = value.conditions;
    }
  }

  // logical_operator - computed: false, optional: true, required: false
  private _logicalOperator?: string; 
  public get logicalOperator() {
    return this.getStringAttribute('logical_operator');
  }
  public set logicalOperator(value: string) {
    this._logicalOperator = value;
  }
  public resetLogicalOperator() {
    this._logicalOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalOperatorInput() {
    return this._logicalOperator;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsCondition {
  /**
  * expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#expressions GoogleDataLossPreventionDeidentifyTemplate#expressions}
  */
  readonly expressions?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressions;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsToTerraform(struct!.expressions),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsToHclTerraform(struct!.expressions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions.internalValue = value.expressions;
    }
  }

  // expressions - computed: false, optional: true, required: false
  private _expressions = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressionsOutputReference(this, "expressions");
  public get expressions() {
    return this._expressions;
  }
  public putExpressions(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsConditionExpressions) {
    this._expressions.internalValue = value;
  }
  public resetExpressions() {
    this._expressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFields {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#score GoogleDataLossPreventionDeidentifyTemplate#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypes {
  /**
  * Name of the information type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
  /**
  * Version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#version GoogleDataLossPreventionDeidentifyTemplate#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#sensitivity_score GoogleDataLossPreventionDeidentifyTemplate#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScore;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax {
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin {
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue {
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets {
  /**
  * max block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#max GoogleDataLossPreventionDeidentifyTemplate#max}
  */
  readonly max?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax;
  /**
  * min block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#min GoogleDataLossPreventionDeidentifyTemplate#min}
  */
  readonly min?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin;
  /**
  * replacement_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#replacement_value GoogleDataLossPreventionDeidentifyTemplate#replacement_value}
  */
  readonly replacementValue: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToTerraform(struct!.max),
    min: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinToTerraform(struct!.min),
    replacement_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToTerraform(struct!.replacementValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxToHclTerraform(struct!.max),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxList",
    },
    min: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinToHclTerraform(struct!.min),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinList",
    },
    replacement_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueToHclTerraform(struct!.replacementValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max?.internalValue;
    }
    if (this._min?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min?.internalValue;
    }
    if (this._replacementValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementValue = this._replacementValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max.internalValue = undefined;
      this._min.internalValue = undefined;
      this._replacementValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max.internalValue = value.max;
      this._min.internalValue = value.min;
      this._replacementValue.internalValue = value.replacementValue;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMaxOutputReference(this, "max");
  public get max() {
    return this._max;
  }
  public putMax(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMax) {
    this._max.internalValue = value;
  }
  public resetMax() {
    this._max.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max.internalValue;
  }

  // min - computed: false, optional: true, required: false
  private _min = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMinOutputReference(this, "min");
  public get min() {
    return this._min;
  }
  public putMin(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsMin) {
    this._min.internalValue = value;
  }
  public resetMin() {
    this._min.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min.internalValue;
  }

  // replacement_value - computed: false, optional: false, required: true
  private _replacementValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValueOutputReference(this, "replacement_value");
  public get replacementValue() {
    return this._replacementValue;
  }
  public putReplacementValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsReplacementValue) {
    this._replacementValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementValueInput() {
    return this._replacementValue.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig {
  /**
  * buckets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#buckets GoogleDataLossPreventionDeidentifyTemplate#buckets}
  */
  readonly buckets: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buckets: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsToTerraform, true)(struct!.buckets),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buckets: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsToHclTerraform, true)(struct!.buckets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buckets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buckets = this._buckets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._buckets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._buckets.internalValue = value.buckets;
    }
  }

  // buckets - computed: false, optional: false, required: true
  private _buckets = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
  public putBuckets(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigBuckets[] | cdktf.IResolvable) {
    this._buckets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketsInput() {
    return this._buckets.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore {
  /**
  * Characters to not transform when masking. Only one of this or 'common_characters_to_ignore' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#characters_to_skip GoogleDataLossPreventionDeidentifyTemplate#characters_to_skip}
  */
  readonly charactersToSkip?: string;
  /**
  * Common characters to not transform when masking. Useful to avoid removing punctuation. Only one of this or 'characters_to_skip' must be specified. Possible values: ["NUMERIC", "ALPHA_UPPER_CASE", "ALPHA_LOWER_CASE", "PUNCTUATION", "WHITESPACE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#common_characters_to_ignore GoogleDataLossPreventionDeidentifyTemplate#common_characters_to_ignore}
  */
  readonly commonCharactersToIgnore?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    characters_to_skip: cdktf.stringToTerraform(struct!.charactersToSkip),
    common_characters_to_ignore: cdktf.stringToTerraform(struct!.commonCharactersToIgnore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    characters_to_skip: {
      value: cdktf.stringToHclTerraform(struct!.charactersToSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_characters_to_ignore: {
      value: cdktf.stringToHclTerraform(struct!.commonCharactersToIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._charactersToSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.charactersToSkip = this._charactersToSkip;
    }
    if (this._commonCharactersToIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonCharactersToIgnore = this._commonCharactersToIgnore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._charactersToSkip = undefined;
      this._commonCharactersToIgnore = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._charactersToSkip = value.charactersToSkip;
      this._commonCharactersToIgnore = value.commonCharactersToIgnore;
    }
  }

  // characters_to_skip - computed: false, optional: true, required: false
  private _charactersToSkip?: string; 
  public get charactersToSkip() {
    return this.getStringAttribute('characters_to_skip');
  }
  public set charactersToSkip(value: string) {
    this._charactersToSkip = value;
  }
  public resetCharactersToSkip() {
    this._charactersToSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charactersToSkipInput() {
    return this._charactersToSkip;
  }

  // common_characters_to_ignore - computed: false, optional: true, required: false
  private _commonCharactersToIgnore?: string; 
  public get commonCharactersToIgnore() {
    return this.getStringAttribute('common_characters_to_ignore');
  }
  public set commonCharactersToIgnore(value: string) {
    this._commonCharactersToIgnore = value;
  }
  public resetCommonCharactersToIgnore() {
    this._commonCharactersToIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonCharactersToIgnoreInput() {
    return this._commonCharactersToIgnore;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig {
  /**
  * Character to use to mask the sensitive values—for example, * for an alphabetic string such as a name, or 0 for a numeric string
  * such as ZIP code or credit card number. This string must have a length of 1. If not supplied, this value defaults to * for
  * strings, and 0 for digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#masking_character GoogleDataLossPreventionDeidentifyTemplate#masking_character}
  */
  readonly maskingCharacter?: string;
  /**
  * Number of characters to mask. If not set, all matching chars will be masked. Skipped characters do not count towards this tally.
  * If number_to_mask is negative, this denotes inverse masking. Cloud DLP masks all but a number of characters. For example, suppose you have the following values:
  * - 'masking_character' is *
  * - 'number_to_mask' is -4
  * - 'reverse_order' is false
  * - 'characters_to_ignore' includes -
  * - Input string is 1234-5678-9012-3456
  * 
  * The resulting de-identified string is ****-****-****-3456. Cloud DLP masks all but the last four characters. If reverseOrder is true, all but the first four characters are masked as 1234-****-****-****.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#number_to_mask GoogleDataLossPreventionDeidentifyTemplate#number_to_mask}
  */
  readonly numberToMask?: number;
  /**
  * Mask characters in reverse order. For example, if masking_character is 0, number_to_mask is 14, and reverse_order is 'false', then the
  * input string '1234-5678-9012-3456' is masked as '00000000000000-3456'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#reverse_order GoogleDataLossPreventionDeidentifyTemplate#reverse_order}
  */
  readonly reverseOrder?: boolean | cdktf.IResolvable;
  /**
  * characters_to_ignore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#characters_to_ignore GoogleDataLossPreventionDeidentifyTemplate#characters_to_ignore}
  */
  readonly charactersToIgnore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore[] | cdktf.IResolvable;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masking_character: cdktf.stringToTerraform(struct!.maskingCharacter),
    number_to_mask: cdktf.numberToTerraform(struct!.numberToMask),
    reverse_order: cdktf.booleanToTerraform(struct!.reverseOrder),
    characters_to_ignore: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToTerraform, true)(struct!.charactersToIgnore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masking_character: {
      value: cdktf.stringToHclTerraform(struct!.maskingCharacter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_to_mask: {
      value: cdktf.numberToHclTerraform(struct!.numberToMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reverse_order: {
      value: cdktf.booleanToHclTerraform(struct!.reverseOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    characters_to_ignore: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreToHclTerraform, true)(struct!.charactersToIgnore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maskingCharacter !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskingCharacter = this._maskingCharacter;
    }
    if (this._numberToMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberToMask = this._numberToMask;
    }
    if (this._reverseOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverseOrder = this._reverseOrder;
    }
    if (this._charactersToIgnore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.charactersToIgnore = this._charactersToIgnore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maskingCharacter = undefined;
      this._numberToMask = undefined;
      this._reverseOrder = undefined;
      this._charactersToIgnore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maskingCharacter = value.maskingCharacter;
      this._numberToMask = value.numberToMask;
      this._reverseOrder = value.reverseOrder;
      this._charactersToIgnore.internalValue = value.charactersToIgnore;
    }
  }

  // masking_character - computed: false, optional: true, required: false
  private _maskingCharacter?: string; 
  public get maskingCharacter() {
    return this.getStringAttribute('masking_character');
  }
  public set maskingCharacter(value: string) {
    this._maskingCharacter = value;
  }
  public resetMaskingCharacter() {
    this._maskingCharacter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingCharacterInput() {
    return this._maskingCharacter;
  }

  // number_to_mask - computed: false, optional: true, required: false
  private _numberToMask?: number; 
  public get numberToMask() {
    return this.getNumberAttribute('number_to_mask');
  }
  public set numberToMask(value: number) {
    this._numberToMask = value;
  }
  public resetNumberToMask() {
    this._numberToMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberToMaskInput() {
    return this._numberToMask;
  }

  // reverse_order - computed: false, optional: true, required: false
  private _reverseOrder?: boolean | cdktf.IResolvable; 
  public get reverseOrder() {
    return this.getBooleanAttribute('reverse_order');
  }
  public set reverseOrder(value: boolean | cdktf.IResolvable) {
    this._reverseOrder = value;
  }
  public resetReverseOrder() {
    this._reverseOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseOrderInput() {
    return this._reverseOrder;
  }

  // characters_to_ignore - computed: false, optional: true, required: false
  private _charactersToIgnore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnoreList(this, "characters_to_ignore", false);
  public get charactersToIgnore() {
    return this._charactersToIgnore;
  }
  public putCharactersToIgnore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigCharactersToIgnore[] | cdktf.IResolvable) {
    this._charactersToIgnore.internalValue = value;
  }
  public resetCharactersToIgnore() {
    this._charactersToIgnore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get charactersToIgnoreInput() {
    return this._charactersToIgnore.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#score GoogleDataLossPreventionDeidentifyTemplate#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at [https://cloud.google.com/dlp/docs/infotypes-reference](https://cloud.google.com/dlp/docs/infotypes-reference) when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern '[A-Za-z0-9$-_]{1,64}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
  /**
  * Optional version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#version GoogleDataLossPreventionDeidentifyTemplate#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#sensitivity_score GoogleDataLossPreventionDeidentifyTemplate#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig {
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#context GoogleDataLossPreventionDeidentifyTemplate#context}
  */
  readonly context?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext;
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey;
  /**
  * surrogate_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#surrogate_info_type GoogleDataLossPreventionDeidentifyTemplate#surrogate_info_type}
  */
  readonly surrogateInfoType: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToTerraform(struct!.context),
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToTerraform(struct!.cryptoKey),
    surrogate_info_type: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToTerraform(struct!.surrogateInfoType),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextToHclTerraform(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextList",
    },
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyList",
    },
    surrogate_info_type: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeToHclTerraform(struct!.surrogateInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    if (this._surrogateInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateInfoType = this._surrogateInfoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context.internalValue = undefined;
      this._cryptoKey.internalValue = undefined;
      this._surrogateInfoType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context.internalValue = value.context;
      this._cryptoKey.internalValue = value.cryptoKey;
      this._surrogateInfoType.internalValue = value.surrogateInfoType;
    }
  }

  // context - computed: false, optional: true, required: false
  private _context = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // crypto_key - computed: false, optional: false, required: true
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }

  // surrogate_info_type - computed: false, optional: false, required: true
  private _surrogateInfoType = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoTypeOutputReference(this, "surrogate_info_type");
  public get surrogateInfoType() {
    return this._surrogateInfoType;
  }
  public putSurrogateInfoType(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigSurrogateInfoType) {
    this._surrogateInfoType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateInfoTypeInput() {
    return this._surrogateInfoType.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig {
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToTerraform(struct!.cryptoKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKey.internalValue = value.cryptoKey;
    }
  }

  // crypto_key - computed: false, optional: false, required: true
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#score GoogleDataLossPreventionDeidentifyTemplate#score}
  */
  readonly score: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed at [https://cloud.google.com/dlp/docs/infotypes-reference](https://cloud.google.com/dlp/docs/infotypes-reference) when specifying a built-in type. When sending Cloud DLP results to Data Catalog, infoType names should conform to the pattern '[A-Za-z0-9$-_]{1,64}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
  /**
  * Optional version name for this InfoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#version GoogleDataLossPreventionDeidentifyTemplate#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#sensitivity_score GoogleDataLossPreventionDeidentifyTemplate#sensitivity_score}
  */
  readonly sensitivityScore?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig {
  /**
  * Common alphabets. Only one of this, 'custom_alphabet' or 'radix' must be specified. Possible values: ["NUMERIC", "HEXADECIMAL", "UPPER_CASE_ALPHA_NUMERIC", "ALPHA_NUMERIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#common_alphabet GoogleDataLossPreventionDeidentifyTemplate#common_alphabet}
  */
  readonly commonAlphabet?: string;
  /**
  * This is supported by mapping these to the alphanumeric characters that the FFX mode natively supports. This happens before/after encryption/decryption. Each character listed must appear only once. Number of characters must be in the range \[2, 95\]. This must be encoded as ASCII. The order of characters does not matter. The full list of allowed characters is:
  * 
  * ''0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ~'!@#$%^&*()_-+={[}]|:;"'<,>.?/''. Only one of this, 'common_alphabet' or 'radix' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#custom_alphabet GoogleDataLossPreventionDeidentifyTemplate#custom_alphabet}
  */
  readonly customAlphabet?: string;
  /**
  * The native way to select the alphabet. Must be in the range \[2, 95\]. Only one of this, 'custom_alphabet' or 'common_alphabet' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#radix GoogleDataLossPreventionDeidentifyTemplate#radix}
  */
  readonly radix?: number;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#context GoogleDataLossPreventionDeidentifyTemplate#context}
  */
  readonly context?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext;
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey;
  /**
  * surrogate_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#surrogate_info_type GoogleDataLossPreventionDeidentifyTemplate#surrogate_info_type}
  */
  readonly surrogateInfoType?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_alphabet: cdktf.stringToTerraform(struct!.commonAlphabet),
    custom_alphabet: cdktf.stringToTerraform(struct!.customAlphabet),
    radix: cdktf.numberToTerraform(struct!.radix),
    context: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToTerraform(struct!.context),
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToTerraform(struct!.cryptoKey),
    surrogate_info_type: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToTerraform(struct!.surrogateInfoType),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_alphabet: {
      value: cdktf.stringToHclTerraform(struct!.commonAlphabet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_alphabet: {
      value: cdktf.stringToHclTerraform(struct!.customAlphabet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radix: {
      value: cdktf.numberToHclTerraform(struct!.radix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextToHclTerraform(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextList",
    },
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyList",
    },
    surrogate_info_type: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeToHclTerraform(struct!.surrogateInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAlphabet !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAlphabet = this._commonAlphabet;
    }
    if (this._customAlphabet !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAlphabet = this._customAlphabet;
    }
    if (this._radix !== undefined) {
      hasAnyValues = true;
      internalValueResult.radix = this._radix;
    }
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    if (this._surrogateInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateInfoType = this._surrogateInfoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonAlphabet = undefined;
      this._customAlphabet = undefined;
      this._radix = undefined;
      this._context.internalValue = undefined;
      this._cryptoKey.internalValue = undefined;
      this._surrogateInfoType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonAlphabet = value.commonAlphabet;
      this._customAlphabet = value.customAlphabet;
      this._radix = value.radix;
      this._context.internalValue = value.context;
      this._cryptoKey.internalValue = value.cryptoKey;
      this._surrogateInfoType.internalValue = value.surrogateInfoType;
    }
  }

  // common_alphabet - computed: false, optional: true, required: false
  private _commonAlphabet?: string; 
  public get commonAlphabet() {
    return this.getStringAttribute('common_alphabet');
  }
  public set commonAlphabet(value: string) {
    this._commonAlphabet = value;
  }
  public resetCommonAlphabet() {
    this._commonAlphabet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAlphabetInput() {
    return this._commonAlphabet;
  }

  // custom_alphabet - computed: false, optional: true, required: false
  private _customAlphabet?: string; 
  public get customAlphabet() {
    return this.getStringAttribute('custom_alphabet');
  }
  public set customAlphabet(value: string) {
    this._customAlphabet = value;
  }
  public resetCustomAlphabet() {
    this._customAlphabet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAlphabetInput() {
    return this._customAlphabet;
  }

  // radix - computed: false, optional: true, required: false
  private _radix?: number; 
  public get radix() {
    return this.getNumberAttribute('radix');
  }
  public set radix(value: number) {
    this._radix = value;
  }
  public resetRadix() {
    this._radix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radixInput() {
    return this._radix;
  }

  // context - computed: false, optional: true, required: false
  private _context = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // crypto_key - computed: false, optional: false, required: true
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }

  // surrogate_info_type - computed: false, optional: true, required: false
  private _surrogateInfoType = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoTypeOutputReference(this, "surrogate_info_type");
  public get surrogateInfoType() {
    return this._surrogateInfoType;
  }
  public putSurrogateInfoType(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigSurrogateInfoType) {
    this._surrogateInfoType.internalValue = value;
  }
  public resetSurrogateInfoType() {
    this._surrogateInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateInfoTypeInput() {
    return this._surrogateInfoType.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped {
  /**
  * The resource name of the KMS CryptoKey to use for unwrapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key_name GoogleDataLossPreventionDeidentifyTemplate#crypto_key_name}
  */
  readonly cryptoKeyName: string;
  /**
  * The wrapped data crypto key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#wrapped_key GoogleDataLossPreventionDeidentifyTemplate#wrapped_key}
  */
  readonly wrappedKey: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crypto_key_name: cdktf.stringToTerraform(struct!.cryptoKeyName),
    wrapped_key: cdktf.stringToTerraform(struct!.wrappedKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crypto_key_name: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wrapped_key: {
      value: cdktf.stringToHclTerraform(struct!.wrappedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cryptoKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyName = this._cryptoKeyName;
    }
    if (this._wrappedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrappedKey = this._wrappedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cryptoKeyName = undefined;
      this._wrappedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cryptoKeyName = value.cryptoKeyName;
      this._wrappedKey = value.wrappedKey;
    }
  }

  // crypto_key_name - computed: false, optional: false, required: true
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient {
  /**
  * Name of the key. This is an arbitrary string used to differentiate different keys. A unique key is generated per name: two separate 'TransientCryptoKey' protos share the same generated key if their names are the same. When the data crypto key is generated, this name is not used in any way (repeating the api call will result in a different key being generated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#name GoogleDataLossPreventionDeidentifyTemplate#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped {
  /**
  * A 128/192/256 bit key.
  * 
  * A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#key GoogleDataLossPreventionDeidentifyTemplate#key}
  */
  readonly key: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey {
  /**
  * kms_wrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#kms_wrapped GoogleDataLossPreventionDeidentifyTemplate#kms_wrapped}
  */
  readonly kmsWrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped;
  /**
  * transient block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#transient GoogleDataLossPreventionDeidentifyTemplate#transient}
  */
  readonly transient?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient;
  /**
  * unwrapped block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#unwrapped GoogleDataLossPreventionDeidentifyTemplate#unwrapped}
  */
  readonly unwrapped?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_wrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToTerraform(struct!.kmsWrapped),
    transient: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToTerraform(struct!.transient),
    unwrapped: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToTerraform(struct!.unwrapped),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_wrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedToHclTerraform(struct!.kmsWrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedList",
    },
    transient: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientToHclTerraform(struct!.transient),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientList",
    },
    unwrapped: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedToHclTerraform(struct!.unwrapped),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsWrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsWrapped = this._kmsWrapped?.internalValue;
    }
    if (this._transient?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transient = this._transient?.internalValue;
    }
    if (this._unwrapped?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unwrapped = this._unwrapped?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsWrapped.internalValue = undefined;
      this._transient.internalValue = undefined;
      this._unwrapped.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsWrapped.internalValue = value.kmsWrapped;
      this._transient.internalValue = value.transient;
      this._unwrapped.internalValue = value.unwrapped;
    }
  }

  // kms_wrapped - computed: false, optional: true, required: false
  private _kmsWrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrappedOutputReference(this, "kms_wrapped");
  public get kmsWrapped() {
    return this._kmsWrapped;
  }
  public putKmsWrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyKmsWrapped) {
    this._kmsWrapped.internalValue = value;
  }
  public resetKmsWrapped() {
    this._kmsWrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsWrappedInput() {
    return this._kmsWrapped.internalValue;
  }

  // transient - computed: false, optional: true, required: false
  private _transient = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransientOutputReference(this, "transient");
  public get transient() {
    return this._transient;
  }
  public putTransient(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyTransient) {
    this._transient.internalValue = value;
  }
  public resetTransient() {
    this._transient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transientInput() {
    return this._transient.internalValue;
  }

  // unwrapped - computed: false, optional: true, required: false
  private _unwrapped = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrappedOutputReference(this, "unwrapped");
  public get unwrapped() {
    return this._unwrapped;
  }
  public putUnwrapped(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyUnwrapped) {
    this._unwrapped.internalValue = value;
  }
  public resetUnwrapped() {
    this._unwrapped.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unwrappedInput() {
    return this._unwrapped.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig {
  /**
  * For example, -5 means shift date to at most 5 days back in the past.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#lower_bound_days GoogleDataLossPreventionDeidentifyTemplate#lower_bound_days}
  */
  readonly lowerBoundDays: number;
  /**
  * Range of shift in days. Actual shift will be selected at random within this range (inclusive ends). Negative means shift to earlier in time. Must not be more than 365250 days (1000 years) each direction.
  * 
  * For example, 3 means shift date to at most 3 days into the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#upper_bound_days GoogleDataLossPreventionDeidentifyTemplate#upper_bound_days}
  */
  readonly upperBoundDays: number;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#context GoogleDataLossPreventionDeidentifyTemplate#context}
  */
  readonly context?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext;
  /**
  * crypto_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_key GoogleDataLossPreventionDeidentifyTemplate#crypto_key}
  */
  readonly cryptoKey?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lower_bound_days: cdktf.numberToTerraform(struct!.lowerBoundDays),
    upper_bound_days: cdktf.numberToTerraform(struct!.upperBoundDays),
    context: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextToTerraform(struct!.context),
    crypto_key: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToTerraform(struct!.cryptoKey),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lower_bound_days: {
      value: cdktf.numberToHclTerraform(struct!.lowerBoundDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper_bound_days: {
      value: cdktf.numberToHclTerraform(struct!.upperBoundDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    context: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextToHclTerraform(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextList",
    },
    crypto_key: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyToHclTerraform(struct!.cryptoKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lowerBoundDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBoundDays = this._lowerBoundDays;
    }
    if (this._upperBoundDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBoundDays = this._upperBoundDays;
    }
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._cryptoKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKey = this._cryptoKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lowerBoundDays = undefined;
      this._upperBoundDays = undefined;
      this._context.internalValue = undefined;
      this._cryptoKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lowerBoundDays = value.lowerBoundDays;
      this._upperBoundDays = value.upperBoundDays;
      this._context.internalValue = value.context;
      this._cryptoKey.internalValue = value.cryptoKey;
    }
  }

  // lower_bound_days - computed: false, optional: false, required: true
  private _lowerBoundDays?: number; 
  public get lowerBoundDays() {
    return this.getNumberAttribute('lower_bound_days');
  }
  public set lowerBoundDays(value: number) {
    this._lowerBoundDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundDaysInput() {
    return this._lowerBoundDays;
  }

  // upper_bound_days - computed: false, optional: false, required: true
  private _upperBoundDays?: number; 
  public get upperBoundDays() {
    return this.getNumberAttribute('upper_bound_days');
  }
  public set upperBoundDays(value: number) {
    this._upperBoundDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundDaysInput() {
    return this._upperBoundDays;
  }

  // context - computed: false, optional: true, required: false
  private _context = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKeyOutputReference(this, "crypto_key");
  public get cryptoKey() {
    return this._cryptoKey;
  }
  public putCryptoKey(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigCryptoKey) {
    this._cryptoKey.internalValue = value;
  }
  public resetCryptoKey() {
    this._cryptoKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound {
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._floatValue = undefined;
      this._integerValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
    }
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound {
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._floatValue = undefined;
      this._integerValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
    }
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig {
  /**
  * Size of each bucket (except for minimum and maximum buckets).
  * So if lower_bound = 10, upper_bound = 89, and bucketSize = 10, then the following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60, 60-70, 70-80, 80-89, 89+.
  * Precision up to 2 decimals works.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#bucket_size GoogleDataLossPreventionDeidentifyTemplate#bucket_size}
  */
  readonly bucketSize: number;
  /**
  * lower_bound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#lower_bound GoogleDataLossPreventionDeidentifyTemplate#lower_bound}
  */
  readonly lowerBound: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound;
  /**
  * upper_bound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#upper_bound GoogleDataLossPreventionDeidentifyTemplate#upper_bound}
  */
  readonly upperBound: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_size: cdktf.numberToTerraform(struct!.bucketSize),
    lower_bound: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToTerraform(struct!.lowerBound),
    upper_bound: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToTerraform(struct!.upperBound),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_size: {
      value: cdktf.numberToHclTerraform(struct!.bucketSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lower_bound: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundToHclTerraform(struct!.lowerBound),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundList",
    },
    upper_bound: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundToHclTerraform(struct!.upperBound),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketSize = this._bucketSize;
    }
    if (this._lowerBound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerBound = this._lowerBound?.internalValue;
    }
    if (this._upperBound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upperBound = this._upperBound?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketSize = undefined;
      this._lowerBound.internalValue = undefined;
      this._upperBound.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketSize = value.bucketSize;
      this._lowerBound.internalValue = value.lowerBound;
      this._upperBound.internalValue = value.upperBound;
    }
  }

  // bucket_size - computed: false, optional: false, required: true
  private _bucketSize?: number; 
  public get bucketSize() {
    return this.getNumberAttribute('bucket_size');
  }
  public set bucketSize(value: number) {
    this._bucketSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketSizeInput() {
    return this._bucketSize;
  }

  // lower_bound - computed: false, optional: false, required: true
  private _lowerBound = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBoundOutputReference(this, "lower_bound");
  public get lowerBound() {
    return this._lowerBound;
  }
  public putLowerBound(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigLowerBound) {
    this._lowerBound.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerBoundInput() {
    return this._lowerBound.internalValue;
  }

  // upper_bound - computed: false, optional: false, required: true
  private _upperBound = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBoundOutputReference(this, "upper_bound");
  public get upperBound() {
    return this._upperBound;
  }
  public putUpperBound(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigUpperBound) {
    this._upperBound.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upperBoundInput() {
    return this._upperBound.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig {
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue {
  /**
  * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day GoogleDataLossPreventionDeidentifyTemplate#day}
  */
  readonly day?: number;
  /**
  * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#month GoogleDataLossPreventionDeidentifyTemplate#month}
  */
  readonly month?: number;
  /**
  * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#year GoogleDataLossPreventionDeidentifyTemplate#year}
  */
  readonly year?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#hours GoogleDataLossPreventionDeidentifyTemplate#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#minutes GoogleDataLossPreventionDeidentifyTemplate#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#nanos GoogleDataLossPreventionDeidentifyTemplate#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#seconds GoogleDataLossPreventionDeidentifyTemplate#seconds}
  */
  readonly seconds?: number;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue {
  /**
  * A boolean value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#boolean_value GoogleDataLossPreventionDeidentifyTemplate#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Represents a day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#day_of_week_value GoogleDataLossPreventionDeidentifyTemplate#day_of_week_value}
  */
  readonly dayOfWeekValue?: string;
  /**
  * A float value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#float_value GoogleDataLossPreventionDeidentifyTemplate#float_value}
  */
  readonly floatValue?: number;
  /**
  * An integer value (int64 format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#integer_value GoogleDataLossPreventionDeidentifyTemplate#integer_value}
  */
  readonly integerValue?: string;
  /**
  * A string value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#string_value GoogleDataLossPreventionDeidentifyTemplate#string_value}
  */
  readonly stringValue?: string;
  /**
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits.
  * Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#timestamp_value GoogleDataLossPreventionDeidentifyTemplate#timestamp_value}
  */
  readonly timestampValue?: string;
  /**
  * date_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_value GoogleDataLossPreventionDeidentifyTemplate#date_value}
  */
  readonly dateValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue;
  /**
  * time_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_value GoogleDataLossPreventionDeidentifyTemplate#time_value}
  */
  readonly timeValue?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    day_of_week_value: cdktf.stringToTerraform(struct!.dayOfWeekValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    integer_value: cdktf.stringToTerraform(struct!.integerValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
    date_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToTerraform(struct!.dateValue),
    time_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToTerraform(struct!.timeValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    day_of_week_value: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeekValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_value: {
      value: cdktf.stringToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_value: {
      value: cdktf.stringToHclTerraform(struct!.timestampValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueToHclTerraform(struct!.dateValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueList",
    },
    time_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueToHclTerraform(struct!.timeValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._dayOfWeekValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeekValue = this._dayOfWeekValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._timestampValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampValue = this._timestampValue;
    }
    if (this._dateValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateValue = this._dateValue?.internalValue;
    }
    if (this._timeValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeValue = this._timeValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._booleanValue = undefined;
      this._dayOfWeekValue = undefined;
      this._floatValue = undefined;
      this._integerValue = undefined;
      this._stringValue = undefined;
      this._timestampValue = undefined;
      this._dateValue.internalValue = undefined;
      this._timeValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._booleanValue = value.booleanValue;
      this._dayOfWeekValue = value.dayOfWeekValue;
      this._floatValue = value.floatValue;
      this._integerValue = value.integerValue;
      this._stringValue = value.stringValue;
      this._timestampValue = value.timestampValue;
      this._dateValue.internalValue = value.dateValue;
      this._timeValue.internalValue = value.timeValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // day_of_week_value - computed: false, optional: true, required: false
  private _dayOfWeekValue?: string; 
  public get dayOfWeekValue() {
    return this.getStringAttribute('day_of_week_value');
  }
  public set dayOfWeekValue(value: string) {
    this._dayOfWeekValue = value;
  }
  public resetDayOfWeekValue() {
    this._dayOfWeekValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekValueInput() {
    return this._dayOfWeekValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: string; 
  public get integerValue() {
    return this.getStringAttribute('integer_value');
  }
  public set integerValue(value: string) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
  }

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // timestamp_value - computed: false, optional: true, required: false
  private _timestampValue?: string; 
  public get timestampValue() {
    return this.getStringAttribute('timestamp_value');
  }
  public set timestampValue(value: string) {
    this._timestampValue = value;
  }
  public resetTimestampValue() {
    this._timestampValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampValueInput() {
    return this._timestampValue;
  }

  // date_value - computed: false, optional: true, required: false
  private _dateValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValueOutputReference(this, "date_value");
  public get dateValue() {
    return this._dateValue;
  }
  public putDateValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueDateValue) {
    this._dateValue.internalValue = value;
  }
  public resetDateValue() {
    this._dateValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateValueInput() {
    return this._dateValue.internalValue;
  }

  // time_value - computed: false, optional: true, required: false
  private _timeValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValueOutputReference(this, "time_value");
  public get timeValue() {
    return this._timeValue;
  }
  public putTimeValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueTimeValue) {
    this._timeValue.internalValue = value;
  }
  public resetTimeValue() {
    this._timeValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeValueInput() {
    return this._timeValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig {
  /**
  * new_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#new_value GoogleDataLossPreventionDeidentifyTemplate#new_value}
  */
  readonly newValue: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueToTerraform(struct!.newValue),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_value: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueToHclTerraform(struct!.newValue),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newValue = this._newValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newValue.internalValue = value.newValue;
    }
  }

  // new_value - computed: false, optional: false, required: true
  private _newValue = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValueOutputReference(this, "new_value");
  public get newValue() {
    return this._newValue;
  }
  public putNewValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigNewValue) {
    this._newValue.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newValueInput() {
    return this._newValue.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one phrase and every phrase must contain at least 2 characters that are letters or digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#words GoogleDataLossPreventionDeidentifyTemplate#words}
  */
  readonly words: string[];
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    words: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.words),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig {
  /**
  * word_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#word_list GoogleDataLossPreventionDeidentifyTemplate#word_list}
  */
  readonly wordList: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    word_list: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToTerraform(struct!.wordList),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    word_list: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructToHclTerraform(struct!.wordList),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._wordList.internalValue = value.wordList;
    }
  }

  // word_list - computed: false, optional: false, required: true
  private _wordList = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStructOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigWordListStruct) {
    this._wordList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfig {
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig {
  /**
  * The part of the time to keep. Possible values: ["YEAR", "MONTH", "DAY_OF_MONTH", "DAY_OF_WEEK", "WEEK_OF_YEAR", "HOUR_OF_DAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#part_to_extract GoogleDataLossPreventionDeidentifyTemplate#part_to_extract}
  */
  readonly partToExtract: string;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    part_to_extract: cdktf.stringToTerraform(struct!.partToExtract),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    part_to_extract: {
      value: cdktf.stringToHclTerraform(struct!.partToExtract),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partToExtract !== undefined) {
      hasAnyValues = true;
      internalValueResult.partToExtract = this._partToExtract;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partToExtract = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partToExtract = value.partToExtract;
    }
  }

  // part_to_extract - computed: false, optional: false, required: true
  private _partToExtract?: string; 
  public get partToExtract() {
    return this.getStringAttribute('part_to_extract');
  }
  public set partToExtract(value: string) {
    this._partToExtract = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partToExtractInput() {
    return this._partToExtract;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformation {
  /**
  * bucketing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#bucketing_config GoogleDataLossPreventionDeidentifyTemplate#bucketing_config}
  */
  readonly bucketingConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig;
  /**
  * character_mask_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#character_mask_config GoogleDataLossPreventionDeidentifyTemplate#character_mask_config}
  */
  readonly characterMaskConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig;
  /**
  * crypto_deterministic_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_deterministic_config GoogleDataLossPreventionDeidentifyTemplate#crypto_deterministic_config}
  */
  readonly cryptoDeterministicConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig;
  /**
  * crypto_hash_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_hash_config GoogleDataLossPreventionDeidentifyTemplate#crypto_hash_config}
  */
  readonly cryptoHashConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig;
  /**
  * crypto_replace_ffx_fpe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#crypto_replace_ffx_fpe_config GoogleDataLossPreventionDeidentifyTemplate#crypto_replace_ffx_fpe_config}
  */
  readonly cryptoReplaceFfxFpeConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig;
  /**
  * date_shift_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#date_shift_config GoogleDataLossPreventionDeidentifyTemplate#date_shift_config}
  */
  readonly dateShiftConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig;
  /**
  * fixed_size_bucketing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#fixed_size_bucketing_config GoogleDataLossPreventionDeidentifyTemplate#fixed_size_bucketing_config}
  */
  readonly fixedSizeBucketingConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig;
  /**
  * redact_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#redact_config GoogleDataLossPreventionDeidentifyTemplate#redact_config}
  */
  readonly redactConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig;
  /**
  * replace_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#replace_config GoogleDataLossPreventionDeidentifyTemplate#replace_config}
  */
  readonly replaceConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig;
  /**
  * replace_dictionary_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#replace_dictionary_config GoogleDataLossPreventionDeidentifyTemplate#replace_dictionary_config}
  */
  readonly replaceDictionaryConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig;
  /**
  * replace_with_info_type_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#replace_with_info_type_config GoogleDataLossPreventionDeidentifyTemplate#replace_with_info_type_config}
  */
  readonly replaceWithInfoTypeConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfig;
  /**
  * time_part_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#time_part_config GoogleDataLossPreventionDeidentifyTemplate#time_part_config}
  */
  readonly timePartConfig?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucketing_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigToTerraform(struct!.bucketingConfig),
    character_mask_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigToTerraform(struct!.characterMaskConfig),
    crypto_deterministic_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigToTerraform(struct!.cryptoDeterministicConfig),
    crypto_hash_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigToTerraform(struct!.cryptoHashConfig),
    crypto_replace_ffx_fpe_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToTerraform(struct!.cryptoReplaceFfxFpeConfig),
    date_shift_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigToTerraform(struct!.dateShiftConfig),
    fixed_size_bucketing_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigToTerraform(struct!.fixedSizeBucketingConfig),
    redact_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigToTerraform(struct!.redactConfig),
    replace_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigToTerraform(struct!.replaceConfig),
    replace_dictionary_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigToTerraform(struct!.replaceDictionaryConfig),
    replace_with_info_type_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfigToTerraform(struct!.replaceWithInfoTypeConfig),
    time_part_config: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigToTerraform(struct!.timePartConfig),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationOutputReference | GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucketing_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigToHclTerraform(struct!.bucketingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigList",
    },
    character_mask_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigToHclTerraform(struct!.characterMaskConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigList",
    },
    crypto_deterministic_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigToHclTerraform(struct!.cryptoDeterministicConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigList",
    },
    crypto_hash_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigToHclTerraform(struct!.cryptoHashConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigList",
    },
    crypto_replace_ffx_fpe_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigToHclTerraform(struct!.cryptoReplaceFfxFpeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigList",
    },
    date_shift_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigToHclTerraform(struct!.dateShiftConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigList",
    },
    fixed_size_bucketing_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigToHclTerraform(struct!.fixedSizeBucketingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigList",
    },
    redact_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigToHclTerraform(struct!.redactConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigList",
    },
    replace_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigToHclTerraform(struct!.replaceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigList",
    },
    replace_dictionary_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigToHclTerraform(struct!.replaceDictionaryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigList",
    },
    replace_with_info_type_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfigToHclTerraform(struct!.replaceWithInfoTypeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfigList",
    },
    time_part_config: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigToHclTerraform(struct!.timePartConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketingConfig = this._bucketingConfig?.internalValue;
    }
    if (this._characterMaskConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterMaskConfig = this._characterMaskConfig?.internalValue;
    }
    if (this._cryptoDeterministicConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoDeterministicConfig = this._cryptoDeterministicConfig?.internalValue;
    }
    if (this._cryptoHashConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoHashConfig = this._cryptoHashConfig?.internalValue;
    }
    if (this._cryptoReplaceFfxFpeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoReplaceFfxFpeConfig = this._cryptoReplaceFfxFpeConfig?.internalValue;
    }
    if (this._dateShiftConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateShiftConfig = this._dateShiftConfig?.internalValue;
    }
    if (this._fixedSizeBucketingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedSizeBucketingConfig = this._fixedSizeBucketingConfig?.internalValue;
    }
    if (this._redactConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactConfig = this._redactConfig?.internalValue;
    }
    if (this._replaceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceConfig = this._replaceConfig?.internalValue;
    }
    if (this._replaceDictionaryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceDictionaryConfig = this._replaceDictionaryConfig?.internalValue;
    }
    if (this._replaceWithInfoTypeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceWithInfoTypeConfig = this._replaceWithInfoTypeConfig?.internalValue;
    }
    if (this._timePartConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePartConfig = this._timePartConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketingConfig.internalValue = undefined;
      this._characterMaskConfig.internalValue = undefined;
      this._cryptoDeterministicConfig.internalValue = undefined;
      this._cryptoHashConfig.internalValue = undefined;
      this._cryptoReplaceFfxFpeConfig.internalValue = undefined;
      this._dateShiftConfig.internalValue = undefined;
      this._fixedSizeBucketingConfig.internalValue = undefined;
      this._redactConfig.internalValue = undefined;
      this._replaceConfig.internalValue = undefined;
      this._replaceDictionaryConfig.internalValue = undefined;
      this._replaceWithInfoTypeConfig.internalValue = undefined;
      this._timePartConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketingConfig.internalValue = value.bucketingConfig;
      this._characterMaskConfig.internalValue = value.characterMaskConfig;
      this._cryptoDeterministicConfig.internalValue = value.cryptoDeterministicConfig;
      this._cryptoHashConfig.internalValue = value.cryptoHashConfig;
      this._cryptoReplaceFfxFpeConfig.internalValue = value.cryptoReplaceFfxFpeConfig;
      this._dateShiftConfig.internalValue = value.dateShiftConfig;
      this._fixedSizeBucketingConfig.internalValue = value.fixedSizeBucketingConfig;
      this._redactConfig.internalValue = value.redactConfig;
      this._replaceConfig.internalValue = value.replaceConfig;
      this._replaceDictionaryConfig.internalValue = value.replaceDictionaryConfig;
      this._replaceWithInfoTypeConfig.internalValue = value.replaceWithInfoTypeConfig;
      this._timePartConfig.internalValue = value.timePartConfig;
    }
  }

  // bucketing_config - computed: false, optional: true, required: false
  private _bucketingConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfigOutputReference(this, "bucketing_config");
  public get bucketingConfig() {
    return this._bucketingConfig;
  }
  public putBucketingConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationBucketingConfig) {
    this._bucketingConfig.internalValue = value;
  }
  public resetBucketingConfig() {
    this._bucketingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketingConfigInput() {
    return this._bucketingConfig.internalValue;
  }

  // character_mask_config - computed: false, optional: true, required: false
  private _characterMaskConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfigOutputReference(this, "character_mask_config");
  public get characterMaskConfig() {
    return this._characterMaskConfig;
  }
  public putCharacterMaskConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCharacterMaskConfig) {
    this._characterMaskConfig.internalValue = value;
  }
  public resetCharacterMaskConfig() {
    this._characterMaskConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterMaskConfigInput() {
    return this._characterMaskConfig.internalValue;
  }

  // crypto_deterministic_config - computed: false, optional: true, required: false
  private _cryptoDeterministicConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfigOutputReference(this, "crypto_deterministic_config");
  public get cryptoDeterministicConfig() {
    return this._cryptoDeterministicConfig;
  }
  public putCryptoDeterministicConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoDeterministicConfig) {
    this._cryptoDeterministicConfig.internalValue = value;
  }
  public resetCryptoDeterministicConfig() {
    this._cryptoDeterministicConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoDeterministicConfigInput() {
    return this._cryptoDeterministicConfig.internalValue;
  }

  // crypto_hash_config - computed: false, optional: true, required: false
  private _cryptoHashConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfigOutputReference(this, "crypto_hash_config");
  public get cryptoHashConfig() {
    return this._cryptoHashConfig;
  }
  public putCryptoHashConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoHashConfig) {
    this._cryptoHashConfig.internalValue = value;
  }
  public resetCryptoHashConfig() {
    this._cryptoHashConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoHashConfigInput() {
    return this._cryptoHashConfig.internalValue;
  }

  // crypto_replace_ffx_fpe_config - computed: false, optional: true, required: false
  private _cryptoReplaceFfxFpeConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfigOutputReference(this, "crypto_replace_ffx_fpe_config");
  public get cryptoReplaceFfxFpeConfig() {
    return this._cryptoReplaceFfxFpeConfig;
  }
  public putCryptoReplaceFfxFpeConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationCryptoReplaceFfxFpeConfig) {
    this._cryptoReplaceFfxFpeConfig.internalValue = value;
  }
  public resetCryptoReplaceFfxFpeConfig() {
    this._cryptoReplaceFfxFpeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoReplaceFfxFpeConfigInput() {
    return this._cryptoReplaceFfxFpeConfig.internalValue;
  }

  // date_shift_config - computed: false, optional: true, required: false
  private _dateShiftConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfigOutputReference(this, "date_shift_config");
  public get dateShiftConfig() {
    return this._dateShiftConfig;
  }
  public putDateShiftConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationDateShiftConfig) {
    this._dateShiftConfig.internalValue = value;
  }
  public resetDateShiftConfig() {
    this._dateShiftConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateShiftConfigInput() {
    return this._dateShiftConfig.internalValue;
  }

  // fixed_size_bucketing_config - computed: false, optional: true, required: false
  private _fixedSizeBucketingConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfigOutputReference(this, "fixed_size_bucketing_config");
  public get fixedSizeBucketingConfig() {
    return this._fixedSizeBucketingConfig;
  }
  public putFixedSizeBucketingConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationFixedSizeBucketingConfig) {
    this._fixedSizeBucketingConfig.internalValue = value;
  }
  public resetFixedSizeBucketingConfig() {
    this._fixedSizeBucketingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedSizeBucketingConfigInput() {
    return this._fixedSizeBucketingConfig.internalValue;
  }

  // redact_config - computed: false, optional: true, required: false
  private _redactConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfigOutputReference(this, "redact_config");
  public get redactConfig() {
    return this._redactConfig;
  }
  public putRedactConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationRedactConfig) {
    this._redactConfig.internalValue = value;
  }
  public resetRedactConfig() {
    this._redactConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactConfigInput() {
    return this._redactConfig.internalValue;
  }

  // replace_config - computed: false, optional: true, required: false
  private _replaceConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfigOutputReference(this, "replace_config");
  public get replaceConfig() {
    return this._replaceConfig;
  }
  public putReplaceConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceConfig) {
    this._replaceConfig.internalValue = value;
  }
  public resetReplaceConfig() {
    this._replaceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceConfigInput() {
    return this._replaceConfig.internalValue;
  }

  // replace_dictionary_config - computed: false, optional: true, required: false
  private _replaceDictionaryConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfigOutputReference(this, "replace_dictionary_config");
  public get replaceDictionaryConfig() {
    return this._replaceDictionaryConfig;
  }
  public putReplaceDictionaryConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceDictionaryConfig) {
    this._replaceDictionaryConfig.internalValue = value;
  }
  public resetReplaceDictionaryConfig() {
    this._replaceDictionaryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceDictionaryConfigInput() {
    return this._replaceDictionaryConfig.internalValue;
  }

  // replace_with_info_type_config - computed: false, optional: true, required: false
  private _replaceWithInfoTypeConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfigOutputReference(this, "replace_with_info_type_config");
  public get replaceWithInfoTypeConfig() {
    return this._replaceWithInfoTypeConfig;
  }
  public putReplaceWithInfoTypeConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationReplaceWithInfoTypeConfig) {
    this._replaceWithInfoTypeConfig.internalValue = value;
  }
  public resetReplaceWithInfoTypeConfig() {
    this._replaceWithInfoTypeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceWithInfoTypeConfigInput() {
    return this._replaceWithInfoTypeConfig.internalValue;
  }

  // time_part_config - computed: false, optional: true, required: false
  private _timePartConfig = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfigOutputReference(this, "time_part_config");
  public get timePartConfig() {
    return this._timePartConfig;
  }
  public putTimePartConfig(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationTimePartConfig) {
    this._timePartConfig.internalValue = value;
  }
  public resetTimePartConfig() {
    this._timePartConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePartConfigInput() {
    return this._timePartConfig.internalValue;
  }
}
export interface GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformations {
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#info_types GoogleDataLossPreventionDeidentifyTemplate#info_types}
  */
  readonly infoTypes?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypes[] | cdktf.IResolvable;
  /**
  * primitive_transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_data_loss_prevention_deidentify_template#primitive_transformation GoogleDataLossPreventionDeidentifyTemplate#primitive_transformation}
  */
  readonly primitiveTransformation: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformation;
}

export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsToTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesToTerraform, true)(struct!.infoTypes),
    primitive_transformation: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationToTerraform(struct!.primitiveTransformation),
  }
}


export function googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsToHclTerraform(struct?: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_types: {
      value: cdktf.listMapperHcl(googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesList",
    },
    primitive_transformation: {
      value: googleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationToHclTerraform(struct!.primitiveTransformation),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    if (this._primitiveTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primitiveTransformation = this._primitiveTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = undefined;
      this._primitiveTransformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = value.infoTypes;
      this._primitiveTransformation.internalValue = value.primitiveTransformation;
    }
  }

  // info_types - computed: false, optional: true, required: false
  private _infoTypes = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  public resetInfoTypes() {
    this._infoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }

  // primitive_transformation - computed: false, optional: false, required: true
  private _primitiveTransformation = new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformationOutputReference(this, "primitive_transformation");
  public get primitiveTransformation() {
    return this._primitiveTransformation;
  }
  public putPrimitiveTransformation(value: GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsPrimitiveTransformation) {
    this._primitiveTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primitiveTransformationInput() {
    return this._primitiveTransformation.internalValue;
  }
}

export class GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsOutputReference {
    return new GoogleDataLossPreventionDeidentifyTemplateDeidentifyConfigRecordTransformationsFieldTransformationsInfoTypeTransformationsTransformationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
