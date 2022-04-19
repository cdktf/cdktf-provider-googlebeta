// https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAccessContextManagerServicePerimetersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#parent GoogleAccessContextManagerServicePerimeters#parent}
  */
  readonly parent: string;
  /**
  * service_perimeters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#service_perimeters GoogleAccessContextManagerServicePerimeters#service_perimeters}
  */
  readonly servicePerimeters?: GoogleAccessContextManagerServicePerimetersServicePerimeters[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#timeouts GoogleAccessContextManagerServicePerimeters#timeouts}
  */
  readonly timeouts?: GoogleAccessContextManagerServicePerimetersTimeouts;
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#identities GoogleAccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#identity_type GoogleAccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return this.getListAttribute('identities');
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
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#method GoogleAccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#permission GoogleAccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#service_name GoogleAccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#method_selectors GoogleAccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo {
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#operations GoogleAccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._operations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._operations = value.operations;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
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
  private _operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations');
  }
  public set operations(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#egress_from GoogleAccessContextManagerServicePerimeters#egress_from}
  */
  readonly egressFrom?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFrom;
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#egress_to GoogleAccessContextManagerServicePerimeters#egress_to}
  */
  readonly egressTo?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressTo;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_from: googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesEgressToToTerraform(struct!.egressTo),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources {
  /**
  * An 'AccessLevel' resource name that allow resources within the 
'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed 
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed, 
resources within the perimeter can only be accessed via Google Cloud calls 
with request origins within the perimeter. 
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.' 
If * is specified, then all IngressSources will be allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#access_level GoogleAccessContextManagerServicePerimeters#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to ingress the perimeter. 
Requests from these resources will be allowed to access perimeter data. 
Currently only projects are allowed. Format 'projects/{project_number}' 
The project may be in any Google Cloud organization, not just the 
organization that the perimeter is defined in. '*' is not allowed, the case 
of allowing all Google Cloud resources only is not supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#resource GoogleAccessContextManagerServicePerimeters#resource}
  */
  readonly resource?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#identities GoogleAccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#identity_type GoogleAccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#sources GoogleAccessContextManagerServicePerimeters#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom | undefined {
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
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sources = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return this.getListAttribute('identities');
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
  private _sources?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable; 
  public get sources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sources');
  }
  public set sources(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#method GoogleAccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#permission GoogleAccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#service_name GoogleAccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#method_selectors GoogleAccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo {
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', protected by this 'ServicePerimeter'
that are allowed to be accessed by sources defined in the
corresponding 'IngressFrom'. A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all 
resources inside the perimeter, provided that the request
also matches the 'operations' field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#operations GoogleAccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._operations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._operations = value.operations;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
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
  private _operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations');
  }
  public set operations(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#ingress_from GoogleAccessContextManagerServicePerimeters#ingress_from}
  */
  readonly ingressFrom?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#ingress_to GoogleAccessContextManagerServicePerimeters#ingress_to}
  */
  readonly ingressTo?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressTo;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_from: googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#allowed_services GoogleAccessContextManagerServicePerimeters#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#enable_restriction GoogleAccessContextManagerServicePerimeters#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices | undefined {
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

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices | undefined) {
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
    return this.getListAttribute('allowed_services');
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersSpec {
  /**
  * A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#access_levels GoogleAccessContextManagerServicePerimeters#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#restricted_services GoogleAccessContextManagerServicePerimeters#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#egress_policies GoogleAccessContextManagerServicePerimeters#egress_policies}
  */
  readonly egressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | cdktf.IResolvable;
  /**
  * ingress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#ingress_policies GoogleAccessContextManagerServicePerimeters#ingress_policies}
  */
  readonly ingressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | cdktf.IResolvable;
  /**
  * vpc_accessible_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#vpc_accessible_services GoogleAccessContextManagerServicePerimeters#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersSpecToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: googleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersSpec | undefined {
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
    if (this._egressPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPolicies = this._egressPolicies;
    }
    if (this._ingressPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPolicies = this._ingressPolicies;
    }
    if (this._vpcAccessibleServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcAccessibleServices = this._vpcAccessibleServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLevels = undefined;
      this._resources = undefined;
      this._restrictedServices = undefined;
      this._egressPolicies = undefined;
      this._ingressPolicies = undefined;
      this._vpcAccessibleServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLevels = value.accessLevels;
      this._resources = value.resources;
      this._restrictedServices = value.restrictedServices;
      this._egressPolicies = value.egressPolicies;
      this._ingressPolicies = value.ingressPolicies;
      this._vpcAccessibleServices.internalValue = value.vpcAccessibleServices;
    }
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return this.getListAttribute('access_levels');
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
    return this.getListAttribute('resources');
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
    return this.getListAttribute('restricted_services');
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
  private _egressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | cdktf.IResolvable; 
  public get egressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress_policies');
  }
  public set egressPolicies(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecEgressPolicies[] | cdktf.IResolvable) {
    this._egressPolicies = value;
  }
  public resetEgressPolicies() {
    this._egressPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPoliciesInput() {
    return this._egressPolicies;
  }

  // ingress_policies - computed: false, optional: true, required: false
  private _ingressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | cdktf.IResolvable; 
  public get ingressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress_policies');
  }
  public set ingressPolicies(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecIngressPolicies[] | cdktf.IResolvable) {
    this._ingressPolicies = value;
  }
  public resetIngressPolicies() {
    this._ingressPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPoliciesInput() {
    return this._ingressPolicies;
  }

  // vpc_accessible_services - computed: false, optional: true, required: false
  private _vpcAccessibleServices = new GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServicesOutputReference(this, "vpc_accessible_services");
  public get vpcAccessibleServices() {
    return this._vpcAccessibleServices;
  }
  public putVpcAccessibleServices(value: GoogleAccessContextManagerServicePerimetersServicePerimetersSpecVpcAccessibleServices) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#identities GoogleAccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#identity_type GoogleAccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return this.getListAttribute('identities');
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
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#method GoogleAccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#permission GoogleAccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#service_name GoogleAccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#method_selectors GoogleAccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo {
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#operations GoogleAccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._operations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._operations = value.operations;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
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
  private _operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations');
  }
  public set operations(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#egress_from GoogleAccessContextManagerServicePerimeters#egress_from}
  */
  readonly egressFrom?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFrom;
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#egress_to GoogleAccessContextManagerServicePerimeters#egress_to}
  */
  readonly egressTo?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressTo;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_from: googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressFromToTerraform(struct!.egressFrom),
    egress_to: googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesEgressToToTerraform(struct!.egressTo),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources {
  /**
  * An 'AccessLevel' resource name that allow resources within the 
'ServicePerimeters' to be accessed from the internet. 'AccessLevels' listed 
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed, 
resources within the perimeter can only be accessed via Google Cloud calls 
with request origins within the perimeter. 
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.' 
If * is specified, then all IngressSources will be allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#access_level GoogleAccessContextManagerServicePerimeters#access_level}
  */
  readonly accessLevel?: string;
  /**
  * A Google Cloud resource that is allowed to ingress the perimeter. 
Requests from these resources will be allowed to access perimeter data. 
Currently only projects are allowed. Format 'projects/{project_number}' 
The project may be in any Google Cloud organization, not just the 
organization that the perimeter is defined in. '*' is not allowed, the case 
of allowing all Google Cloud resources only is not supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#resource GoogleAccessContextManagerServicePerimeters#resource}
  */
  readonly resource?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.stringToTerraform(struct!.accessLevel),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#identities GoogleAccessContextManagerServicePerimeters#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#identity_type GoogleAccessContextManagerServicePerimeters#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#sources GoogleAccessContextManagerServicePerimeters#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom | undefined {
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
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identities = undefined;
      this._identityType = undefined;
      this._sources = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identities = value.identities;
      this._identityType = value.identityType;
      this._sources = value.sources;
    }
  }

  // identities - computed: false, optional: true, required: false
  private _identities?: string[]; 
  public get identities() {
    return this.getListAttribute('identities');
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
  private _sources?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable; 
  public get sources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sources');
  }
  public set sources(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#method GoogleAccessContextManagerServicePerimeters#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#permission GoogleAccessContextManagerServicePerimeters#permission}
  */
  readonly permission?: string;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#service_name GoogleAccessContextManagerServicePerimeters#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#method_selectors GoogleAccessContextManagerServicePerimeters#method_selectors}
  */
  readonly methodSelectors?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectors[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo {
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', protected by this 'ServicePerimeter'
that are allowed to be accessed by sources defined in the
corresponding 'IngressFrom'. A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all 
resources inside the perimeter, provided that the request
also matches the 'operations' field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#operations GoogleAccessContextManagerServicePerimeters#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resources = undefined;
      this._operations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resources = value.resources;
      this._operations = value.operations;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
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
  private _operations?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations');
  }
  public set operations(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable) {
    this._operations = value;
  }
  public resetOperations() {
    this._operations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInput() {
    return this._operations;
  }
}
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#ingress_from GoogleAccessContextManagerServicePerimeters#ingress_from}
  */
  readonly ingressFrom?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#ingress_to GoogleAccessContextManagerServicePerimeters#ingress_to}
  */
  readonly ingressTo?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressTo;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_from: googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressFromToTerraform(struct!.ingressFrom),
    ingress_to: googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesIngressToToTerraform(struct!.ingressTo),
  }
}

export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#allowed_services GoogleAccessContextManagerServicePerimeters#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#enable_restriction GoogleAccessContextManagerServicePerimeters#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices | undefined {
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

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices | undefined) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimetersStatus {
  /**
  * A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#access_levels GoogleAccessContextManagerServicePerimeters#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#resources GoogleAccessContextManagerServicePerimeters#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#restricted_services GoogleAccessContextManagerServicePerimeters#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#egress_policies GoogleAccessContextManagerServicePerimeters#egress_policies}
  */
  readonly egressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | cdktf.IResolvable;
  /**
  * ingress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#ingress_policies GoogleAccessContextManagerServicePerimeters#ingress_policies}
  */
  readonly ingressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | cdktf.IResolvable;
  /**
  * vpc_accessible_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#vpc_accessible_services GoogleAccessContextManagerServicePerimeters#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersStatusToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusOutputReference | GoogleAccessContextManagerServicePerimetersServicePerimetersStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: googleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
}

export class GoogleAccessContextManagerServicePerimetersServicePerimetersStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersServicePerimetersStatus | undefined {
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
    if (this._egressPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPolicies = this._egressPolicies;
    }
    if (this._ingressPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPolicies = this._ingressPolicies;
    }
    if (this._vpcAccessibleServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcAccessibleServices = this._vpcAccessibleServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessLevels = undefined;
      this._resources = undefined;
      this._restrictedServices = undefined;
      this._egressPolicies = undefined;
      this._ingressPolicies = undefined;
      this._vpcAccessibleServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessLevels = value.accessLevels;
      this._resources = value.resources;
      this._restrictedServices = value.restrictedServices;
      this._egressPolicies = value.egressPolicies;
      this._ingressPolicies = value.ingressPolicies;
      this._vpcAccessibleServices.internalValue = value.vpcAccessibleServices;
    }
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return this.getListAttribute('access_levels');
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
    return this.getListAttribute('resources');
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
  private _egressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | cdktf.IResolvable; 
  public get egressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress_policies');
  }
  public set egressPolicies(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusEgressPolicies[] | cdktf.IResolvable) {
    this._egressPolicies = value;
  }
  public resetEgressPolicies() {
    this._egressPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPoliciesInput() {
    return this._egressPolicies;
  }

  // ingress_policies - computed: false, optional: true, required: false
  private _ingressPolicies?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | cdktf.IResolvable; 
  public get ingressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress_policies');
  }
  public set ingressPolicies(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusIngressPolicies[] | cdktf.IResolvable) {
    this._ingressPolicies = value;
  }
  public resetIngressPolicies() {
    this._ingressPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPoliciesInput() {
    return this._ingressPolicies;
  }

  // vpc_accessible_services - computed: false, optional: true, required: false
  private _vpcAccessibleServices = new GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServicesOutputReference(this, "vpc_accessible_services");
  public get vpcAccessibleServices() {
    return this._vpcAccessibleServices;
  }
  public putVpcAccessibleServices(value: GoogleAccessContextManagerServicePerimetersServicePerimetersStatusVpcAccessibleServices) {
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
export interface GoogleAccessContextManagerServicePerimetersServicePerimeters {
  /**
  * Description of the ServicePerimeter and its use. Does not affect
behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#description GoogleAccessContextManagerServicePerimeters#description}
  */
  readonly description?: string;
  /**
  * Resource name for the ServicePerimeter. The short_name component must
begin with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#name GoogleAccessContextManagerServicePerimeters#name}
  */
  readonly name: string;
  /**
  * Specifies the type of the Perimeter. There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.

In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.

Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#perimeter_type GoogleAccessContextManagerServicePerimeters#perimeter_type}
  */
  readonly perimeterType?: string;
  /**
  * Human readable title. Must be unique within the Policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#title GoogleAccessContextManagerServicePerimeters#title}
  */
  readonly title: string;
  /**
  * Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#use_explicit_dry_run_spec GoogleAccessContextManagerServicePerimeters#use_explicit_dry_run_spec}
  */
  readonly useExplicitDryRunSpec?: boolean | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#spec GoogleAccessContextManagerServicePerimeters#spec}
  */
  readonly spec?: GoogleAccessContextManagerServicePerimetersServicePerimetersSpec;
  /**
  * status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#status GoogleAccessContextManagerServicePerimeters#status}
  */
  readonly status?: GoogleAccessContextManagerServicePerimetersServicePerimetersStatus;
}

export function googleAccessContextManagerServicePerimetersServicePerimetersToTerraform(struct?: GoogleAccessContextManagerServicePerimetersServicePerimeters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    perimeter_type: cdktf.stringToTerraform(struct!.perimeterType),
    title: cdktf.stringToTerraform(struct!.title),
    use_explicit_dry_run_spec: cdktf.booleanToTerraform(struct!.useExplicitDryRunSpec),
    spec: googleAccessContextManagerServicePerimetersServicePerimetersSpecToTerraform(struct!.spec),
    status: googleAccessContextManagerServicePerimetersServicePerimetersStatusToTerraform(struct!.status),
  }
}

export interface GoogleAccessContextManagerServicePerimetersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#create GoogleAccessContextManagerServicePerimeters#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#delete GoogleAccessContextManagerServicePerimeters#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters#update GoogleAccessContextManagerServicePerimeters#update}
  */
  readonly update?: string;
}

export function googleAccessContextManagerServicePerimetersTimeoutsToTerraform(struct?: GoogleAccessContextManagerServicePerimetersTimeoutsOutputReference | GoogleAccessContextManagerServicePerimetersTimeouts | cdktf.IResolvable): any {
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

export class GoogleAccessContextManagerServicePerimetersTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimetersTimeouts | undefined {
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

  public set internalValue(value: GoogleAccessContextManagerServicePerimetersTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters google_access_context_manager_service_perimeters}
*/
export class GoogleAccessContextManagerServicePerimeters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_service_perimeters";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeters google_access_context_manager_service_perimeters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAccessContextManagerServicePerimetersConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAccessContextManagerServicePerimetersConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_service_perimeters',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.18.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parent = config.parent;
    this._servicePerimeters = config.servicePerimeters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service_perimeters - computed: false, optional: true, required: false
  private _servicePerimeters?: GoogleAccessContextManagerServicePerimetersServicePerimeters[] | cdktf.IResolvable; 
  public get servicePerimeters() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('service_perimeters')));
  }
  public set servicePerimeters(value: GoogleAccessContextManagerServicePerimetersServicePerimeters[] | cdktf.IResolvable) {
    this._servicePerimeters = value;
  }
  public resetServicePerimeters() {
    this._servicePerimeters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePerimetersInput() {
    return this._servicePerimeters;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAccessContextManagerServicePerimetersTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAccessContextManagerServicePerimetersTimeouts) {
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
      parent: cdktf.stringToTerraform(this._parent),
      service_perimeters: cdktf.listMapper(googleAccessContextManagerServicePerimetersServicePerimetersToTerraform)(this._servicePerimeters),
      timeouts: googleAccessContextManagerServicePerimetersTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
