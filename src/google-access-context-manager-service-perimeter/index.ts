/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAccessContextManagerServicePerimeterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the ServicePerimeter and its use. Does not affect
  * behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#description GoogleAccessContextManagerServicePerimeter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#id GoogleAccessContextManagerServicePerimeter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource name for the ServicePerimeter. The short_name component must
  * begin with a letter and only include alphanumeric and '_'.
  * Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#name GoogleAccessContextManagerServicePerimeter#name}
  */
  readonly name: string;
  /**
  * The AccessPolicy this ServicePerimeter lives in.
  * Format: accessPolicies/{policy_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#parent GoogleAccessContextManagerServicePerimeter#parent}
  */
  readonly parent: string;
  /**
  * Specifies the type of the Perimeter. There are two types: regular and
  * bridge. Regular Service Perimeter contains resources, access levels,
  * and restricted services. Every resource can be in at most
  * ONE regular Service Perimeter.
  * 
  * In addition to being in a regular service perimeter, a resource can also
  * be in zero or more perimeter bridges. A perimeter bridge only contains
  * resources. Cross project operations are permitted if all effected
  * resources share some perimeter (whether bridge or regular). Perimeter
  * Bridge does not contain access levels or services: those are governed
  * entirely by the regular perimeter that resource is in.
  * 
  * Perimeter Bridges are typically useful when building more complex
  * topologies with many independent perimeters that need to share some data
  * with a common perimeter, but should not be able to share data among
  * themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#perimeter_type GoogleAccessContextManagerServicePerimeter#perimeter_type}
  */
  readonly perimeterType?: string;
  /**
  * Human readable title. Must be unique within the Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#title GoogleAccessContextManagerServicePerimeter#title}
  */
  readonly title: string;
  /**
  * Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists
  * for all Service Perimeters, and that spec is identical to the status for those
  * Service Perimeters. When this flag is set, it inhibits the generation of the
  * implicit spec, thereby allowing the user to explicitly provide a
  * configuration ("spec") to use in a dry-run version of the Service Perimeter.
  * This allows the user to test changes to the enforced config ("status") without
  * actually enforcing them. This testing is done through analyzing the differences
  * between currently enforced and suggested restrictions. useExplicitDryRunSpec must
  * bet set to True if any of the fields in the spec are set to non-default values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#use_explicit_dry_run_spec GoogleAccessContextManagerServicePerimeter#use_explicit_dry_run_spec}
  */
  readonly useExplicitDryRunSpec?: boolean | cdktf.IResolvable;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#spec GoogleAccessContextManagerServicePerimeter#spec}
  */
  readonly spec?: GoogleAccessContextManagerServicePerimeterSpec;
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#status GoogleAccessContextManagerServicePerimeter#status}
  */
  readonly status?: GoogleAccessContextManagerServicePerimeterStatus;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#timeouts GoogleAccessContextManagerServicePerimeter#timeouts}
  */
  readonly timeouts?: GoogleAccessContextManagerServicePerimeterTimeouts;
}
export interface GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources {
  /**
  * An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}
  */
  readonly accessLevel?: string;
}

export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
  }
}


export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
    }
  }

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }
}

export class GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference {
    return new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'.
  * Should be in the format of email address. The email address should
  * represent individual user or service account only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the
  * perimeter. If left unspecified, then members of 'identities' field will
  * be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
  /**
  * Whether to enforce traffic restrictions based on 'sources' field. If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_UNSPECIFIED", "SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#source_restriction GoogleAccessContextManagerServicePerimeter#source_restriction}
  */
  readonly sourceRestriction?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    source_restriction: cdktf.stringToTerraform(struct!.sourceRestriction),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_restriction: {
      value: cdktf.stringToHclTerraform(struct!.sourceRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._sourceRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRestriction = this._sourceRestriction;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sourceRestriction = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sourceRestriction = value.sourceRestriction;
      this._sources.internalValue = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return cdktf.Fn.tolist(this.getListAttribute('identities'));
  }
  public set identities(value: string[]) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities;
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // source_restriction - computed: false, optional: true, required: false
  private _sourceRestriction?: string; 
  public get sourceRestriction() {
    return this.getStringAttribute('source_restriction');
  }
  public set sourceRestriction(value: string) {
    this._sourceRestriction = value;
  }
  public resetSourceRestriction() {
    this._sourceRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRestrictionInput() {
    return this._sourceRestriction;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding
  * 'serviceName' in 'ApiOperation'. If '*' used as value for method,
  * then ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._permission = value.permission;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference {
    return new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_selectors: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._methodSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSelectors = this._methodSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._methodSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._methodSelectors.internalValue = value.methodSelectors;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // method_selectors - computed: false, optional: true, required: false
  private _methodSelectors = new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable) {
    this._methodSelectors.internalValue = value;
  }
  public resetMethodSelectors() {
    this._methodSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSelectorsInput() {
    return this._methodSelectors.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference {
    return new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo {
  /**
  * A list of external resources that are allowed to be accessed. A request
  * matches if it contains an external resource in this list (Example:
  * s3://bucket/path). Currently '*' is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#external_resources GoogleAccessContextManagerServicePerimeter#external_resources}
  */
  readonly externalResources?: string[];
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', that match this to stanza. A request matches
  * if it contains a resource in this list. If * is specified for resources,
  * then this 'EgressTo' rule will authorize access to all resources outside
  * the perimeter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalResources),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalResources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalResources = this._externalResources;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalResources = undefined;
      this._resources = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalResources = value.externalResources;
      this._resources = value.resources;
      this._operations.internalValue = value.operations;
    }
  }

  // external_resources - computed: false, optional: true, required: false
  private _externalResources?: string[]; 
  public get externalResources() {
    return cdktf.Fn.tolist(this.getListAttribute('external_resources'));
  }
  public set externalResources(value: string[]) {
    this._externalResources = value;
  }
  public resetExternalResources() {
    this._externalResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalResourcesInput() {
    return this._externalResources;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecEgressPolicies {
  /**
  * egress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#egress_from GoogleAccessContextManagerServicePerimeter#egress_from}
  */
  readonly egressFrom?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom;
  /**
  * egress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#egress_to GoogleAccessContextManagerServicePerimeter#egress_to}
  */
  readonly egressTo?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo;
}

export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_from: googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToToTerraform(struct!.egressTo),
  }
}


export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_from: {
      value: googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromToHclTerraform(struct!.egressFrom),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromList",
    },
    egress_to: {
      value: googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToToHclTerraform(struct!.egressTo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecEgressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressFrom = this._egressFrom?.internalValue;
    }
    if (this._egressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressTo = this._egressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecEgressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressFrom.internalValue = undefined;
      this._egressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressFrom.internalValue = value.egressFrom;
      this._egressTo.internalValue = value.egressTo;
    }
  }

  // egress_from - computed: false, optional: true, required: false
  private _egressFrom = new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference(this, "egress_from");
  public get egressFrom() {
    return this._egressFrom;
  }
  public putEgressFrom(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom) {
    this._egressFrom.internalValue = value;
  }
  public resetEgressFrom() {
    this._egressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressFromInput() {
    return this._egressFrom.internalValue;
  }

  // egress_to - computed: false, optional: true, required: false
  private _egressTo = new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference(this, "egress_to");
  public get egressTo() {
    return this._egressTo;
  }
  public putEgressTo(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo) {
    this._egressTo.internalValue = value;
  }
  public resetEgressTo() {
    this._egressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressToInput() {
    return this._egressTo.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterSpecEgressPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference {
    return new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources {
  /**
  * An 'AccessLevel' resource name that allow resources within the
  * 'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed
  * must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
  * 'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
  * resources within the perimeter can only be accessed via Google Cloud calls
  * with request origins within the perimeter.
  * Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
  * If * is specified, then all IngressSources will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to ingress the perimeter.
  * Requests from these resources will be allowed to access perimeter data.
  * Currently only projects are allowed. Format 'projects/{project_number}'
  * The project may be in any Google Cloud organization, not just the
  * organization that the perimeter is defined in. '*' is not allowed, the case
  * of allowing all Google Cloud resources only is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#resource GoogleAccessContextManagerServicePerimeter#resource}
  */
  readonly resource?: string;
}

export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._resource = value.resource;
    }
  }

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}

export class GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference {
    return new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
  * Should be in the format of email address. The email address should represent
  * individual user or service account only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the
  * perimeter. If left unspecified, then members of 'identities' field will be
  * allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sources.internalValue = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return cdktf.Fn.tolist(this.getListAttribute('identities'));
  }
  public set identities(value: string[]) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities;
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding
  * serviceName in 'ApiOperation'. If '*' used as value for 'method', then
  * ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._permission = value.permission;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference {
    return new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_selectors: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._methodSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSelectors = this._methodSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._methodSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._methodSelectors.internalValue = value.methodSelectors;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // method_selectors - computed: false, optional: true, required: false
  private _methodSelectors = new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable) {
    this._methodSelectors.internalValue = value;
  }
  public resetMethodSelectors() {
    this._methodSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSelectorsInput() {
    return this._methodSelectors.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference {
    return new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo {
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', protected by this 'ServicePerimeter'
  * that are allowed to be accessed by sources defined in the
  * corresponding 'IngressFrom'. A request matches if it contains
  * a resource in this list. If '*' is specified for resources,
  * then this 'IngressTo' rule will authorize access to all
  * resources inside the perimeter, provided that the request
  * also matches the 'operations' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._operations.internalValue = value.operations;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecIngressPolicies {
  /**
  * ingress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#ingress_from GoogleAccessContextManagerServicePerimeter#ingress_from}
  */
  readonly ingressFrom?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#ingress_to GoogleAccessContextManagerServicePerimeter#ingress_to}
  */
  readonly ingressTo?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo;
}

export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_from: googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}


export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress_from: {
      value: googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromToHclTerraform(struct!.ingressFrom),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromList",
    },
    ingress_to: {
      value: googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToToHclTerraform(struct!.ingressTo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecIngressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressFrom = this._ingressFrom?.internalValue;
    }
    if (this._ingressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressTo = this._ingressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecIngressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingressFrom.internalValue = undefined;
      this._ingressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingressFrom.internalValue = value.ingressFrom;
      this._ingressTo.internalValue = value.ingressTo;
    }
  }

  // ingress_from - computed: false, optional: true, required: false
  private _ingressFrom = new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference(this, "ingress_from");
  public get ingressFrom() {
    return this._ingressFrom;
  }
  public putIngressFrom(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom) {
    this._ingressFrom.internalValue = value;
  }
  public resetIngressFrom() {
    this._ingressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressFromInput() {
    return this._ingressFrom.internalValue;
  }

  // ingress_to - computed: false, optional: true, required: false
  private _ingressTo = new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference(this, "ingress_to");
  public get ingressTo() {
    return this._ingressTo;
  }
  public putIngressTo(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo) {
    this._ingressTo.internalValue = value;
  }
  public resetIngressTo() {
    this._ingressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressToInput() {
    return this._ingressTo.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterSpecIngressPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference {
    return new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
  * Must be empty unless 'enableRestriction' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#allowed_services GoogleAccessContextManagerServicePerimeter#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
  * list of APIs specified in 'allowedServices'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#enable_restriction GoogleAccessContextManagerServicePerimeter#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}


export function googleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable_restriction: {
      value: cdktf.booleanToHclTerraform(struct!.enableRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServices = this._allowedServices;
    }
    if (this._enableRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRestriction = this._enableRestriction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedServices = undefined;
      this._enableRestriction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedServices = value.allowedServices;
      this._enableRestriction = value.enableRestriction;
    }
  }

  // allowed_services - computed: false, optional: true, required: false
  private _allowedServices?: string[]; 
  public get allowedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_services'));
  }
  public set allowedServices(value: string[]) {
    this._allowedServices = value;
  }
  public resetAllowedServices() {
    this._allowedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices;
  }

  // enable_restriction - computed: false, optional: true, required: false
  private _enableRestriction?: boolean | cdktf.IResolvable; 
  public get enableRestriction() {
    return this.getBooleanAttribute('enable_restriction');
  }
  public set enableRestriction(value: boolean | cdktf.IResolvable) {
    this._enableRestriction = value;
  }
  public resetEnableRestriction() {
    this._enableRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRestrictionInput() {
    return this._enableRestriction;
  }
}
export interface GoogleAccessContextManagerServicePerimeterSpec {
  /**
  * A list of AccessLevel resource names that allow resources within
  * the ServicePerimeter to be accessed from the internet.
  * AccessLevels listed must be in the same policy as this
  * ServicePerimeter. Referencing a nonexistent AccessLevel is a
  * syntax error. If no AccessLevel names are listed, resources within
  * the perimeter can only be accessed via GCP calls with request
  * origins within the perimeter. For Service Perimeter Bridge, must
  * be empty.
  * 
  * Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#access_levels GoogleAccessContextManagerServicePerimeter#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
  * Currently only projects are allowed.
  * Format: projects/{project_number}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
  * restrictions. Must contain a list of services. For example, if
  * 'storage.googleapis.com' is specified, access to the storage
  * buckets inside the perimeter must meet the perimeter's access
  * restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#restricted_services GoogleAccessContextManagerServicePerimeter#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#egress_policies GoogleAccessContextManagerServicePerimeter#egress_policies}
  */
  readonly egressPolicies?: GoogleAccessContextManagerServicePerimeterSpecEgressPolicies[] | cdktf.IResolvable;
  /**
  * ingress_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#ingress_policies GoogleAccessContextManagerServicePerimeter#ingress_policies}
  */
  readonly ingressPolicies?: GoogleAccessContextManagerServicePerimeterSpecIngressPolicies[] | cdktf.IResolvable;
  /**
  * vpc_accessible_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#vpc_accessible_services GoogleAccessContextManagerServicePerimeter#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices;
}

export function googleAccessContextManagerServicePerimeterSpecToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecOutputReference | GoogleAccessContextManagerServicePerimeterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecEgressPoliciesToTerraform, true)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecIngressPoliciesToTerraform, true)(struct!.ingressPolicies),
    vpc_accessible_services: googleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}


export function googleAccessContextManagerServicePerimeterSpecToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecOutputReference | GoogleAccessContextManagerServicePerimeterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessLevels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    restricted_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    egress_policies: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterSpecEgressPoliciesToHclTerraform, true)(struct!.egressPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList",
    },
    ingress_policies: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterSpecIngressPoliciesToHclTerraform, true)(struct!.ingressPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList",
    },
    vpc_accessible_services: {
      value: googleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesToHclTerraform(struct!.vpcAccessibleServices),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevels = this._accessLevels;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._restrictedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedServices = this._restrictedServices;
    }
    if (this._egressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPolicies = this._egressPolicies?.internalValue;
    }
    if (this._ingressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPolicies = this._ingressPolicies?.internalValue;
    }
    if (this._vpcAccessibleServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcAccessibleServices = this._vpcAccessibleServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLevels = undefined;
      this._resources = undefined;
      this._restrictedServices = undefined;
      this._egressPolicies.internalValue = undefined;
      this._ingressPolicies.internalValue = undefined;
      this._vpcAccessibleServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLevels = value.accessLevels;
      this._resources = value.resources;
      this._restrictedServices = value.restrictedServices;
      this._egressPolicies.internalValue = value.egressPolicies;
      this._ingressPolicies.internalValue = value.ingressPolicies;
      this._vpcAccessibleServices.internalValue = value.vpcAccessibleServices;
    }
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('access_levels'));
  }
  public set accessLevels(value: string[]) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // restricted_services - computed: false, optional: true, required: false
  private _restrictedServices?: string[]; 
  public get restrictedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_services'));
  }
  public set restrictedServices(value: string[]) {
    this._restrictedServices = value;
  }
  public resetRestrictedServices() {
    this._restrictedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedServicesInput() {
    return this._restrictedServices;
  }

  // egress_policies - computed: false, optional: true, required: false
  private _egressPolicies = new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList(this, "egress_policies", false);
  public get egressPolicies() {
    return this._egressPolicies;
  }
  public putEgressPolicies(value: GoogleAccessContextManagerServicePerimeterSpecEgressPolicies[] | cdktf.IResolvable) {
    this._egressPolicies.internalValue = value;
  }
  public resetEgressPolicies() {
    this._egressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPoliciesInput() {
    return this._egressPolicies.internalValue;
  }

  // ingress_policies - computed: false, optional: true, required: false
  private _ingressPolicies = new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList(this, "ingress_policies", false);
  public get ingressPolicies() {
    return this._ingressPolicies;
  }
  public putIngressPolicies(value: GoogleAccessContextManagerServicePerimeterSpecIngressPolicies[] | cdktf.IResolvable) {
    this._ingressPolicies.internalValue = value;
  }
  public resetIngressPolicies() {
    this._ingressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPoliciesInput() {
    return this._ingressPolicies.internalValue;
  }

  // vpc_accessible_services - computed: false, optional: true, required: false
  private _vpcAccessibleServices = new GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference(this, "vpc_accessible_services");
  public get vpcAccessibleServices() {
    return this._vpcAccessibleServices;
  }
  public putVpcAccessibleServices(value: GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices) {
    this._vpcAccessibleServices.internalValue = value;
  }
  public resetVpcAccessibleServices() {
    this._vpcAccessibleServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessibleServicesInput() {
    return this._vpcAccessibleServices.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources {
  /**
  * An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}
  */
  readonly accessLevel?: string;
}

export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
  }
}


export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
    }
  }

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }
}

export class GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference {
    return new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom {
  /**
  * Identities can be an individual user, service account, Google group,
  * or third-party identity. For third-party identity, only single identities
  * are supported and other identity types are not supported.The v1 identities
  * that have the prefix user, group and serviceAccount in
  * https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the
  * perimeter. If left unspecified, then members of 'identities' field will
  * be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
  /**
  * Whether to enforce traffic restrictions based on 'sources' field. If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_UNSPECIFIED", "SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#source_restriction GoogleAccessContextManagerServicePerimeter#source_restriction}
  */
  readonly sourceRestriction?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    source_restriction: cdktf.stringToTerraform(struct!.sourceRestriction),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_restriction: {
      value: cdktf.stringToHclTerraform(struct!.sourceRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._sourceRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRestriction = this._sourceRestriction;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sourceRestriction = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sourceRestriction = value.sourceRestriction;
      this._sources.internalValue = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return cdktf.Fn.tolist(this.getListAttribute('identities'));
  }
  public set identities(value: string[]) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities;
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // source_restriction - computed: false, optional: true, required: false
  private _sourceRestriction?: string; 
  public get sourceRestriction() {
    return this.getStringAttribute('source_restriction');
  }
  public set sourceRestriction(value: string) {
    this._sourceRestriction = value;
  }
  public resetSourceRestriction() {
    this._sourceRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRestrictionInput() {
    return this._sourceRestriction;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding
  * 'serviceName' in 'ApiOperation'. If '*' used as value for method,
  * then ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._permission = value.permission;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference {
    return new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_selectors: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._methodSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSelectors = this._methodSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._methodSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._methodSelectors.internalValue = value.methodSelectors;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // method_selectors - computed: false, optional: true, required: false
  private _methodSelectors = new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable) {
    this._methodSelectors.internalValue = value;
  }
  public resetMethodSelectors() {
    this._methodSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSelectorsInput() {
    return this._methodSelectors.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference {
    return new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo {
  /**
  * A list of external resources that are allowed to be accessed. A request
  * matches if it contains an external resource in this list (Example:
  * s3://bucket/path). Currently '*' is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#external_resources GoogleAccessContextManagerServicePerimeter#external_resources}
  */
  readonly externalResources?: string[];
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', that match this to stanza. A request matches
  * if it contains a resource in this list. If * is specified for resources,
  * then this 'EgressTo' rule will authorize access to all resources outside
  * the perimeter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalResources),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalResources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalResources = this._externalResources;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalResources = undefined;
      this._resources = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalResources = value.externalResources;
      this._resources = value.resources;
      this._operations.internalValue = value.operations;
    }
  }

  // external_resources - computed: false, optional: true, required: false
  private _externalResources?: string[]; 
  public get externalResources() {
    return cdktf.Fn.tolist(this.getListAttribute('external_resources'));
  }
  public set externalResources(value: string[]) {
    this._externalResources = value;
  }
  public resetExternalResources() {
    this._externalResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalResourcesInput() {
    return this._externalResources;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusEgressPolicies {
  /**
  * egress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#egress_from GoogleAccessContextManagerServicePerimeter#egress_from}
  */
  readonly egressFrom?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom;
  /**
  * egress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#egress_to GoogleAccessContextManagerServicePerimeter#egress_to}
  */
  readonly egressTo?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo;
}

export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_from: googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToToTerraform(struct!.egressTo),
  }
}


export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_from: {
      value: googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromToHclTerraform(struct!.egressFrom),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromList",
    },
    egress_to: {
      value: googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToToHclTerraform(struct!.egressTo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusEgressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressFrom = this._egressFrom?.internalValue;
    }
    if (this._egressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressTo = this._egressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusEgressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressFrom.internalValue = undefined;
      this._egressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressFrom.internalValue = value.egressFrom;
      this._egressTo.internalValue = value.egressTo;
    }
  }

  // egress_from - computed: false, optional: true, required: false
  private _egressFrom = new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference(this, "egress_from");
  public get egressFrom() {
    return this._egressFrom;
  }
  public putEgressFrom(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom) {
    this._egressFrom.internalValue = value;
  }
  public resetEgressFrom() {
    this._egressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressFromInput() {
    return this._egressFrom.internalValue;
  }

  // egress_to - computed: false, optional: true, required: false
  private _egressTo = new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference(this, "egress_to");
  public get egressTo() {
    return this._egressTo;
  }
  public putEgressTo(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo) {
    this._egressTo.internalValue = value;
  }
  public resetEgressTo() {
    this._egressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressToInput() {
    return this._egressTo.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterStatusEgressPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference {
    return new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources {
  /**
  * An 'AccessLevel' resource name that allow resources within the
  * 'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed
  * must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
  * 'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
  * resources within the perimeter can only be accessed via Google Cloud calls
  * with request origins within the perimeter.
  * Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
  * If * is specified, then all IngressSources will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to ingress the perimeter.
  * Requests from these resources will be allowed to access perimeter data.
  * Currently only projects and VPCs are allowed.
  * Project format: 'projects/{projectNumber}'
  * VPC network format:
  * '//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}'.
  * The project may be in any Google Cloud organization, not just the
  * organization that the perimeter is defined in. '*' is not allowed, the case
  * of allowing all Google Cloud resources only is not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#resource GoogleAccessContextManagerServicePerimeter#resource}
  */
  readonly resource?: string;
}

export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.stringToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._resource = value.resource;
    }
  }

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}

export class GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference {
    return new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom {
  /**
  * Identities can be an individual user, service account, Google group,
  * or third-party identity. For third-party identity, only single identities
  * are supported and other identity types are not supported.The v1 identities
  * that have the prefix user, group and serviceAccount in
  * https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the
  * perimeter. If left unspecified, then members of 'identities' field will be
  * allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesToTerraform, true)(struct!.sources),
  }
}


export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.identities),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    identity_type: {
      value: cdktf.stringToHclTerraform(struct!.identityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sources: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identities !== undefined) {
      hasAnyValues = true;
      internalValueResult.identities = this._identities;
    }
    if (this._identityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityType = this._identityType;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sources.internalValue = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return cdktf.Fn.tolist(this.getListAttribute('identities'));
  }
  public set identities(value: string[]) {
    this._identities = value;
  }
  public resetIdentities() {
    this._identities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identitiesInput() {
    return this._identities;
  }

  // identity_type - computed: false, optional: true, required: false
  private _identityType?: string; 
  public get identityType() {
    return this.getStringAttribute('identity_type');
  }
  public set identityType(value: string) {
    this._identityType = value;
  }
  public resetIdentityType() {
    this._identityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTypeInput() {
    return this._identityType;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding
  * serviceName in 'ApiOperation'. If '*' used as value for 'method', then
  * ALL methods and permissions are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the
  * corresponding 'serviceName' in 'ApiOperation'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._permission = value.permission;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // permission - computed: false, optional: true, required: false
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  public resetPermission() {
    this._permission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference {
    return new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or
  * 'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName'
  * field set to '*' will allow all methods AND permissions for all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform, true)(struct!.methodSelectors),
  }
}


export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_selectors: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsToHclTerraform, true)(struct!.methodSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._methodSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodSelectors = this._methodSelectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceName = undefined;
      this._methodSelectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceName = value.serviceName;
      this._methodSelectors.internalValue = value.methodSelectors;
    }
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // method_selectors - computed: false, optional: true, required: false
  private _methodSelectors = new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList(this, "method_selectors", false);
  public get methodSelectors() {
    return this._methodSelectors;
  }
  public putMethodSelectors(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable) {
    this._methodSelectors.internalValue = value;
  }
  public resetMethodSelectors() {
    this._methodSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodSelectorsInput() {
    return this._methodSelectors.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference {
    return new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo {
  /**
  * A list of resources, currently only projects in the form
  * 'projects/<projectnumber>', protected by this 'ServicePerimeter'
  * that are allowed to be accessed by sources defined in the
  * corresponding 'IngressFrom'. A request matches if it contains
  * a resource in this list. If '*' is specified for resources,
  * then this 'IngressTo' rule will authorize access to all
  * resources inside the perimeter, provided that the request
  * also matches the 'operations' field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsToTerraform, true)(struct!.operations),
  }
}


export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    operations: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsToHclTerraform, true)(struct!.operations),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._operations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._operations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._operations.internalValue = value.operations;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // operations - computed: false, optional: true, required: false
  private _operations = new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList(this, "operations", false);
  public get operations() {
    return this._operations;
  }
  public putOperations(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable) {
    this._operations.internalValue = value;
  }
  public resetOperations() {
    this._operations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusIngressPolicies {
  /**
  * ingress_from block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#ingress_from GoogleAccessContextManagerServicePerimeter#ingress_from}
  */
  readonly ingressFrom?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#ingress_to GoogleAccessContextManagerServicePerimeter#ingress_to}
  */
  readonly ingressTo?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo;
}

export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_from: googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}


export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress_from: {
      value: googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromToHclTerraform(struct!.ingressFrom),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromList",
    },
    ingress_to: {
      value: googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToToHclTerraform(struct!.ingressTo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusIngressPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressFrom = this._ingressFrom?.internalValue;
    }
    if (this._ingressTo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressTo = this._ingressTo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusIngressPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingressFrom.internalValue = undefined;
      this._ingressTo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingressFrom.internalValue = value.ingressFrom;
      this._ingressTo.internalValue = value.ingressTo;
    }
  }

  // ingress_from - computed: false, optional: true, required: false
  private _ingressFrom = new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference(this, "ingress_from");
  public get ingressFrom() {
    return this._ingressFrom;
  }
  public putIngressFrom(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom) {
    this._ingressFrom.internalValue = value;
  }
  public resetIngressFrom() {
    this._ingressFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressFromInput() {
    return this._ingressFrom.internalValue;
  }

  // ingress_to - computed: false, optional: true, required: false
  private _ingressTo = new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference(this, "ingress_to");
  public get ingressTo() {
    return this._ingressTo;
  }
  public putIngressTo(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo) {
    this._ingressTo.internalValue = value;
  }
  public resetIngressTo() {
    this._ingressTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressToInput() {
    return this._ingressTo.internalValue;
  }
}

export class GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleAccessContextManagerServicePerimeterStatusIngressPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference {
    return new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
  * Must be empty unless 'enableRestriction' is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#allowed_services GoogleAccessContextManagerServicePerimeter#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
  * list of APIs specified in 'allowedServices'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#enable_restriction GoogleAccessContextManagerServicePerimeter#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}


export function googleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable_restriction: {
      value: cdktf.booleanToHclTerraform(struct!.enableRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServices = this._allowedServices;
    }
    if (this._enableRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRestriction = this._enableRestriction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedServices = undefined;
      this._enableRestriction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedServices = value.allowedServices;
      this._enableRestriction = value.enableRestriction;
    }
  }

  // allowed_services - computed: false, optional: true, required: false
  private _allowedServices?: string[]; 
  public get allowedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_services'));
  }
  public set allowedServices(value: string[]) {
    this._allowedServices = value;
  }
  public resetAllowedServices() {
    this._allowedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices;
  }

  // enable_restriction - computed: false, optional: true, required: false
  private _enableRestriction?: boolean | cdktf.IResolvable; 
  public get enableRestriction() {
    return this.getBooleanAttribute('enable_restriction');
  }
  public set enableRestriction(value: boolean | cdktf.IResolvable) {
    this._enableRestriction = value;
  }
  public resetEnableRestriction() {
    this._enableRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRestrictionInput() {
    return this._enableRestriction;
  }
}
export interface GoogleAccessContextManagerServicePerimeterStatus {
  /**
  * A list of AccessLevel resource names that allow resources within
  * the ServicePerimeter to be accessed from the internet.
  * AccessLevels listed must be in the same policy as this
  * ServicePerimeter. Referencing a nonexistent AccessLevel is a
  * syntax error. If no AccessLevel names are listed, resources within
  * the perimeter can only be accessed via GCP calls with request
  * origins within the perimeter. For Service Perimeter Bridge, must
  * be empty.
  * 
  * Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#access_levels GoogleAccessContextManagerServicePerimeter#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
  * Currently only projects are allowed.
  * Format: projects/{project_number}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
  * restrictions. Must contain a list of services. For example, if
  * 'storage.googleapis.com' is specified, access to the storage
  * buckets inside the perimeter must meet the perimeter's access
  * restrictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#restricted_services GoogleAccessContextManagerServicePerimeter#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#egress_policies GoogleAccessContextManagerServicePerimeter#egress_policies}
  */
  readonly egressPolicies?: GoogleAccessContextManagerServicePerimeterStatusEgressPolicies[] | cdktf.IResolvable;
  /**
  * ingress_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#ingress_policies GoogleAccessContextManagerServicePerimeter#ingress_policies}
  */
  readonly ingressPolicies?: GoogleAccessContextManagerServicePerimeterStatusIngressPolicies[] | cdktf.IResolvable;
  /**
  * vpc_accessible_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#vpc_accessible_services GoogleAccessContextManagerServicePerimeter#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices;
}

export function googleAccessContextManagerServicePerimeterStatusToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusOutputReference | GoogleAccessContextManagerServicePerimeterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusEgressPoliciesToTerraform, true)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusIngressPoliciesToTerraform, true)(struct!.ingressPolicies),
    vpc_accessible_services: googleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}


export function googleAccessContextManagerServicePerimeterStatusToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusOutputReference | GoogleAccessContextManagerServicePerimeterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessLevels),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    restricted_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    egress_policies: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterStatusEgressPoliciesToHclTerraform, true)(struct!.egressPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList",
    },
    ingress_policies: {
      value: cdktf.listMapperHcl(googleAccessContextManagerServicePerimeterStatusIngressPoliciesToHclTerraform, true)(struct!.ingressPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList",
    },
    vpc_accessible_services: {
      value: googleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesToHclTerraform(struct!.vpcAccessibleServices),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAccessContextManagerServicePerimeterStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevels = this._accessLevels;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._restrictedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedServices = this._restrictedServices;
    }
    if (this._egressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPolicies = this._egressPolicies?.internalValue;
    }
    if (this._ingressPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPolicies = this._ingressPolicies?.internalValue;
    }
    if (this._vpcAccessibleServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcAccessibleServices = this._vpcAccessibleServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLevels = undefined;
      this._resources = undefined;
      this._restrictedServices = undefined;
      this._egressPolicies.internalValue = undefined;
      this._ingressPolicies.internalValue = undefined;
      this._vpcAccessibleServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLevels = value.accessLevels;
      this._resources = value.resources;
      this._restrictedServices = value.restrictedServices;
      this._egressPolicies.internalValue = value.egressPolicies;
      this._ingressPolicies.internalValue = value.ingressPolicies;
      this._vpcAccessibleServices.internalValue = value.vpcAccessibleServices;
    }
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return cdktf.Fn.tolist(this.getListAttribute('access_levels'));
  }
  public set accessLevels(value: string[]) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // restricted_services - computed: false, optional: true, required: false
  private _restrictedServices?: string[]; 
  public get restrictedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_services'));
  }
  public set restrictedServices(value: string[]) {
    this._restrictedServices = value;
  }
  public resetRestrictedServices() {
    this._restrictedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedServicesInput() {
    return this._restrictedServices;
  }

  // egress_policies - computed: false, optional: true, required: false
  private _egressPolicies = new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList(this, "egress_policies", false);
  public get egressPolicies() {
    return this._egressPolicies;
  }
  public putEgressPolicies(value: GoogleAccessContextManagerServicePerimeterStatusEgressPolicies[] | cdktf.IResolvable) {
    this._egressPolicies.internalValue = value;
  }
  public resetEgressPolicies() {
    this._egressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPoliciesInput() {
    return this._egressPolicies.internalValue;
  }

  // ingress_policies - computed: false, optional: true, required: false
  private _ingressPolicies = new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList(this, "ingress_policies", false);
  public get ingressPolicies() {
    return this._ingressPolicies;
  }
  public putIngressPolicies(value: GoogleAccessContextManagerServicePerimeterStatusIngressPolicies[] | cdktf.IResolvable) {
    this._ingressPolicies.internalValue = value;
  }
  public resetIngressPolicies() {
    this._ingressPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPoliciesInput() {
    return this._ingressPolicies.internalValue;
  }

  // vpc_accessible_services - computed: false, optional: true, required: false
  private _vpcAccessibleServices = new GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference(this, "vpc_accessible_services");
  public get vpcAccessibleServices() {
    return this._vpcAccessibleServices;
  }
  public putVpcAccessibleServices(value: GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices) {
    this._vpcAccessibleServices.internalValue = value;
  }
  public resetVpcAccessibleServices() {
    this._vpcAccessibleServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessibleServicesInput() {
    return this._vpcAccessibleServices.internalValue;
  }
}
export interface GoogleAccessContextManagerServicePerimeterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#create GoogleAccessContextManagerServicePerimeter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#delete GoogleAccessContextManagerServicePerimeter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#update GoogleAccessContextManagerServicePerimeter#update}
  */
  readonly update?: string;
}

export function googleAccessContextManagerServicePerimeterTimeoutsToTerraform(struct?: GoogleAccessContextManagerServicePerimeterTimeouts | cdktf.IResolvable): any {
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


export function googleAccessContextManagerServicePerimeterTimeoutsToHclTerraform(struct?: GoogleAccessContextManagerServicePerimeterTimeouts | cdktf.IResolvable): any {
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

export class GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter google_access_context_manager_service_perimeter}
*/
export class GoogleAccessContextManagerServicePerimeter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_service_perimeter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeter to import
  * @param importFromId The id of the existing GoogleAccessContextManagerServicePerimeter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_access_context_manager_service_perimeter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.0/docs/resources/google_access_context_manager_service_perimeter google_access_context_manager_service_perimeter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAccessContextManagerServicePerimeterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAccessContextManagerServicePerimeterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeter',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.18.0',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._parent = config.parent;
    this._perimeterType = config.perimeterType;
    this._title = config.title;
    this._useExplicitDryRunSpec = config.useExplicitDryRunSpec;
    this._spec.internalValue = config.spec;
    this._status.internalValue = config.status;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // perimeter_type - computed: false, optional: true, required: false
  private _perimeterType?: string; 
  public get perimeterType() {
    return this.getStringAttribute('perimeter_type');
  }
  public set perimeterType(value: string) {
    this._perimeterType = value;
  }
  public resetPerimeterType() {
    this._perimeterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perimeterTypeInput() {
    return this._perimeterType;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // use_explicit_dry_run_spec - computed: false, optional: true, required: false
  private _useExplicitDryRunSpec?: boolean | cdktf.IResolvable; 
  public get useExplicitDryRunSpec() {
    return this.getBooleanAttribute('use_explicit_dry_run_spec');
  }
  public set useExplicitDryRunSpec(value: boolean | cdktf.IResolvable) {
    this._useExplicitDryRunSpec = value;
  }
  public resetUseExplicitDryRunSpec() {
    this._useExplicitDryRunSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExplicitDryRunSpecInput() {
    return this._useExplicitDryRunSpec;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new GoogleAccessContextManagerServicePerimeterSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GoogleAccessContextManagerServicePerimeterSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status = new GoogleAccessContextManagerServicePerimeterStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: GoogleAccessContextManagerServicePerimeterStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAccessContextManagerServicePerimeterTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      perimeter_type: cdktf.stringToTerraform(this._perimeterType),
      title: cdktf.stringToTerraform(this._title),
      use_explicit_dry_run_spec: cdktf.booleanToTerraform(this._useExplicitDryRunSpec),
      spec: googleAccessContextManagerServicePerimeterSpecToTerraform(this._spec.internalValue),
      status: googleAccessContextManagerServicePerimeterStatusToTerraform(this._status.internalValue),
      timeouts: googleAccessContextManagerServicePerimeterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perimeter_type: {
        value: cdktf.stringToHclTerraform(this._perimeterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_explicit_dry_run_spec: {
        value: cdktf.booleanToHclTerraform(this._useExplicitDryRunSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spec: {
        value: googleAccessContextManagerServicePerimeterSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAccessContextManagerServicePerimeterSpecList",
      },
      status: {
        value: googleAccessContextManagerServicePerimeterStatusToHclTerraform(this._status.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAccessContextManagerServicePerimeterStatusList",
      },
      timeouts: {
        value: googleAccessContextManagerServicePerimeterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleAccessContextManagerServicePerimeterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
