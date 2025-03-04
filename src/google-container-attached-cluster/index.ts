// https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleContainerAttachedClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Annotations on the cluster. This field has the same
  * restrictions as Kubernetes annotations. The total size of all keys and
  * values combined is limited to 256k. Key can have 2 segments: prefix (optional)
  * and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
  * Name must be 63 characters or less, begin and end with alphanumerics,
  * with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#annotations GoogleContainerAttachedCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#deletion_policy GoogleContainerAttachedCluster#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A human readable description of this attached cluster. Cannot be longer
  * than 255 UTF-8 encoded bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#description GoogleContainerAttachedCluster#description}
  */
  readonly description?: string;
  /**
  * The Kubernetes distribution of the underlying attached cluster. Supported values:
  * "eks", "aks", "generic". The generic distribution provides the ability to register
  * or migrate any CNCF conformant cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#distribution GoogleContainerAttachedCluster#distribution}
  */
  readonly distribution: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#location GoogleContainerAttachedCluster#location}
  */
  readonly location: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}
  */
  readonly name: string;
  /**
  * The platform version for the cluster (e.g. '1.23.0-gke.1').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#platform_version GoogleContainerAttachedCluster#platform_version}
  */
  readonly platformVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}
  */
  readonly project?: string;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#authorization GoogleContainerAttachedCluster#authorization}
  */
  readonly authorization?: GoogleContainerAttachedClusterAuthorization;
  /**
  * binary_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#binary_authorization GoogleContainerAttachedCluster#binary_authorization}
  */
  readonly binaryAuthorization?: GoogleContainerAttachedClusterBinaryAuthorization;
  /**
  * fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#fleet GoogleContainerAttachedCluster#fleet}
  */
  readonly fleet: GoogleContainerAttachedClusterFleet;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#logging_config GoogleContainerAttachedCluster#logging_config}
  */
  readonly loggingConfig?: GoogleContainerAttachedClusterLoggingConfig;
  /**
  * monitoring_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#monitoring_config GoogleContainerAttachedCluster#monitoring_config}
  */
  readonly monitoringConfig?: GoogleContainerAttachedClusterMonitoringConfig;
  /**
  * oidc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#oidc_config GoogleContainerAttachedCluster#oidc_config}
  */
  readonly oidcConfig: GoogleContainerAttachedClusterOidcConfig;
  /**
  * proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#proxy_config GoogleContainerAttachedCluster#proxy_config}
  */
  readonly proxyConfig?: GoogleContainerAttachedClusterProxyConfig;
  /**
  * security_posture_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#security_posture_config GoogleContainerAttachedCluster#security_posture_config}
  */
  readonly securityPostureConfig?: GoogleContainerAttachedClusterSecurityPostureConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#timeouts GoogleContainerAttachedCluster#timeouts}
  */
  readonly timeouts?: GoogleContainerAttachedClusterTimeouts;
}
export interface GoogleContainerAttachedClusterErrors {
}

export function googleContainerAttachedClusterErrorsToTerraform(struct?: GoogleContainerAttachedClusterErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleContainerAttachedClusterErrorsToHclTerraform(struct?: GoogleContainerAttachedClusterErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleContainerAttachedClusterErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerAttachedClusterErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleContainerAttachedClusterErrorsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleContainerAttachedClusterErrorsOutputReference {
    return new GoogleContainerAttachedClusterErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerAttachedClusterWorkloadIdentityConfig {
}

export function googleContainerAttachedClusterWorkloadIdentityConfigToTerraform(struct?: GoogleContainerAttachedClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleContainerAttachedClusterWorkloadIdentityConfigToHclTerraform(struct?: GoogleContainerAttachedClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleContainerAttachedClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterWorkloadIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider - computed: true, optional: false, required: false
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }

  // issuer_uri - computed: true, optional: false, required: false
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }

  // workload_pool - computed: true, optional: false, required: false
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
}

export class GoogleContainerAttachedClusterWorkloadIdentityConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference {
    return new GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleContainerAttachedClusterAuthorization {
  /**
  * Groups that can perform operations as a cluster admin. A managed
  * ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
  * to the groups. Up to ten admin groups can be provided.
  * 
  * For more info on RBAC, see
  * https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#admin_groups GoogleContainerAttachedCluster#admin_groups}
  */
  readonly adminGroups?: string[];
  /**
  * Users that can perform operations as a cluster admin. A managed
  * ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
  * to the users. Up to ten admin users can be provided.
  * 
  * For more info on RBAC, see
  * https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#admin_users GoogleContainerAttachedCluster#admin_users}
  */
  readonly adminUsers?: string[];
}

export function googleContainerAttachedClusterAuthorizationToTerraform(struct?: GoogleContainerAttachedClusterAuthorizationOutputReference | GoogleContainerAttachedClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminGroups),
    admin_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminUsers),
  }
}


export function googleContainerAttachedClusterAuthorizationToHclTerraform(struct?: GoogleContainerAttachedClusterAuthorizationOutputReference | GoogleContainerAttachedClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    admin_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroups = this._adminGroups;
    }
    if (this._adminUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsers = this._adminUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminGroups = undefined;
      this._adminUsers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminGroups = value.adminGroups;
      this._adminUsers = value.adminUsers;
    }
  }

  // admin_groups - computed: false, optional: true, required: false
  private _adminGroups?: string[]; 
  public get adminGroups() {
    return this.getListAttribute('admin_groups');
  }
  public set adminGroups(value: string[]) {
    this._adminGroups = value;
  }
  public resetAdminGroups() {
    this._adminGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupsInput() {
    return this._adminGroups;
  }

  // admin_users - computed: false, optional: true, required: false
  private _adminUsers?: string[]; 
  public get adminUsers() {
    return this.getListAttribute('admin_users');
  }
  public set adminUsers(value: string[]) {
    this._adminUsers = value;
  }
  public resetAdminUsers() {
    this._adminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers;
  }
}
export interface GoogleContainerAttachedClusterBinaryAuthorization {
  /**
  * Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#evaluation_mode GoogleContainerAttachedCluster#evaluation_mode}
  */
  readonly evaluationMode?: string;
}

export function googleContainerAttachedClusterBinaryAuthorizationToTerraform(struct?: GoogleContainerAttachedClusterBinaryAuthorizationOutputReference | GoogleContainerAttachedClusterBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
  }
}


export function googleContainerAttachedClusterBinaryAuthorizationToHclTerraform(struct?: GoogleContainerAttachedClusterBinaryAuthorizationOutputReference | GoogleContainerAttachedClusterBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_mode: {
      value: cdktf.stringToHclTerraform(struct!.evaluationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterBinaryAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMode = this._evaluationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterBinaryAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationMode = value.evaluationMode;
    }
  }

  // evaluation_mode - computed: false, optional: true, required: false
  private _evaluationMode?: string; 
  public get evaluationMode() {
    return this.getStringAttribute('evaluation_mode');
  }
  public set evaluationMode(value: string) {
    this._evaluationMode = value;
  }
  public resetEvaluationMode() {
    this._evaluationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationModeInput() {
    return this._evaluationMode;
  }
}
export interface GoogleContainerAttachedClusterFleet {
  /**
  * The number of the Fleet host project where this cluster will be registered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}
  */
  readonly project: string;
}

export function googleContainerAttachedClusterFleetToTerraform(struct?: GoogleContainerAttachedClusterFleetOutputReference | GoogleContainerAttachedClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function googleContainerAttachedClusterFleetToHclTerraform(struct?: GoogleContainerAttachedClusterFleetOutputReference | GoogleContainerAttachedClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
    }
  }

  // membership - computed: true, optional: false, required: false
  public get membership() {
    return this.getStringAttribute('membership');
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
}
export interface GoogleContainerAttachedClusterLoggingConfigComponentConfig {
  /**
  * The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#enable_components GoogleContainerAttachedCluster#enable_components}
  */
  readonly enableComponents?: string[];
}

export function googleContainerAttachedClusterLoggingConfigComponentConfigToTerraform(struct?: GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference | GoogleContainerAttachedClusterLoggingConfigComponentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableComponents),
  }
}


export function googleContainerAttachedClusterLoggingConfigComponentConfigToHclTerraform(struct?: GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference | GoogleContainerAttachedClusterLoggingConfigComponentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterLoggingConfigComponentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterLoggingConfigComponentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableComponents = value.enableComponents;
    }
  }

  // enable_components - computed: false, optional: true, required: false
  private _enableComponents?: string[]; 
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }
  public set enableComponents(value: string[]) {
    this._enableComponents = value;
  }
  public resetEnableComponents() {
    this._enableComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComponentsInput() {
    return this._enableComponents;
  }
}
export interface GoogleContainerAttachedClusterLoggingConfig {
  /**
  * component_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#component_config GoogleContainerAttachedCluster#component_config}
  */
  readonly componentConfig?: GoogleContainerAttachedClusterLoggingConfigComponentConfig;
}

export function googleContainerAttachedClusterLoggingConfigToTerraform(struct?: GoogleContainerAttachedClusterLoggingConfigOutputReference | GoogleContainerAttachedClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_config: googleContainerAttachedClusterLoggingConfigComponentConfigToTerraform(struct!.componentConfig),
  }
}


export function googleContainerAttachedClusterLoggingConfigToHclTerraform(struct?: GoogleContainerAttachedClusterLoggingConfigOutputReference | GoogleContainerAttachedClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_config: {
      value: googleContainerAttachedClusterLoggingConfigComponentConfigToHclTerraform(struct!.componentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAttachedClusterLoggingConfigComponentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentConfig = this._componentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._componentConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._componentConfig.internalValue = value.componentConfig;
    }
  }

  // component_config - computed: false, optional: true, required: false
  private _componentConfig = new GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference(this, "component_config");
  public get componentConfig() {
    return this._componentConfig;
  }
  public putComponentConfig(value: GoogleContainerAttachedClusterLoggingConfigComponentConfig) {
    this._componentConfig.internalValue = value;
  }
  public resetComponentConfig() {
    this._componentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentConfigInput() {
    return this._componentConfig.internalValue;
  }
}
export interface GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig {
  /**
  * Enable Managed Collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#enabled GoogleContainerAttachedCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function googleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigToTerraform(struct?: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference | GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigToHclTerraform(struct?: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference | GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleContainerAttachedClusterMonitoringConfig {
  /**
  * managed_prometheus_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#managed_prometheus_config GoogleContainerAttachedCluster#managed_prometheus_config}
  */
  readonly managedPrometheusConfig?: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig;
}

export function googleContainerAttachedClusterMonitoringConfigToTerraform(struct?: GoogleContainerAttachedClusterMonitoringConfigOutputReference | GoogleContainerAttachedClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_prometheus_config: googleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigToTerraform(struct!.managedPrometheusConfig),
  }
}


export function googleContainerAttachedClusterMonitoringConfigToHclTerraform(struct?: GoogleContainerAttachedClusterMonitoringConfigOutputReference | GoogleContainerAttachedClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_prometheus_config: {
      value: googleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigToHclTerraform(struct!.managedPrometheusConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterMonitoringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedPrometheusConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPrometheusConfig = this._managedPrometheusConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedPrometheusConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedPrometheusConfig.internalValue = value.managedPrometheusConfig;
    }
  }

  // managed_prometheus_config - computed: false, optional: true, required: false
  private _managedPrometheusConfig = new GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference(this, "managed_prometheus_config");
  public get managedPrometheusConfig() {
    return this._managedPrometheusConfig;
  }
  public putManagedPrometheusConfig(value: GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig) {
    this._managedPrometheusConfig.internalValue = value;
  }
  public resetManagedPrometheusConfig() {
    this._managedPrometheusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPrometheusConfigInput() {
    return this._managedPrometheusConfig.internalValue;
  }
}
export interface GoogleContainerAttachedClusterOidcConfig {
  /**
  * A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#issuer_url GoogleContainerAttachedCluster#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * OIDC verification keys in JWKS format (RFC 7517).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#jwks GoogleContainerAttachedCluster#jwks}
  */
  readonly jwks?: string;
}

export function googleContainerAttachedClusterOidcConfigToTerraform(struct?: GoogleContainerAttachedClusterOidcConfigOutputReference | GoogleContainerAttachedClusterOidcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    jwks: cdktf.stringToTerraform(struct!.jwks),
  }
}


export function googleContainerAttachedClusterOidcConfigToHclTerraform(struct?: GoogleContainerAttachedClusterOidcConfigOutputReference | GoogleContainerAttachedClusterOidcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterOidcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterOidcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterOidcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuerUrl = undefined;
      this._jwks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuerUrl = value.issuerUrl;
      this._jwks = value.jwks;
    }
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // jwks - computed: false, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }
}
export interface GoogleContainerAttachedClusterProxyConfigKubernetesSecret {
  /**
  * Name of the kubernetes secret containing the proxy config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}
  */
  readonly name: string;
  /**
  * Namespace of the kubernetes secret containing the proxy config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#namespace GoogleContainerAttachedCluster#namespace}
  */
  readonly namespace: string;
}

export function googleContainerAttachedClusterProxyConfigKubernetesSecretToTerraform(struct?: GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference | GoogleContainerAttachedClusterProxyConfigKubernetesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function googleContainerAttachedClusterProxyConfigKubernetesSecretToHclTerraform(struct?: GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference | GoogleContainerAttachedClusterProxyConfigKubernetesSecret): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterProxyConfigKubernetesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterProxyConfigKubernetesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface GoogleContainerAttachedClusterProxyConfig {
  /**
  * kubernetes_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#kubernetes_secret GoogleContainerAttachedCluster#kubernetes_secret}
  */
  readonly kubernetesSecret?: GoogleContainerAttachedClusterProxyConfigKubernetesSecret;
}

export function googleContainerAttachedClusterProxyConfigToTerraform(struct?: GoogleContainerAttachedClusterProxyConfigOutputReference | GoogleContainerAttachedClusterProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_secret: googleContainerAttachedClusterProxyConfigKubernetesSecretToTerraform(struct!.kubernetesSecret),
  }
}


export function googleContainerAttachedClusterProxyConfigToHclTerraform(struct?: GoogleContainerAttachedClusterProxyConfigOutputReference | GoogleContainerAttachedClusterProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes_secret: {
      value: googleContainerAttachedClusterProxyConfigKubernetesSecretToHclTerraform(struct!.kubernetesSecret),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleContainerAttachedClusterProxyConfigKubernetesSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesSecret = this._kubernetesSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubernetesSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubernetesSecret.internalValue = value.kubernetesSecret;
    }
  }

  // kubernetes_secret - computed: false, optional: true, required: false
  private _kubernetesSecret = new GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference(this, "kubernetes_secret");
  public get kubernetesSecret() {
    return this._kubernetesSecret;
  }
  public putKubernetesSecret(value: GoogleContainerAttachedClusterProxyConfigKubernetesSecret) {
    this._kubernetesSecret.internalValue = value;
  }
  public resetKubernetesSecret() {
    this._kubernetesSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSecretInput() {
    return this._kubernetesSecret.internalValue;
  }
}
export interface GoogleContainerAttachedClusterSecurityPostureConfig {
  /**
  * Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#vulnerability_mode GoogleContainerAttachedCluster#vulnerability_mode}
  */
  readonly vulnerabilityMode: string;
}

export function googleContainerAttachedClusterSecurityPostureConfigToTerraform(struct?: GoogleContainerAttachedClusterSecurityPostureConfigOutputReference | GoogleContainerAttachedClusterSecurityPostureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vulnerability_mode: cdktf.stringToTerraform(struct!.vulnerabilityMode),
  }
}


export function googleContainerAttachedClusterSecurityPostureConfigToHclTerraform(struct?: GoogleContainerAttachedClusterSecurityPostureConfigOutputReference | GoogleContainerAttachedClusterSecurityPostureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vulnerability_mode: {
      value: cdktf.stringToHclTerraform(struct!.vulnerabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleContainerAttachedClusterSecurityPostureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleContainerAttachedClusterSecurityPostureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vulnerabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityMode = this._vulnerabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleContainerAttachedClusterSecurityPostureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vulnerabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vulnerabilityMode = value.vulnerabilityMode;
    }
  }

  // vulnerability_mode - computed: false, optional: false, required: true
  private _vulnerabilityMode?: string; 
  public get vulnerabilityMode() {
    return this.getStringAttribute('vulnerability_mode');
  }
  public set vulnerabilityMode(value: string) {
    this._vulnerabilityMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityModeInput() {
    return this._vulnerabilityMode;
  }
}
export interface GoogleContainerAttachedClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#create GoogleContainerAttachedCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#delete GoogleContainerAttachedCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#update GoogleContainerAttachedCluster#update}
  */
  readonly update?: string;
}

export function googleContainerAttachedClusterTimeoutsToTerraform(struct?: GoogleContainerAttachedClusterTimeouts | cdktf.IResolvable): any {
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


export function googleContainerAttachedClusterTimeoutsToHclTerraform(struct?: GoogleContainerAttachedClusterTimeouts | cdktf.IResolvable): any {
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

export class GoogleContainerAttachedClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleContainerAttachedClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleContainerAttachedClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster google_container_attached_cluster}
*/
export class GoogleContainerAttachedCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_attached_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleContainerAttachedCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleContainerAttachedCluster to import
  * @param importFromId The id of the existing GoogleContainerAttachedCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleContainerAttachedCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_container_attached_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_container_attached_cluster google_container_attached_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleContainerAttachedClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleContainerAttachedClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_attached_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.24.0',
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
    this._annotations = config.annotations;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._distribution = config.distribution;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._platformVersion = config.platformVersion;
    this._project = config.project;
    this._authorization.internalValue = config.authorization;
    this._binaryAuthorization.internalValue = config.binaryAuthorization;
    this._fleet.internalValue = config.fleet;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._monitoringConfig.internalValue = config.monitoringConfig;
    this._oidcConfig.internalValue = config.oidcConfig;
    this._proxyConfig.internalValue = config.proxyConfig;
    this._securityPostureConfig.internalValue = config.securityPostureConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // cluster_region - computed: true, optional: false, required: false
  public get clusterRegion() {
    return this.getStringAttribute('cluster_region');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
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

  // distribution - computed: false, optional: false, required: true
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new GoogleContainerAttachedClusterErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
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

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
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

  // platform_version - computed: false, optional: false, required: true
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // workload_identity_config - computed: true, optional: false, required: false
  private _workloadIdentityConfig = new GoogleContainerAttachedClusterWorkloadIdentityConfigList(this, "workload_identity_config", false);
  public get workloadIdentityConfig() {
    return this._workloadIdentityConfig;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new GoogleContainerAttachedClusterAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: GoogleContainerAttachedClusterAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // binary_authorization - computed: false, optional: true, required: false
  private _binaryAuthorization = new GoogleContainerAttachedClusterBinaryAuthorizationOutputReference(this, "binary_authorization");
  public get binaryAuthorization() {
    return this._binaryAuthorization;
  }
  public putBinaryAuthorization(value: GoogleContainerAttachedClusterBinaryAuthorization) {
    this._binaryAuthorization.internalValue = value;
  }
  public resetBinaryAuthorization() {
    this._binaryAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationInput() {
    return this._binaryAuthorization.internalValue;
  }

  // fleet - computed: false, optional: false, required: true
  private _fleet = new GoogleContainerAttachedClusterFleetOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: GoogleContainerAttachedClusterFleet) {
    this._fleet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new GoogleContainerAttachedClusterLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: GoogleContainerAttachedClusterLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // monitoring_config - computed: false, optional: true, required: false
  private _monitoringConfig = new GoogleContainerAttachedClusterMonitoringConfigOutputReference(this, "monitoring_config");
  public get monitoringConfig() {
    return this._monitoringConfig;
  }
  public putMonitoringConfig(value: GoogleContainerAttachedClusterMonitoringConfig) {
    this._monitoringConfig.internalValue = value;
  }
  public resetMonitoringConfig() {
    this._monitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigInput() {
    return this._monitoringConfig.internalValue;
  }

  // oidc_config - computed: false, optional: false, required: true
  private _oidcConfig = new GoogleContainerAttachedClusterOidcConfigOutputReference(this, "oidc_config");
  public get oidcConfig() {
    return this._oidcConfig;
  }
  public putOidcConfig(value: GoogleContainerAttachedClusterOidcConfig) {
    this._oidcConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigInput() {
    return this._oidcConfig.internalValue;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig = new GoogleContainerAttachedClusterProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: GoogleContainerAttachedClusterProxyConfig) {
    this._proxyConfig.internalValue = value;
  }
  public resetProxyConfig() {
    this._proxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig.internalValue;
  }

  // security_posture_config - computed: false, optional: true, required: false
  private _securityPostureConfig = new GoogleContainerAttachedClusterSecurityPostureConfigOutputReference(this, "security_posture_config");
  public get securityPostureConfig() {
    return this._securityPostureConfig;
  }
  public putSecurityPostureConfig(value: GoogleContainerAttachedClusterSecurityPostureConfig) {
    this._securityPostureConfig.internalValue = value;
  }
  public resetSecurityPostureConfig() {
    this._securityPostureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPostureConfigInput() {
    return this._securityPostureConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleContainerAttachedClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleContainerAttachedClusterTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      distribution: cdktf.stringToTerraform(this._distribution),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      platform_version: cdktf.stringToTerraform(this._platformVersion),
      project: cdktf.stringToTerraform(this._project),
      authorization: googleContainerAttachedClusterAuthorizationToTerraform(this._authorization.internalValue),
      binary_authorization: googleContainerAttachedClusterBinaryAuthorizationToTerraform(this._binaryAuthorization.internalValue),
      fleet: googleContainerAttachedClusterFleetToTerraform(this._fleet.internalValue),
      logging_config: googleContainerAttachedClusterLoggingConfigToTerraform(this._loggingConfig.internalValue),
      monitoring_config: googleContainerAttachedClusterMonitoringConfigToTerraform(this._monitoringConfig.internalValue),
      oidc_config: googleContainerAttachedClusterOidcConfigToTerraform(this._oidcConfig.internalValue),
      proxy_config: googleContainerAttachedClusterProxyConfigToTerraform(this._proxyConfig.internalValue),
      security_posture_config: googleContainerAttachedClusterSecurityPostureConfigToTerraform(this._securityPostureConfig.internalValue),
      timeouts: googleContainerAttachedClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution: {
        value: cdktf.stringToHclTerraform(this._distribution),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_version: {
        value: cdktf.stringToHclTerraform(this._platformVersion),
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
      authorization: {
        value: googleContainerAttachedClusterAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAttachedClusterAuthorizationList",
      },
      binary_authorization: {
        value: googleContainerAttachedClusterBinaryAuthorizationToHclTerraform(this._binaryAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAttachedClusterBinaryAuthorizationList",
      },
      fleet: {
        value: googleContainerAttachedClusterFleetToHclTerraform(this._fleet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAttachedClusterFleetList",
      },
      logging_config: {
        value: googleContainerAttachedClusterLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAttachedClusterLoggingConfigList",
      },
      monitoring_config: {
        value: googleContainerAttachedClusterMonitoringConfigToHclTerraform(this._monitoringConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAttachedClusterMonitoringConfigList",
      },
      oidc_config: {
        value: googleContainerAttachedClusterOidcConfigToHclTerraform(this._oidcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAttachedClusterOidcConfigList",
      },
      proxy_config: {
        value: googleContainerAttachedClusterProxyConfigToHclTerraform(this._proxyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAttachedClusterProxyConfigList",
      },
      security_posture_config: {
        value: googleContainerAttachedClusterSecurityPostureConfigToHclTerraform(this._securityPostureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleContainerAttachedClusterSecurityPostureConfigList",
      },
      timeouts: {
        value: googleContainerAttachedClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleContainerAttachedClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
