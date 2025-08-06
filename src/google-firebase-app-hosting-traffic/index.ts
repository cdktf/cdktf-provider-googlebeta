/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirebaseAppHostingTrafficConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the backend that this Traffic config applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#backend GoogleFirebaseAppHostingTraffic#backend}
  */
  readonly backend: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#id GoogleFirebaseAppHostingTraffic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location the Backend that this Traffic config applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#location GoogleFirebaseAppHostingTraffic#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#project GoogleFirebaseAppHostingTraffic#project}
  */
  readonly project?: string;
  /**
  * rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#rollout_policy GoogleFirebaseAppHostingTraffic#rollout_policy}
  */
  readonly rolloutPolicy?: GoogleFirebaseAppHostingTrafficRolloutPolicy;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#target GoogleFirebaseAppHostingTraffic#target}
  */
  readonly target?: GoogleFirebaseAppHostingTrafficTarget;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#timeouts GoogleFirebaseAppHostingTraffic#timeouts}
  */
  readonly timeouts?: GoogleFirebaseAppHostingTrafficTimeouts;
}
export interface GoogleFirebaseAppHostingTrafficCurrentSplits {
}

export function googleFirebaseAppHostingTrafficCurrentSplitsToTerraform(struct?: GoogleFirebaseAppHostingTrafficCurrentSplits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingTrafficCurrentSplitsToHclTerraform(struct?: GoogleFirebaseAppHostingTrafficCurrentSplits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleFirebaseAppHostingTrafficCurrentSplits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingTrafficCurrentSplits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }
}

export class GoogleFirebaseAppHostingTrafficCurrentSplitsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference {
    return new GoogleFirebaseAppHostingTrafficCurrentSplitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingTrafficCurrent {
}

export function googleFirebaseAppHostingTrafficCurrentToTerraform(struct?: GoogleFirebaseAppHostingTrafficCurrent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirebaseAppHostingTrafficCurrentToHclTerraform(struct?: GoogleFirebaseAppHostingTrafficCurrent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirebaseAppHostingTrafficCurrentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleFirebaseAppHostingTrafficCurrent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingTrafficCurrent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // splits - computed: true, optional: false, required: false
  private _splits = new GoogleFirebaseAppHostingTrafficCurrentSplitsList(this, "splits", false);
  public get splits() {
    return this._splits;
  }
}

export class GoogleFirebaseAppHostingTrafficCurrentList extends cdktf.ComplexList {

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
  public get(index: number): GoogleFirebaseAppHostingTrafficCurrentOutputReference {
    return new GoogleFirebaseAppHostingTrafficCurrentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingTrafficRolloutPolicy {
  /**
  * Specifies a branch that triggers a new build to be started with this
  * policy. If not set, no automatic rollouts will happen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#codebase_branch GoogleFirebaseAppHostingTraffic#codebase_branch}
  */
  readonly codebaseBranch?: string;
  /**
  * A flag that, if true, prevents rollouts from being created via this RolloutPolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#disabled GoogleFirebaseAppHostingTraffic#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function googleFirebaseAppHostingTrafficRolloutPolicyToTerraform(struct?: GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference | GoogleFirebaseAppHostingTrafficRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    codebase_branch: cdktf.stringToTerraform(struct!.codebaseBranch),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function googleFirebaseAppHostingTrafficRolloutPolicyToHclTerraform(struct?: GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference | GoogleFirebaseAppHostingTrafficRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    codebase_branch: {
      value: cdktf.stringToHclTerraform(struct!.codebaseBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseAppHostingTrafficRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codebaseBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.codebaseBranch = this._codebaseBranch;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingTrafficRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._codebaseBranch = undefined;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._codebaseBranch = value.codebaseBranch;
      this._disabled = value.disabled;
    }
  }

  // codebase_branch - computed: false, optional: true, required: false
  private _codebaseBranch?: string; 
  public get codebaseBranch() {
    return this.getStringAttribute('codebase_branch');
  }
  public set codebaseBranch(value: string) {
    this._codebaseBranch = value;
  }
  public resetCodebaseBranch() {
    this._codebaseBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codebaseBranchInput() {
    return this._codebaseBranch;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // disabled_time - computed: true, optional: false, required: false
  public get disabledTime() {
    return this.getStringAttribute('disabled_time');
  }
}
export interface GoogleFirebaseAppHostingTrafficTargetSplits {
  /**
  * The build that traffic is being routed to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#build GoogleFirebaseAppHostingTraffic#build}
  */
  readonly buildAttribute: string;
  /**
  * The percentage of traffic to send to the build. Currently must be 100 or 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#percent GoogleFirebaseAppHostingTraffic#percent}
  */
  readonly percent: number;
}

export function googleFirebaseAppHostingTrafficTargetSplitsToTerraform(struct?: GoogleFirebaseAppHostingTrafficTargetSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build: cdktf.stringToTerraform(struct!.buildAttribute),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function googleFirebaseAppHostingTrafficTargetSplitsToHclTerraform(struct?: GoogleFirebaseAppHostingTrafficTargetSplits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build: {
      value: cdktf.stringToHclTerraform(struct!.buildAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirebaseAppHostingTrafficTargetSplits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._build !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildAttribute = this._build;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingTrafficTargetSplits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._build = undefined;
      this._percent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._build = value.buildAttribute;
      this._percent = value.percent;
    }
  }

  // build - computed: false, optional: false, required: true
  private _build?: string; 
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }
  public set buildAttribute(value: string) {
    this._build = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build;
  }

  // percent - computed: false, optional: false, required: true
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}

export class GoogleFirebaseAppHostingTrafficTargetSplitsList extends cdktf.ComplexList {
  public internalValue? : GoogleFirebaseAppHostingTrafficTargetSplits[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference {
    return new GoogleFirebaseAppHostingTrafficTargetSplitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirebaseAppHostingTrafficTarget {
  /**
  * splits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#splits GoogleFirebaseAppHostingTraffic#splits}
  */
  readonly splits: GoogleFirebaseAppHostingTrafficTargetSplits[] | cdktf.IResolvable;
}

export function googleFirebaseAppHostingTrafficTargetToTerraform(struct?: GoogleFirebaseAppHostingTrafficTargetOutputReference | GoogleFirebaseAppHostingTrafficTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    splits: cdktf.listMapper(googleFirebaseAppHostingTrafficTargetSplitsToTerraform, true)(struct!.splits),
  }
}


export function googleFirebaseAppHostingTrafficTargetToHclTerraform(struct?: GoogleFirebaseAppHostingTrafficTargetOutputReference | GoogleFirebaseAppHostingTrafficTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    splits: {
      value: cdktf.listMapperHcl(googleFirebaseAppHostingTrafficTargetSplitsToHclTerraform, true)(struct!.splits),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirebaseAppHostingTrafficTargetSplitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAppHostingTrafficTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirebaseAppHostingTrafficTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._splits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splits = this._splits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingTrafficTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._splits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._splits.internalValue = value.splits;
    }
  }

  // splits - computed: false, optional: false, required: true
  private _splits = new GoogleFirebaseAppHostingTrafficTargetSplitsList(this, "splits", false);
  public get splits() {
    return this._splits;
  }
  public putSplits(value: GoogleFirebaseAppHostingTrafficTargetSplits[] | cdktf.IResolvable) {
    this._splits.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitsInput() {
    return this._splits.internalValue;
  }
}
export interface GoogleFirebaseAppHostingTrafficTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#create GoogleFirebaseAppHostingTraffic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#delete GoogleFirebaseAppHostingTraffic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#update GoogleFirebaseAppHostingTraffic#update}
  */
  readonly update?: string;
}

export function googleFirebaseAppHostingTrafficTimeoutsToTerraform(struct?: GoogleFirebaseAppHostingTrafficTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function googleFirebaseAppHostingTrafficTimeoutsToHclTerraform(struct?: GoogleFirebaseAppHostingTrafficTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirebaseAppHostingTrafficTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirebaseAppHostingTrafficTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirebaseAppHostingTrafficTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic google_firebase_app_hosting_traffic}
*/
export class GoogleFirebaseAppHostingTraffic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_app_hosting_traffic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirebaseAppHostingTraffic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirebaseAppHostingTraffic to import
  * @param importFromId The id of the existing GoogleFirebaseAppHostingTraffic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirebaseAppHostingTraffic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_app_hosting_traffic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_firebase_app_hosting_traffic google_firebase_app_hosting_traffic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirebaseAppHostingTrafficConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirebaseAppHostingTrafficConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_app_hosting_traffic',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.47.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backend = config.backend;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._rolloutPolicy.internalValue = config.rolloutPolicy;
    this._target.internalValue = config.target;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // current - computed: true, optional: false, required: false
  private _current = new GoogleFirebaseAppHostingTrafficCurrentList(this, "current", false);
  public get current() {
    return this._current;
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // rollout_policy - computed: false, optional: true, required: false
  private _rolloutPolicy = new GoogleFirebaseAppHostingTrafficRolloutPolicyOutputReference(this, "rollout_policy");
  public get rolloutPolicy() {
    return this._rolloutPolicy;
  }
  public putRolloutPolicy(value: GoogleFirebaseAppHostingTrafficRolloutPolicy) {
    this._rolloutPolicy.internalValue = value;
  }
  public resetRolloutPolicy() {
    this._rolloutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutPolicyInput() {
    return this._rolloutPolicy.internalValue;
  }

  // target - computed: false, optional: true, required: false
  private _target = new GoogleFirebaseAppHostingTrafficTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: GoogleFirebaseAppHostingTrafficTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirebaseAppHostingTrafficTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirebaseAppHostingTrafficTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktf.stringToTerraform(this._backend),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      rollout_policy: googleFirebaseAppHostingTrafficRolloutPolicyToTerraform(this._rolloutPolicy.internalValue),
      target: googleFirebaseAppHostingTrafficTargetToTerraform(this._target.internalValue),
      timeouts: googleFirebaseAppHostingTrafficTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktf.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rollout_policy: {
        value: googleFirebaseAppHostingTrafficRolloutPolicyToHclTerraform(this._rolloutPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirebaseAppHostingTrafficRolloutPolicyList",
      },
      target: {
        value: googleFirebaseAppHostingTrafficTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirebaseAppHostingTrafficTargetList",
      },
      timeouts: {
        value: googleFirebaseAppHostingTrafficTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirebaseAppHostingTrafficTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
