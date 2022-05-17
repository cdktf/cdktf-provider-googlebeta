// https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAccessContextManagerServicePerimeterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the ServicePerimeter and its use. Does not affect
behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#description GoogleAccessContextManagerServicePerimeter#description}
  */
  readonly description?: string;
  /**
  * Resource name for the ServicePerimeter. The short_name component must
begin with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#name GoogleAccessContextManagerServicePerimeter#name}
  */
  readonly name: string;
  /**
  * The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#parent GoogleAccessContextManagerServicePerimeter#parent}
  */
  readonly parent: string;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#perimeter_type GoogleAccessContextManagerServicePerimeter#perimeter_type}
  */
  readonly perimeterType?: string;
  /**
  * Human readable title. Must be unique within the Policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#title GoogleAccessContextManagerServicePerimeter#title}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#use_explicit_dry_run_spec GoogleAccessContextManagerServicePerimeter#use_explicit_dry_run_spec}
  */
  readonly useExplicitDryRunSpec?: boolean | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#spec GoogleAccessContextManagerServicePerimeter#spec}
  */
  readonly spec?: GoogleAccessContextManagerServicePerimeterSpec;
  /**
  * status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#status GoogleAccessContextManagerServicePerimeter#status}
  */
  readonly status?: GoogleAccessContextManagerServicePerimeterStatus;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#timeouts GoogleAccessContextManagerServicePerimeter#timeouts}
  */
  readonly timeouts?: GoogleAccessContextManagerServicePerimeterTimeouts;
}
export interface GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
}

export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom | undefined) {
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
export interface GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}
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

export interface GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}
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
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo {
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
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

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo | undefined) {
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
  private _operations?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations');
  }
  public set operations(value: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimeterSpecEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#egress_from GoogleAccessContextManagerServicePerimeter#egress_from}
  */
  readonly egressFrom?: GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom;
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#egress_to GoogleAccessContextManagerServicePerimeter#egress_to}
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

export interface GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#resource GoogleAccessContextManagerServicePerimeter#resource}
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

export interface GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
  }
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
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom | undefined) {
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
  private _sources?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable; 
  public get sources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sources');
  }
  public set sources(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}
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

export interface GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}
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
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
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
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo | undefined) {
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
  private _operations?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations');
  }
  public set operations(value: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimeterSpecIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#ingress_from GoogleAccessContextManagerServicePerimeter#ingress_from}
  */
  readonly ingressFrom?: GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#ingress_to GoogleAccessContextManagerServicePerimeter#ingress_to}
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

export interface GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#allowed_services GoogleAccessContextManagerServicePerimeter#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#enable_restriction GoogleAccessContextManagerServicePerimeter#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
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
export interface GoogleAccessContextManagerServicePerimeterSpec {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#access_levels GoogleAccessContextManagerServicePerimeter#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#restricted_services GoogleAccessContextManagerServicePerimeter#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#egress_policies GoogleAccessContextManagerServicePerimeter#egress_policies}
  */
  readonly egressPolicies?: GoogleAccessContextManagerServicePerimeterSpecEgressPolicies[] | cdktf.IResolvable;
  /**
  * ingress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#ingress_policies GoogleAccessContextManagerServicePerimeter#ingress_policies}
  */
  readonly ingressPolicies?: GoogleAccessContextManagerServicePerimeterSpecIngressPolicies[] | cdktf.IResolvable;
  /**
  * vpc_accessible_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#vpc_accessible_services GoogleAccessContextManagerServicePerimeter#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices;
}

export function googleAccessContextManagerServicePerimeterSpecToTerraform(struct?: GoogleAccessContextManagerServicePerimeterSpecOutputReference | GoogleAccessContextManagerServicePerimeterSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimeterSpecIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: googleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
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

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterSpec | undefined) {
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
  private _egressPolicies?: GoogleAccessContextManagerServicePerimeterSpecEgressPolicies[] | cdktf.IResolvable; 
  public get egressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress_policies');
  }
  public set egressPolicies(value: GoogleAccessContextManagerServicePerimeterSpecEgressPolicies[] | cdktf.IResolvable) {
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
  private _ingressPolicies?: GoogleAccessContextManagerServicePerimeterSpecIngressPolicies[] | cdktf.IResolvable; 
  public get ingressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress_policies');
  }
  public set ingressPolicies(value: GoogleAccessContextManagerServicePerimeterSpecIngressPolicies[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom {
  /**
  * A list of identities that are allowed access through this 'EgressPolicy'. 
Should be in the format of email address. The email address should 
represent individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access to outside the 
perimeter. If left unspecified, then members of 'identities' field will 
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
}

export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference | GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom | undefined) {
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
export interface GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors {
  /**
  * Value for 'method' should be a valid method name for the corresponding 
'serviceName' in 'ApiOperation'. If '*' used as value for method, 
then ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}
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

export interface GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with serviceName 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}
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
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo {
  /**
  * A list of resources, currently only projects in the form 
'projects/<projectnumber>', that match this to stanza. A request matches 
if it contains a resource in this list. If * is specified for resources, 
then this 'EgressTo' rule will authorize access to all resources outside 
the perimeter.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference | GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsToTerraform)(struct!.operations),
  }
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

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo | undefined) {
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
  private _operations?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations');
  }
  public set operations(value: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimeterStatusEgressPolicies {
  /**
  * egress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#egress_from GoogleAccessContextManagerServicePerimeter#egress_from}
  */
  readonly egressFrom?: GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom;
  /**
  * egress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#egress_to GoogleAccessContextManagerServicePerimeter#egress_to}
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

export interface GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#resource GoogleAccessContextManagerServicePerimeter#resource}
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

export interface GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom {
  /**
  * A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent 
individual user or service account only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}
  */
  readonly identities?: string[];
  /**
  * Specifies the type of identities that are allowed access from outside the 
perimeter. If left unspecified, then members of 'identities' field will be 
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}
  */
  readonly identityType?: string;
  /**
  * sources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}
  */
  readonly sources?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference | GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.identities),
    identity_type: cdktf.stringToTerraform(struct!.identityType),
    sources: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesToTerraform)(struct!.sources),
  }
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
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom | undefined) {
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
  private _sources?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable; 
  public get sources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sources');
  }
  public set sources(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors {
  /**
  * Value for method should be a valid method name for the corresponding 
serviceName in 'ApiOperation'. If '*' used as value for 'method', then 
ALL methods and permissions are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}
  */
  readonly method?: string;
  /**
  * Value for permission should be a valid Cloud IAM permission for the 
corresponding 'serviceName' in 'ApiOperation'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}
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

export interface GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations {
  /**
  * The name of the API whose methods or permissions the 'IngressPolicy' or 
'EgressPolicy' want to allow. A single 'ApiOperation' with 'serviceName' 
field set to '*' will allow all methods AND permissions for all services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}
  */
  readonly serviceName?: string;
  /**
  * method_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}
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
    method_selectors: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsToTerraform)(struct!.methodSelectors),
  }
}

export interface GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * operations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}
  */
  readonly operations?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference | GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    operations: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsToTerraform)(struct!.operations),
  }
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
    if (this._operations !== undefined) {
      hasAnyValues = true;
      internalValueResult.operations = this._operations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo | undefined) {
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
  private _operations?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable; 
  public get operations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('operations');
  }
  public set operations(value: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations[] | cdktf.IResolvable) {
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
export interface GoogleAccessContextManagerServicePerimeterStatusIngressPolicies {
  /**
  * ingress_from block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#ingress_from GoogleAccessContextManagerServicePerimeter#ingress_from}
  */
  readonly ingressFrom?: GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom;
  /**
  * ingress_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#ingress_to GoogleAccessContextManagerServicePerimeter#ingress_to}
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

export interface GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices {
  /**
  * The list of APIs usable within the Service Perimeter.
Must be empty unless 'enableRestriction' is True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#allowed_services GoogleAccessContextManagerServicePerimeter#allowed_services}
  */
  readonly allowedServices?: string[];
  /**
  * Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#enable_restriction GoogleAccessContextManagerServicePerimeter#enable_restriction}
  */
  readonly enableRestriction?: boolean | cdktf.IResolvable;
}

export function googleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference | GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedServices),
    enable_restriction: cdktf.booleanToTerraform(struct!.enableRestriction),
  }
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
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#access_levels GoogleAccessContextManagerServicePerimeter#access_levels}
  */
  readonly accessLevels?: string[];
  /**
  * A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}
  */
  readonly resources?: string[];
  /**
  * GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#restricted_services GoogleAccessContextManagerServicePerimeter#restricted_services}
  */
  readonly restrictedServices?: string[];
  /**
  * egress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#egress_policies GoogleAccessContextManagerServicePerimeter#egress_policies}
  */
  readonly egressPolicies?: GoogleAccessContextManagerServicePerimeterStatusEgressPolicies[] | cdktf.IResolvable;
  /**
  * ingress_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#ingress_policies GoogleAccessContextManagerServicePerimeter#ingress_policies}
  */
  readonly ingressPolicies?: GoogleAccessContextManagerServicePerimeterStatusIngressPolicies[] | cdktf.IResolvable;
  /**
  * vpc_accessible_services block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#vpc_accessible_services GoogleAccessContextManagerServicePerimeter#vpc_accessible_services}
  */
  readonly vpcAccessibleServices?: GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices;
}

export function googleAccessContextManagerServicePerimeterStatusToTerraform(struct?: GoogleAccessContextManagerServicePerimeterStatusOutputReference | GoogleAccessContextManagerServicePerimeterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accessLevels),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    restricted_services: cdktf.listMapper(cdktf.stringToTerraform)(struct!.restrictedServices),
    egress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusEgressPoliciesToTerraform)(struct!.egressPolicies),
    ingress_policies: cdktf.listMapper(googleAccessContextManagerServicePerimeterStatusIngressPoliciesToTerraform)(struct!.ingressPolicies),
    vpc_accessible_services: googleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesToTerraform(struct!.vpcAccessibleServices),
  }
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

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterStatus | undefined) {
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
  private _egressPolicies?: GoogleAccessContextManagerServicePerimeterStatusEgressPolicies[] | cdktf.IResolvable; 
  public get egressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('egress_policies');
  }
  public set egressPolicies(value: GoogleAccessContextManagerServicePerimeterStatusEgressPolicies[] | cdktf.IResolvable) {
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
  private _ingressPolicies?: GoogleAccessContextManagerServicePerimeterStatusIngressPolicies[] | cdktf.IResolvable; 
  public get ingressPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress_policies');
  }
  public set ingressPolicies(value: GoogleAccessContextManagerServicePerimeterStatusIngressPolicies[] | cdktf.IResolvable) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#create GoogleAccessContextManagerServicePerimeter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#delete GoogleAccessContextManagerServicePerimeter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter#update GoogleAccessContextManagerServicePerimeter#update}
  */
  readonly update?: string;
}

export function googleAccessContextManagerServicePerimeterTimeoutsToTerraform(struct?: GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference | GoogleAccessContextManagerServicePerimeterTimeouts | cdktf.IResolvable): any {
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

export class GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAccessContextManagerServicePerimeterTimeouts | undefined {
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

  public set internalValue(value: GoogleAccessContextManagerServicePerimeterTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter google_access_context_manager_service_perimeter}
*/
export class GoogleAccessContextManagerServicePerimeter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_service_perimeter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_access_context_manager_service_perimeter google_access_context_manager_service_perimeter} Resource
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
        providerVersion: '4.21.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
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
  public get id() {
    return this.getStringAttribute('id');
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
}
