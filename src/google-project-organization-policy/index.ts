/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleProjectOrganizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Constraint the Policy is configuring, for example, serviceuser.services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#constraint GoogleProjectOrganizationPolicy#constraint}
  */
  readonly constraint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#id GoogleProjectOrganizationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#project GoogleProjectOrganizationPolicy#project}
  */
  readonly project: string;
  /**
  * Version of the Policy. Default version is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#version GoogleProjectOrganizationPolicy#version}
  */
  readonly version?: number;
  /**
  * boolean_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#boolean_policy GoogleProjectOrganizationPolicy#boolean_policy}
  */
  readonly booleanPolicy?: GoogleProjectOrganizationPolicyBooleanPolicy;
  /**
  * list_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#list_policy GoogleProjectOrganizationPolicy#list_policy}
  */
  readonly listPolicy?: GoogleProjectOrganizationPolicyListPolicy;
  /**
  * restore_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#restore_policy GoogleProjectOrganizationPolicy#restore_policy}
  */
  readonly restorePolicy?: GoogleProjectOrganizationPolicyRestorePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#timeouts GoogleProjectOrganizationPolicy#timeouts}
  */
  readonly timeouts?: GoogleProjectOrganizationPolicyTimeouts;
}
export interface GoogleProjectOrganizationPolicyBooleanPolicy {
  /**
  * If true, then the Policy is enforced. If false, then any configuration is acceptable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#enforced GoogleProjectOrganizationPolicy#enforced}
  */
  readonly enforced: boolean | cdktf.IResolvable;
}

export function googleProjectOrganizationPolicyBooleanPolicyToTerraform(struct?: GoogleProjectOrganizationPolicyBooleanPolicyOutputReference | GoogleProjectOrganizationPolicyBooleanPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforced: cdktf.booleanToTerraform(struct!.enforced),
  }
}


export function googleProjectOrganizationPolicyBooleanPolicyToHclTerraform(struct?: GoogleProjectOrganizationPolicyBooleanPolicyOutputReference | GoogleProjectOrganizationPolicyBooleanPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforced: {
      value: cdktf.booleanToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleProjectOrganizationPolicyBooleanPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleProjectOrganizationPolicyBooleanPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleProjectOrganizationPolicyBooleanPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforced = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforced = value.enforced;
    }
  }

  // enforced - computed: false, optional: false, required: true
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }
}
export interface GoogleProjectOrganizationPolicyListPolicyAllow {
  /**
  * The policy allows or denies all values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#all GoogleProjectOrganizationPolicy#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * The policy can define specific values that are allowed or denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#values GoogleProjectOrganizationPolicy#values}
  */
  readonly values?: string[];
}

export function googleProjectOrganizationPolicyListPolicyAllowToTerraform(struct?: GoogleProjectOrganizationPolicyListPolicyAllowOutputReference | GoogleProjectOrganizationPolicyListPolicyAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleProjectOrganizationPolicyListPolicyAllowToHclTerraform(struct?: GoogleProjectOrganizationPolicyListPolicyAllowOutputReference | GoogleProjectOrganizationPolicyListPolicyAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleProjectOrganizationPolicyListPolicyAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleProjectOrganizationPolicyListPolicyAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleProjectOrganizationPolicyListPolicyAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._values = value.values;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleProjectOrganizationPolicyListPolicyDeny {
  /**
  * The policy allows or denies all values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#all GoogleProjectOrganizationPolicy#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * The policy can define specific values that are allowed or denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#values GoogleProjectOrganizationPolicy#values}
  */
  readonly values?: string[];
}

export function googleProjectOrganizationPolicyListPolicyDenyToTerraform(struct?: GoogleProjectOrganizationPolicyListPolicyDenyOutputReference | GoogleProjectOrganizationPolicyListPolicyDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function googleProjectOrganizationPolicyListPolicyDenyToHclTerraform(struct?: GoogleProjectOrganizationPolicyListPolicyDenyOutputReference | GoogleProjectOrganizationPolicyListPolicyDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleProjectOrganizationPolicyListPolicyDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleProjectOrganizationPolicyListPolicyDeny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleProjectOrganizationPolicyListPolicyDeny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._values = value.values;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface GoogleProjectOrganizationPolicyListPolicy {
  /**
  * If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#inherit_from_parent GoogleProjectOrganizationPolicy#inherit_from_parent}
  */
  readonly inheritFromParent?: boolean | cdktf.IResolvable;
  /**
  * The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#suggested_value GoogleProjectOrganizationPolicy#suggested_value}
  */
  readonly suggestedValue?: string;
  /**
  * allow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#allow GoogleProjectOrganizationPolicy#allow}
  */
  readonly allow?: GoogleProjectOrganizationPolicyListPolicyAllow;
  /**
  * deny block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#deny GoogleProjectOrganizationPolicy#deny}
  */
  readonly deny?: GoogleProjectOrganizationPolicyListPolicyDeny;
}

export function googleProjectOrganizationPolicyListPolicyToTerraform(struct?: GoogleProjectOrganizationPolicyListPolicyOutputReference | GoogleProjectOrganizationPolicyListPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherit_from_parent: cdktf.booleanToTerraform(struct!.inheritFromParent),
    suggested_value: cdktf.stringToTerraform(struct!.suggestedValue),
    allow: googleProjectOrganizationPolicyListPolicyAllowToTerraform(struct!.allow),
    deny: googleProjectOrganizationPolicyListPolicyDenyToTerraform(struct!.deny),
  }
}


export function googleProjectOrganizationPolicyListPolicyToHclTerraform(struct?: GoogleProjectOrganizationPolicyListPolicyOutputReference | GoogleProjectOrganizationPolicyListPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inherit_from_parent: {
      value: cdktf.booleanToHclTerraform(struct!.inheritFromParent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suggested_value: {
      value: cdktf.stringToHclTerraform(struct!.suggestedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow: {
      value: googleProjectOrganizationPolicyListPolicyAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleProjectOrganizationPolicyListPolicyAllowList",
    },
    deny: {
      value: googleProjectOrganizationPolicyListPolicyDenyToHclTerraform(struct!.deny),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleProjectOrganizationPolicyListPolicyDenyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleProjectOrganizationPolicyListPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleProjectOrganizationPolicyListPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inheritFromParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritFromParent = this._inheritFromParent;
    }
    if (this._suggestedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestedValue = this._suggestedValue;
    }
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._deny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleProjectOrganizationPolicyListPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inheritFromParent = undefined;
      this._suggestedValue = undefined;
      this._allow.internalValue = undefined;
      this._deny.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inheritFromParent = value.inheritFromParent;
      this._suggestedValue = value.suggestedValue;
      this._allow.internalValue = value.allow;
      this._deny.internalValue = value.deny;
    }
  }

  // inherit_from_parent - computed: false, optional: true, required: false
  private _inheritFromParent?: boolean | cdktf.IResolvable; 
  public get inheritFromParent() {
    return this.getBooleanAttribute('inherit_from_parent');
  }
  public set inheritFromParent(value: boolean | cdktf.IResolvable) {
    this._inheritFromParent = value;
  }
  public resetInheritFromParent() {
    this._inheritFromParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFromParentInput() {
    return this._inheritFromParent;
  }

  // suggested_value - computed: true, optional: true, required: false
  private _suggestedValue?: string; 
  public get suggestedValue() {
    return this.getStringAttribute('suggested_value');
  }
  public set suggestedValue(value: string) {
    this._suggestedValue = value;
  }
  public resetSuggestedValue() {
    this._suggestedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestedValueInput() {
    return this._suggestedValue;
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new GoogleProjectOrganizationPolicyListPolicyAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: GoogleProjectOrganizationPolicyListPolicyAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // deny - computed: false, optional: true, required: false
  private _deny = new GoogleProjectOrganizationPolicyListPolicyDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
  public putDeny(value: GoogleProjectOrganizationPolicyListPolicyDeny) {
    this._deny.internalValue = value;
  }
  public resetDeny() {
    this._deny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny.internalValue;
  }
}
export interface GoogleProjectOrganizationPolicyRestorePolicy {
  /**
  * May only be set to true. If set, then the default Policy is restored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#default GoogleProjectOrganizationPolicy#default}
  */
  readonly default: boolean | cdktf.IResolvable;
}

export function googleProjectOrganizationPolicyRestorePolicyToTerraform(struct?: GoogleProjectOrganizationPolicyRestorePolicyOutputReference | GoogleProjectOrganizationPolicyRestorePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
  }
}


export function googleProjectOrganizationPolicyRestorePolicyToHclTerraform(struct?: GoogleProjectOrganizationPolicyRestorePolicyOutputReference | GoogleProjectOrganizationPolicyRestorePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleProjectOrganizationPolicyRestorePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleProjectOrganizationPolicyRestorePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleProjectOrganizationPolicyRestorePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
export interface GoogleProjectOrganizationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#create GoogleProjectOrganizationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#delete GoogleProjectOrganizationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#read GoogleProjectOrganizationPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#update GoogleProjectOrganizationPolicy#update}
  */
  readonly update?: string;
}

export function googleProjectOrganizationPolicyTimeoutsToTerraform(struct?: GoogleProjectOrganizationPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function googleProjectOrganizationPolicyTimeoutsToHclTerraform(struct?: GoogleProjectOrganizationPolicyTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class GoogleProjectOrganizationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleProjectOrganizationPolicyTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleProjectOrganizationPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy google_project_organization_policy}
*/
export class GoogleProjectOrganizationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_project_organization_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleProjectOrganizationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleProjectOrganizationPolicy to import
  * @param importFromId The id of the existing GoogleProjectOrganizationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleProjectOrganizationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_project_organization_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_project_organization_policy google_project_organization_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleProjectOrganizationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleProjectOrganizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.40.0',
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
    this._constraint = config.constraint;
    this._id = config.id;
    this._project = config.project;
    this._version = config.version;
    this._booleanPolicy.internalValue = config.booleanPolicy;
    this._listPolicy.internalValue = config.listPolicy;
    this._restorePolicy.internalValue = config.restorePolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // constraint - computed: false, optional: false, required: true
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // boolean_policy - computed: false, optional: true, required: false
  private _booleanPolicy = new GoogleProjectOrganizationPolicyBooleanPolicyOutputReference(this, "boolean_policy");
  public get booleanPolicy() {
    return this._booleanPolicy;
  }
  public putBooleanPolicy(value: GoogleProjectOrganizationPolicyBooleanPolicy) {
    this._booleanPolicy.internalValue = value;
  }
  public resetBooleanPolicy() {
    this._booleanPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanPolicyInput() {
    return this._booleanPolicy.internalValue;
  }

  // list_policy - computed: false, optional: true, required: false
  private _listPolicy = new GoogleProjectOrganizationPolicyListPolicyOutputReference(this, "list_policy");
  public get listPolicy() {
    return this._listPolicy;
  }
  public putListPolicy(value: GoogleProjectOrganizationPolicyListPolicy) {
    this._listPolicy.internalValue = value;
  }
  public resetListPolicy() {
    this._listPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listPolicyInput() {
    return this._listPolicy.internalValue;
  }

  // restore_policy - computed: false, optional: true, required: false
  private _restorePolicy = new GoogleProjectOrganizationPolicyRestorePolicyOutputReference(this, "restore_policy");
  public get restorePolicy() {
    return this._restorePolicy;
  }
  public putRestorePolicy(value: GoogleProjectOrganizationPolicyRestorePolicy) {
    this._restorePolicy.internalValue = value;
  }
  public resetRestorePolicy() {
    this._restorePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePolicyInput() {
    return this._restorePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleProjectOrganizationPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleProjectOrganizationPolicyTimeouts) {
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
      constraint: cdktf.stringToTerraform(this._constraint),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      version: cdktf.numberToTerraform(this._version),
      boolean_policy: googleProjectOrganizationPolicyBooleanPolicyToTerraform(this._booleanPolicy.internalValue),
      list_policy: googleProjectOrganizationPolicyListPolicyToTerraform(this._listPolicy.internalValue),
      restore_policy: googleProjectOrganizationPolicyRestorePolicyToTerraform(this._restorePolicy.internalValue),
      timeouts: googleProjectOrganizationPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      constraint: {
        value: cdktf.stringToHclTerraform(this._constraint),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      boolean_policy: {
        value: googleProjectOrganizationPolicyBooleanPolicyToHclTerraform(this._booleanPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleProjectOrganizationPolicyBooleanPolicyList",
      },
      list_policy: {
        value: googleProjectOrganizationPolicyListPolicyToHclTerraform(this._listPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleProjectOrganizationPolicyListPolicyList",
      },
      restore_policy: {
        value: googleProjectOrganizationPolicyRestorePolicyToHclTerraform(this._restorePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleProjectOrganizationPolicyRestorePolicyList",
      },
      timeouts: {
        value: googleProjectOrganizationPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleProjectOrganizationPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
