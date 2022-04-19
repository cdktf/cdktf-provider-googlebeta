// https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleOsConfigGuestPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the guest policy. Length of the description is limited to 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#description GoogleOsConfigGuestPolicies#description}
  */
  readonly description?: string;
  /**
  * The etag for this guest policy. If this is provided on update, it must match the server's etag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#etag GoogleOsConfigGuestPolicies#etag}
  */
  readonly etag?: string;
  /**
  * The logical name of the guest policy in the project with the following restrictions:
* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#guest_policy_id GoogleOsConfigGuestPolicies#guest_policy_id}
  */
  readonly guestPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#project GoogleOsConfigGuestPolicies#project}
  */
  readonly project?: string;
  /**
  * assignment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#assignment GoogleOsConfigGuestPolicies#assignment}
  */
  readonly assignment: GoogleOsConfigGuestPoliciesAssignment;
  /**
  * package_repositories block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#package_repositories GoogleOsConfigGuestPolicies#package_repositories}
  */
  readonly packageRepositories?: GoogleOsConfigGuestPoliciesPackageRepositories[] | cdktf.IResolvable;
  /**
  * packages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#packages GoogleOsConfigGuestPolicies#packages}
  */
  readonly packages?: GoogleOsConfigGuestPoliciesPackages[] | cdktf.IResolvable;
  /**
  * recipes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#recipes GoogleOsConfigGuestPolicies#recipes}
  */
  readonly recipes?: GoogleOsConfigGuestPoliciesRecipes[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#timeouts GoogleOsConfigGuestPolicies#timeouts}
  */
  readonly timeouts?: GoogleOsConfigGuestPoliciesTimeouts;
}
export interface GoogleOsConfigGuestPoliciesAssignmentGroupLabels {
  /**
  * Google Compute Engine instance labels that must be present for an instance to be included in this assignment group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#labels GoogleOsConfigGuestPolicies#labels}
  */
  readonly labels: { [key: string]: string };
}

export function googleOsConfigGuestPoliciesAssignmentGroupLabelsToTerraform(struct?: GoogleOsConfigGuestPoliciesAssignmentGroupLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}

export interface GoogleOsConfigGuestPoliciesAssignmentOsTypes {
  /**
  * Targets VM instances with OS Inventory enabled and having the following OS architecture.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#os_architecture GoogleOsConfigGuestPolicies#os_architecture}
  */
  readonly osArchitecture?: string;
  /**
  * Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#os_short_name GoogleOsConfigGuestPolicies#os_short_name}
  */
  readonly osShortName?: string;
  /**
  * Targets VM instances with OS Inventory enabled and having the following following OS version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#os_version GoogleOsConfigGuestPolicies#os_version}
  */
  readonly osVersion?: string;
}

export function googleOsConfigGuestPoliciesAssignmentOsTypesToTerraform(struct?: GoogleOsConfigGuestPoliciesAssignmentOsTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_architecture: cdktf.stringToTerraform(struct!.osArchitecture),
    os_short_name: cdktf.stringToTerraform(struct!.osShortName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
  }
}

export interface GoogleOsConfigGuestPoliciesAssignment {
  /**
  * Targets VM instances whose name starts with one of these prefixes.
Like labels, this is another way to group VM instances when targeting configs,
for example prefix="prod-".
Only supported for project-level policies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#instance_name_prefixes GoogleOsConfigGuestPolicies#instance_name_prefixes}
  */
  readonly instanceNamePrefixes?: string[];
  /**
  * Targets any of the instances specified. Instances are specified by their URI in the form
zones/[ZONE]/instances/[INSTANCE_NAME].
Instance targeting is uncommon and is supported to facilitate the management of changes
by the instance or to target specific VM instances for development and testing.
Only supported for project-level policies and must reference instances within this project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#instances GoogleOsConfigGuestPolicies#instances}
  */
  readonly instances?: string[];
  /**
  * Targets instances in any of these zones. Leave empty to target instances in any zone.
Zonal targeting is uncommon and is supported to facilitate the management of changes by zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#zones GoogleOsConfigGuestPolicies#zones}
  */
  readonly zones?: string[];
  /**
  * group_labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#group_labels GoogleOsConfigGuestPolicies#group_labels}
  */
  readonly groupLabels?: GoogleOsConfigGuestPoliciesAssignmentGroupLabels[] | cdktf.IResolvable;
  /**
  * os_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#os_types GoogleOsConfigGuestPolicies#os_types}
  */
  readonly osTypes?: GoogleOsConfigGuestPoliciesAssignmentOsTypes[] | cdktf.IResolvable;
}

export function googleOsConfigGuestPoliciesAssignmentToTerraform(struct?: GoogleOsConfigGuestPoliciesAssignmentOutputReference | GoogleOsConfigGuestPoliciesAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instanceNamePrefixes),
    instances: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instances),
    zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.zones),
    group_labels: cdktf.listMapper(googleOsConfigGuestPoliciesAssignmentGroupLabelsToTerraform)(struct!.groupLabels),
    os_types: cdktf.listMapper(googleOsConfigGuestPoliciesAssignmentOsTypesToTerraform)(struct!.osTypes),
  }
}

export class GoogleOsConfigGuestPoliciesAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceNamePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNamePrefixes = this._instanceNamePrefixes;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._groupLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLabels = this._groupLabels;
    }
    if (this._osTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.osTypes = this._osTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesAssignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceNamePrefixes = undefined;
      this._instances = undefined;
      this._zones = undefined;
      this._groupLabels = undefined;
      this._osTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceNamePrefixes = value.instanceNamePrefixes;
      this._instances = value.instances;
      this._zones = value.zones;
      this._groupLabels = value.groupLabels;
      this._osTypes = value.osTypes;
    }
  }

  // instance_name_prefixes - computed: false, optional: true, required: false
  private _instanceNamePrefixes?: string[]; 
  public get instanceNamePrefixes() {
    return this.getListAttribute('instance_name_prefixes');
  }
  public set instanceNamePrefixes(value: string[]) {
    this._instanceNamePrefixes = value;
  }
  public resetInstanceNamePrefixes() {
    this._instanceNamePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNamePrefixesInput() {
    return this._instanceNamePrefixes;
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // group_labels - computed: false, optional: true, required: false
  private _groupLabels?: GoogleOsConfigGuestPoliciesAssignmentGroupLabels[] | cdktf.IResolvable; 
  public get groupLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_labels');
  }
  public set groupLabels(value: GoogleOsConfigGuestPoliciesAssignmentGroupLabels[] | cdktf.IResolvable) {
    this._groupLabels = value;
  }
  public resetGroupLabels() {
    this._groupLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLabelsInput() {
    return this._groupLabels;
  }

  // os_types - computed: false, optional: true, required: false
  private _osTypes?: GoogleOsConfigGuestPoliciesAssignmentOsTypes[] | cdktf.IResolvable; 
  public get osTypes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('os_types');
  }
  public set osTypes(value: GoogleOsConfigGuestPoliciesAssignmentOsTypes[] | cdktf.IResolvable) {
    this._osTypes = value;
  }
  public resetOsTypes() {
    this._osTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypesInput() {
    return this._osTypes;
  }
}
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesApt {
  /**
  * Type of archive files in this repository. The default behavior is DEB. Default value: "DEB" Possible values: ["DEB", "DEB_SRC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#archive_type GoogleOsConfigGuestPolicies#archive_type}
  */
  readonly archiveType?: string;
  /**
  * List of components for this repository. Must contain at least one item.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#components GoogleOsConfigGuestPolicies#components}
  */
  readonly components: string[];
  /**
  * Distribution of this repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#distribution GoogleOsConfigGuestPolicies#distribution}
  */
  readonly distribution: string;
  /**
  * URI of the key file for this repository. The agent maintains a keyring at
/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg containing all the keys in any applied guest policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#gpg_key GoogleOsConfigGuestPolicies#gpg_key}
  */
  readonly gpgKey?: string;
  /**
  * URI for this repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#uri GoogleOsConfigGuestPolicies#uri}
  */
  readonly uri: string;
}

export function googleOsConfigGuestPoliciesPackageRepositoriesAptToTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_type: cdktf.stringToTerraform(struct!.archiveType),
    components: cdktf.listMapper(cdktf.stringToTerraform)(struct!.components),
    distribution: cdktf.stringToTerraform(struct!.distribution),
    gpg_key: cdktf.stringToTerraform(struct!.gpgKey),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class GoogleOsConfigGuestPoliciesPackageRepositoriesAptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesPackageRepositoriesApt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveType !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveType = this._archiveType;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._distribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution;
    }
    if (this._gpgKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKey = this._gpgKey;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesPackageRepositoriesApt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveType = undefined;
      this._components = undefined;
      this._distribution = undefined;
      this._gpgKey = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveType = value.archiveType;
      this._components = value.components;
      this._distribution = value.distribution;
      this._gpgKey = value.gpgKey;
      this._uri = value.uri;
    }
  }

  // archive_type - computed: false, optional: true, required: false
  private _archiveType?: string; 
  public get archiveType() {
    return this.getStringAttribute('archive_type');
  }
  public set archiveType(value: string) {
    this._archiveType = value;
  }
  public resetArchiveType() {
    this._archiveType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveTypeInput() {
    return this._archiveType;
  }

  // components - computed: false, optional: false, required: true
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
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

  // gpg_key - computed: false, optional: true, required: false
  private _gpgKey?: string; 
  public get gpgKey() {
    return this.getStringAttribute('gpg_key');
  }
  public set gpgKey(value: string) {
    this._gpgKey = value;
  }
  public resetGpgKey() {
    this._gpgKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeyInput() {
    return this._gpgKey;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesGoo {
  /**
  * The name of the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#name GoogleOsConfigGuestPolicies#name}
  */
  readonly name: string;
  /**
  * The url of the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#url GoogleOsConfigGuestPolicies#url}
  */
  readonly url: string;
}

export function googleOsConfigGuestPoliciesPackageRepositoriesGooToTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesGoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class GoogleOsConfigGuestPoliciesPackageRepositoriesGooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesPackageRepositoriesGoo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesPackageRepositoriesGoo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._url = value.url;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesYum {
  /**
  * The location of the repository directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#base_url GoogleOsConfigGuestPolicies#base_url}
  */
  readonly baseUrl: string;
  /**
  * The display name of the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#display_name GoogleOsConfigGuestPolicies#display_name}
  */
  readonly displayName?: string;
  /**
  * URIs of GPG keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#gpg_keys GoogleOsConfigGuestPolicies#gpg_keys}
  */
  readonly gpgKeys?: string[];
  /**
  * A one word, unique name for this repository. This is the repo id in the Yum config file and also the displayName
if displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}
  */
  readonly id: string;
}

export function googleOsConfigGuestPoliciesPackageRepositoriesYumToTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    gpg_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.gpgKeys),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class GoogleOsConfigGuestPoliciesPackageRepositoriesYumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesPackageRepositoriesYum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._gpgKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKeys = this._gpgKeys;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesPackageRepositoriesYum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseUrl = undefined;
      this._displayName = undefined;
      this._gpgKeys = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseUrl = value.baseUrl;
      this._displayName = value.displayName;
      this._gpgKeys = value.gpgKeys;
      this._id = value.id;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // gpg_keys - computed: false, optional: true, required: false
  private _gpgKeys?: string[]; 
  public get gpgKeys() {
    return this.getListAttribute('gpg_keys');
  }
  public set gpgKeys(value: string[]) {
    this._gpgKeys = value;
  }
  public resetGpgKeys() {
    this._gpgKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeysInput() {
    return this._gpgKeys;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface GoogleOsConfigGuestPoliciesPackageRepositoriesZypper {
  /**
  * The location of the repository directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#base_url GoogleOsConfigGuestPolicies#base_url}
  */
  readonly baseUrl: string;
  /**
  * The display name of the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#display_name GoogleOsConfigGuestPolicies#display_name}
  */
  readonly displayName?: string;
  /**
  * URIs of GPG keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#gpg_keys GoogleOsConfigGuestPolicies#gpg_keys}
  */
  readonly gpgKeys?: string[];
  /**
  * A one word, unique name for this repository. This is the repo id in the zypper config file and also the displayName
if displayName is omitted. This id is also used as the unique identifier when checking for guest policy conflicts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}
  */
  readonly id: string;
}

export function googleOsConfigGuestPoliciesPackageRepositoriesZypperToTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference | GoogleOsConfigGuestPoliciesPackageRepositoriesZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    gpg_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.gpgKeys),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class GoogleOsConfigGuestPoliciesPackageRepositoriesZypperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesPackageRepositoriesZypper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._gpgKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKeys = this._gpgKeys;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesPackageRepositoriesZypper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseUrl = undefined;
      this._displayName = undefined;
      this._gpgKeys = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseUrl = value.baseUrl;
      this._displayName = value.displayName;
      this._gpgKeys = value.gpgKeys;
      this._id = value.id;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // gpg_keys - computed: false, optional: true, required: false
  private _gpgKeys?: string[]; 
  public get gpgKeys() {
    return this.getListAttribute('gpg_keys');
  }
  public set gpgKeys(value: string[]) {
    this._gpgKeys = value;
  }
  public resetGpgKeys() {
    this._gpgKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeysInput() {
    return this._gpgKeys;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface GoogleOsConfigGuestPoliciesPackageRepositories {
  /**
  * apt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#apt GoogleOsConfigGuestPolicies#apt}
  */
  readonly apt?: GoogleOsConfigGuestPoliciesPackageRepositoriesApt;
  /**
  * goo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#goo GoogleOsConfigGuestPolicies#goo}
  */
  readonly goo?: GoogleOsConfigGuestPoliciesPackageRepositoriesGoo;
  /**
  * yum block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#yum GoogleOsConfigGuestPolicies#yum}
  */
  readonly yum?: GoogleOsConfigGuestPoliciesPackageRepositoriesYum;
  /**
  * zypper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#zypper GoogleOsConfigGuestPolicies#zypper}
  */
  readonly zypper?: GoogleOsConfigGuestPoliciesPackageRepositoriesZypper;
}

export function googleOsConfigGuestPoliciesPackageRepositoriesToTerraform(struct?: GoogleOsConfigGuestPoliciesPackageRepositories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apt: googleOsConfigGuestPoliciesPackageRepositoriesAptToTerraform(struct!.apt),
    goo: googleOsConfigGuestPoliciesPackageRepositoriesGooToTerraform(struct!.goo),
    yum: googleOsConfigGuestPoliciesPackageRepositoriesYumToTerraform(struct!.yum),
    zypper: googleOsConfigGuestPoliciesPackageRepositoriesZypperToTerraform(struct!.zypper),
  }
}

export interface GoogleOsConfigGuestPoliciesPackages {
  /**
  * The desiredState the agent should maintain for this package. The default is to ensure the package is installed. Possible values: ["INSTALLED", "UPDATED", "REMOVED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#desired_state GoogleOsConfigGuestPolicies#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Type of package manager that can be used to install this package. If a system does not have the package manager,
the package is not installed or removed no error message is returned. By default, or if you specify ANY,
the agent attempts to install and remove this package using the default package manager.
This is useful when creating a policy that applies to different types of systems.
The default behavior is ANY. Default value: "ANY" Possible values: ["ANY", "APT", "YUM", "ZYPPER", "GOO"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#manager GoogleOsConfigGuestPolicies#manager}
  */
  readonly manager?: string;
  /**
  * The name of the package. A package is uniquely identified for conflict validation
by checking the package name and the manager(s) that the package targets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#name GoogleOsConfigGuestPolicies#name}
  */
  readonly name: string;
}

export function googleOsConfigGuestPoliciesPackagesToTerraform(struct?: GoogleOsConfigGuestPoliciesPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    manager: cdktf.stringToTerraform(struct!.manager),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface GoogleOsConfigGuestPoliciesRecipesArtifactsGcs {
  /**
  * Bucket of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567
this value would be my-bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#bucket GoogleOsConfigGuestPolicies#bucket}
  */
  readonly bucket?: string;
  /**
  * Must be provided if allowInsecure is false. Generation number of the Google Cloud Storage object.
https://storage.googleapis.com/my-bucket/foo/bar#1234567 this value would be 1234567.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#generation GoogleOsConfigGuestPolicies#generation}
  */
  readonly generation?: number;
  /**
  * Name of the Google Cloud Storage object. Given an example URL: https://storage.googleapis.com/my-bucket/foo/bar#1234567
this value would be foo/bar.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#object GoogleOsConfigGuestPolicies#object}
  */
  readonly object?: string;
}

export function googleOsConfigGuestPoliciesRecipesArtifactsGcsToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference | GoogleOsConfigGuestPoliciesRecipesArtifactsGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesArtifactsGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesArtifactsGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesArtifactsGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesArtifactsRemote {
  /**
  * Must be provided if allowInsecure is false. SHA256 checksum in hex format, to compare to the checksum of the artifact.
If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any
of the steps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#check_sum GoogleOsConfigGuestPolicies#check_sum}
  */
  readonly checkSum?: string;
  /**
  * URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#uri GoogleOsConfigGuestPolicies#uri}
  */
  readonly uri?: string;
}

export function googleOsConfigGuestPoliciesRecipesArtifactsRemoteToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference | GoogleOsConfigGuestPoliciesRecipesArtifactsRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_sum: cdktf.stringToTerraform(struct!.checkSum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesArtifactsRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesArtifactsRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkSum !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkSum = this._checkSum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesArtifactsRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._checkSum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._checkSum = value.checkSum;
      this._uri = value.uri;
    }
  }

  // check_sum - computed: false, optional: true, required: false
  private _checkSum?: string; 
  public get checkSum() {
    return this.getStringAttribute('check_sum');
  }
  public set checkSum(value: string) {
    this._checkSum = value;
  }
  public resetCheckSum() {
    this._checkSum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkSumInput() {
    return this._checkSum;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesArtifacts {
  /**
  * Defaults to false. When false, recipes are subject to validations based on the artifact type:
Remote: A checksum must be specified, and only protocols with transport-layer security are permitted.
GCS: An object generation number must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#allow_insecure GoogleOsConfigGuestPolicies#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * Id of the artifact, which the installation and update steps of this recipe can reference.
Artifacts in a recipe cannot have the same id.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#id GoogleOsConfigGuestPolicies#id}
  */
  readonly id: string;
  /**
  * gcs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#gcs GoogleOsConfigGuestPolicies#gcs}
  */
  readonly gcs?: GoogleOsConfigGuestPoliciesRecipesArtifactsGcs;
  /**
  * remote block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#remote GoogleOsConfigGuestPolicies#remote}
  */
  readonly remote?: GoogleOsConfigGuestPoliciesRecipesArtifactsRemote;
}

export function googleOsConfigGuestPoliciesRecipesArtifactsToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    id: cdktf.stringToTerraform(struct!.id),
    gcs: googleOsConfigGuestPoliciesRecipesArtifactsGcsToTerraform(struct!.gcs),
    remote: googleOsConfigGuestPoliciesRecipesArtifactsRemoteToTerraform(struct!.remote),
  }
}

export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction {
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Directory to extract archive to. Defaults to / on Linux or C:\ on Windows.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}
  */
  readonly destination?: string;
  /**
  * The type of the archive to extract. Possible values: ["TAR", "TAR_GZIP", "TAR_BZIP", "TAR_LZMA", "TAR_XZ", "ZIP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#type GoogleOsConfigGuestPolicies#type}
  */
  readonly type: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    destination: cdktf.stringToTerraform(struct!.destination),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
      this._destination = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
      this._destination = value.destination;
      this._type = value.type;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation {
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy {
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * The absolute path on the instance to put the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}
  */
  readonly destination: string;
  /**
  * Whether to allow this step to overwrite existing files.If this is false and the file already exists the file
is not overwritten and the step is considered a success. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#overwrite GoogleOsConfigGuestPolicies#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users
for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit
number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one
bit corresponds to the execute permission. Default behavior is 755.

Below are some examples of permissions and their associated values:
read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#permissions GoogleOsConfigGuestPolicies#permissions}
  */
  readonly permissions?: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsFileCopyToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    destination: cdktf.stringToTerraform(struct!.destination),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
      this._destination = undefined;
      this._overwrite = undefined;
      this._permissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
      this._destination = value.destination;
      this._overwrite = value.overwrite;
      this._permissions = value.permissions;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec {
  /**
  * A list of possible return values that the program can return to indicate a success. Defaults to [0].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: string;
  /**
  * Arguments to be passed to the provided executable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#args GoogleOsConfigGuestPolicies#args}
  */
  readonly args?: string[];
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId?: string;
  /**
  * The absolute path of the file on the local filesystem.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#local_path GoogleOsConfigGuestPolicies#local_path}
  */
  readonly localPath?: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsFileExecToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.stringToTerraform(struct!.allowedExitCodes),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    local_path: cdktf.stringToTerraform(struct!.localPath),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._args = undefined;
      this._artifactId = undefined;
      this._localPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._args = value.args;
      this._artifactId = value.artifactId;
      this._localPath = value.localPath;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: string; 
  public get allowedExitCodes() {
    return this.getStringAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: string) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // artifact_id - computed: false, optional: true, required: false
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  public resetArtifactId() {
    this._artifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation {
  /**
  * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: number[];
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * The flags to use when installing the MSI. Defaults to the install flag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#flags GoogleOsConfigGuestPolicies#flags}
  */
  readonly flags?: string[];
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedExitCodes),
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    flags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.flags),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._artifactId = undefined;
      this._flags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._artifactId = value.artifactId;
      this._flags = value.flags;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: number[]; 
  public get allowedExitCodes() {
    return this.getNumberListAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: number[]) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return this.getListAttribute('flags');
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation {
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun {
  /**
  * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script is executed directly,
which likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#interpreter GoogleOsConfigGuestPolicies#interpreter}
  */
  readonly interpreter?: string;
  /**
  * The shell script to be executed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#script GoogleOsConfigGuestPolicies#script}
  */
  readonly script: string;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsScriptRunToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference | GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedExitCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    script: cdktf.stringToTerraform(struct!.script),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._interpreter = undefined;
      this._script = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._interpreter = value.interpreter;
      this._script = value.script;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: number[]; 
  public get allowedExitCodes() {
    return this.getNumberListAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: number[]) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesInstallSteps {
  /**
  * archive_extraction block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#archive_extraction GoogleOsConfigGuestPolicies#archive_extraction}
  */
  readonly archiveExtraction?: GoogleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtraction;
  /**
  * dpkg_installation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#dpkg_installation GoogleOsConfigGuestPolicies#dpkg_installation}
  */
  readonly dpkgInstallation?: GoogleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallation;
  /**
  * file_copy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#file_copy GoogleOsConfigGuestPolicies#file_copy}
  */
  readonly fileCopy?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileCopy;
  /**
  * file_exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#file_exec GoogleOsConfigGuestPolicies#file_exec}
  */
  readonly fileExec?: GoogleOsConfigGuestPoliciesRecipesInstallStepsFileExec;
  /**
  * msi_installation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#msi_installation GoogleOsConfigGuestPolicies#msi_installation}
  */
  readonly msiInstallation?: GoogleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallation;
  /**
  * rpm_installation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#rpm_installation GoogleOsConfigGuestPolicies#rpm_installation}
  */
  readonly rpmInstallation?: GoogleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallation;
  /**
  * script_run block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#script_run GoogleOsConfigGuestPolicies#script_run}
  */
  readonly scriptRun?: GoogleOsConfigGuestPoliciesRecipesInstallStepsScriptRun;
}

export function googleOsConfigGuestPoliciesRecipesInstallStepsToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesInstallSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_extraction: googleOsConfigGuestPoliciesRecipesInstallStepsArchiveExtractionToTerraform(struct!.archiveExtraction),
    dpkg_installation: googleOsConfigGuestPoliciesRecipesInstallStepsDpkgInstallationToTerraform(struct!.dpkgInstallation),
    file_copy: googleOsConfigGuestPoliciesRecipesInstallStepsFileCopyToTerraform(struct!.fileCopy),
    file_exec: googleOsConfigGuestPoliciesRecipesInstallStepsFileExecToTerraform(struct!.fileExec),
    msi_installation: googleOsConfigGuestPoliciesRecipesInstallStepsMsiInstallationToTerraform(struct!.msiInstallation),
    rpm_installation: googleOsConfigGuestPoliciesRecipesInstallStepsRpmInstallationToTerraform(struct!.rpmInstallation),
    script_run: googleOsConfigGuestPoliciesRecipesInstallStepsScriptRunToTerraform(struct!.scriptRun),
  }
}

export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction {
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * Directory to extract archive to. Defaults to / on Linux or C:\ on Windows.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}
  */
  readonly destination?: string;
  /**
  * The type of the archive to extract. Possible values: ["TAR", "TAR_GZIP", "TAR_BZIP", "TAR_LZMA", "TAR_XZ", "ZIP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#type GoogleOsConfigGuestPolicies#type}
  */
  readonly type: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    destination: cdktf.stringToTerraform(struct!.destination),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
      this._destination = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
      this._destination = value.destination;
      this._type = value.type;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation {
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy {
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * The absolute path on the instance to put the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#destination GoogleOsConfigGuestPolicies#destination}
  */
  readonly destination: string;
  /**
  * Whether to allow this step to overwrite existing files.If this is false and the file already exists the file
is not overwritten and the step is considered a success. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#overwrite GoogleOsConfigGuestPolicies#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users
for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit
number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one
bit corresponds to the execute permission. Default behavior is 755.

Below are some examples of permissions and their associated values:
read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#permissions GoogleOsConfigGuestPolicies#permissions}
  */
  readonly permissions?: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    destination: cdktf.stringToTerraform(struct!.destination),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    permissions: cdktf.stringToTerraform(struct!.permissions),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
      this._destination = undefined;
      this._overwrite = undefined;
      this._permissions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
      this._destination = value.destination;
      this._overwrite = value.overwrite;
      this._permissions = value.permissions;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec {
  /**
  * A list of possible return values that the program can return to indicate a success. Defaults to [0].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: number[];
  /**
  * Arguments to be passed to the provided executable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#args GoogleOsConfigGuestPolicies#args}
  */
  readonly args?: string[];
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId?: string;
  /**
  * The absolute path of the file on the local filesystem.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#local_path GoogleOsConfigGuestPolicies#local_path}
  */
  readonly localPath?: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsFileExecToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedExitCodes),
    args: cdktf.listMapper(cdktf.stringToTerraform)(struct!.args),
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    local_path: cdktf.stringToTerraform(struct!.localPath),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._args = undefined;
      this._artifactId = undefined;
      this._localPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._args = value.args;
      this._artifactId = value.artifactId;
      this._localPath = value.localPath;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: number[]; 
  public get allowedExitCodes() {
    return this.getNumberListAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: number[]) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // artifact_id - computed: false, optional: true, required: false
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  public resetArtifactId() {
    this._artifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation {
  /**
  * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: number[];
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
  /**
  * The flags to use when installing the MSI. Defaults to the install flag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#flags GoogleOsConfigGuestPolicies#flags}
  */
  readonly flags?: string[];
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedExitCodes),
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    flags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.flags),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._artifactId = undefined;
      this._flags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._artifactId = value.artifactId;
      this._flags = value.flags;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: number[]; 
  public get allowedExitCodes() {
    return this.getNumberListAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: number[]) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return this.getListAttribute('flags');
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation {
  /**
  * The id of the relevant artifact in the recipe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifact_id GoogleOsConfigGuestPolicies#artifact_id}
  */
  readonly artifactId: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactId = value.artifactId;
    }
  }

  // artifact_id - computed: false, optional: false, required: true
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun {
  /**
  * Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#allowed_exit_codes GoogleOsConfigGuestPolicies#allowed_exit_codes}
  */
  readonly allowedExitCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script is executed directly,
which likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#interpreter GoogleOsConfigGuestPolicies#interpreter}
  */
  readonly interpreter?: string;
  /**
  * The shell script to be executed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#script GoogleOsConfigGuestPolicies#script}
  */
  readonly script: string;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference | GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_exit_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedExitCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    script: cdktf.stringToTerraform(struct!.script),
  }
}

export class GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedExitCodes = this._allowedExitCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedExitCodes = undefined;
      this._interpreter = undefined;
      this._script = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedExitCodes = value.allowedExitCodes;
      this._interpreter = value.interpreter;
      this._script = value.script;
    }
  }

  // allowed_exit_codes - computed: true, optional: true, required: false
  private _allowedExitCodes?: number[]; 
  public get allowedExitCodes() {
    return this.getNumberListAttribute('allowed_exit_codes');
  }
  public set allowedExitCodes(value: number[]) {
    this._allowedExitCodes = value;
  }
  public resetAllowedExitCodes() {
    this._allowedExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExitCodesInput() {
    return this._allowedExitCodes;
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }
}
export interface GoogleOsConfigGuestPoliciesRecipesUpdateSteps {
  /**
  * archive_extraction block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#archive_extraction GoogleOsConfigGuestPolicies#archive_extraction}
  */
  readonly archiveExtraction?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtraction;
  /**
  * dpkg_installation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#dpkg_installation GoogleOsConfigGuestPolicies#dpkg_installation}
  */
  readonly dpkgInstallation?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallation;
  /**
  * file_copy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#file_copy GoogleOsConfigGuestPolicies#file_copy}
  */
  readonly fileCopy?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileCopy;
  /**
  * file_exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#file_exec GoogleOsConfigGuestPolicies#file_exec}
  */
  readonly fileExec?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsFileExec;
  /**
  * msi_installation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#msi_installation GoogleOsConfigGuestPolicies#msi_installation}
  */
  readonly msiInstallation?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallation;
  /**
  * rpm_installation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#rpm_installation GoogleOsConfigGuestPolicies#rpm_installation}
  */
  readonly rpmInstallation?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallation;
  /**
  * script_run block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#script_run GoogleOsConfigGuestPolicies#script_run}
  */
  readonly scriptRun?: GoogleOsConfigGuestPoliciesRecipesUpdateStepsScriptRun;
}

export function googleOsConfigGuestPoliciesRecipesUpdateStepsToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipesUpdateSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_extraction: googleOsConfigGuestPoliciesRecipesUpdateStepsArchiveExtractionToTerraform(struct!.archiveExtraction),
    dpkg_installation: googleOsConfigGuestPoliciesRecipesUpdateStepsDpkgInstallationToTerraform(struct!.dpkgInstallation),
    file_copy: googleOsConfigGuestPoliciesRecipesUpdateStepsFileCopyToTerraform(struct!.fileCopy),
    file_exec: googleOsConfigGuestPoliciesRecipesUpdateStepsFileExecToTerraform(struct!.fileExec),
    msi_installation: googleOsConfigGuestPoliciesRecipesUpdateStepsMsiInstallationToTerraform(struct!.msiInstallation),
    rpm_installation: googleOsConfigGuestPoliciesRecipesUpdateStepsRpmInstallationToTerraform(struct!.rpmInstallation),
    script_run: googleOsConfigGuestPoliciesRecipesUpdateStepsScriptRunToTerraform(struct!.scriptRun),
  }
}

export interface GoogleOsConfigGuestPoliciesRecipes {
  /**
  * Default is INSTALLED. The desired state the agent should maintain for this recipe.

INSTALLED: The software recipe is installed on the instance but won't be updated to new versions.
INSTALLED_KEEP_UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version,
if a higher version of the recipe is assigned to this instance.
REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected. Default value: "INSTALLED" Possible values: ["INSTALLED", "UPDATED", "REMOVED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#desired_state GoogleOsConfigGuestPolicies#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Unique identifier for the recipe. Only one recipe with a given name is installed on an instance.
Names are also used to identify resources which helps to determine whether guest policies have conflicts.
This means that requests to create multiple recipes with the same name and version are rejected since they
could potentially have conflicting assignments.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#name GoogleOsConfigGuestPolicies#name}
  */
  readonly name: string;
  /**
  * The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#version GoogleOsConfigGuestPolicies#version}
  */
  readonly version?: string;
  /**
  * artifacts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#artifacts GoogleOsConfigGuestPolicies#artifacts}
  */
  readonly artifacts?: GoogleOsConfigGuestPoliciesRecipesArtifacts[] | cdktf.IResolvable;
  /**
  * install_steps block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#install_steps GoogleOsConfigGuestPolicies#install_steps}
  */
  readonly installSteps?: GoogleOsConfigGuestPoliciesRecipesInstallSteps[] | cdktf.IResolvable;
  /**
  * update_steps block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#update_steps GoogleOsConfigGuestPolicies#update_steps}
  */
  readonly updateSteps?: GoogleOsConfigGuestPoliciesRecipesUpdateSteps[] | cdktf.IResolvable;
}

export function googleOsConfigGuestPoliciesRecipesToTerraform(struct?: GoogleOsConfigGuestPoliciesRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    artifacts: cdktf.listMapper(googleOsConfigGuestPoliciesRecipesArtifactsToTerraform)(struct!.artifacts),
    install_steps: cdktf.listMapper(googleOsConfigGuestPoliciesRecipesInstallStepsToTerraform)(struct!.installSteps),
    update_steps: cdktf.listMapper(googleOsConfigGuestPoliciesRecipesUpdateStepsToTerraform)(struct!.updateSteps),
  }
}

export interface GoogleOsConfigGuestPoliciesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#create GoogleOsConfigGuestPolicies#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#delete GoogleOsConfigGuestPolicies#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies#update GoogleOsConfigGuestPolicies#update}
  */
  readonly update?: string;
}

export function googleOsConfigGuestPoliciesTimeoutsToTerraform(struct?: GoogleOsConfigGuestPoliciesTimeoutsOutputReference | GoogleOsConfigGuestPoliciesTimeouts | cdktf.IResolvable): any {
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

export class GoogleOsConfigGuestPoliciesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleOsConfigGuestPoliciesTimeouts | undefined {
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

  public set internalValue(value: GoogleOsConfigGuestPoliciesTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies google_os_config_guest_policies}
*/
export class GoogleOsConfigGuestPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_os_config_guest_policies";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_os_config_guest_policies google_os_config_guest_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleOsConfigGuestPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleOsConfigGuestPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_os_config_guest_policies',
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
    this._description = config.description;
    this._etag = config.etag;
    this._guestPolicyId = config.guestPolicyId;
    this._project = config.project;
    this._assignment.internalValue = config.assignment;
    this._packageRepositories = config.packageRepositories;
    this._packages = config.packages;
    this._recipes = config.recipes;
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

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // guest_policy_id - computed: false, optional: false, required: true
  private _guestPolicyId?: string; 
  public get guestPolicyId() {
    return this.getStringAttribute('guest_policy_id');
  }
  public set guestPolicyId(value: string) {
    this._guestPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestPolicyIdInput() {
    return this._guestPolicyId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // assignment - computed: false, optional: false, required: true
  private _assignment = new GoogleOsConfigGuestPoliciesAssignmentOutputReference(this, "assignment");
  public get assignment() {
    return this._assignment;
  }
  public putAssignment(value: GoogleOsConfigGuestPoliciesAssignment) {
    this._assignment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentInput() {
    return this._assignment.internalValue;
  }

  // package_repositories - computed: false, optional: true, required: false
  private _packageRepositories?: GoogleOsConfigGuestPoliciesPackageRepositories[] | cdktf.IResolvable; 
  public get packageRepositories() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('package_repositories');
  }
  public set packageRepositories(value: GoogleOsConfigGuestPoliciesPackageRepositories[] | cdktf.IResolvable) {
    this._packageRepositories = value;
  }
  public resetPackageRepositories() {
    this._packageRepositories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageRepositoriesInput() {
    return this._packageRepositories;
  }

  // packages - computed: false, optional: true, required: false
  private _packages?: GoogleOsConfigGuestPoliciesPackages[] | cdktf.IResolvable; 
  public get packages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('packages');
  }
  public set packages(value: GoogleOsConfigGuestPoliciesPackages[] | cdktf.IResolvable) {
    this._packages = value;
  }
  public resetPackages() {
    this._packages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesInput() {
    return this._packages;
  }

  // recipes - computed: false, optional: true, required: false
  private _recipes?: GoogleOsConfigGuestPoliciesRecipes[] | cdktf.IResolvable; 
  public get recipes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('recipes');
  }
  public set recipes(value: GoogleOsConfigGuestPoliciesRecipes[] | cdktf.IResolvable) {
    this._recipes = value;
  }
  public resetRecipes() {
    this._recipes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipesInput() {
    return this._recipes;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleOsConfigGuestPoliciesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleOsConfigGuestPoliciesTimeouts) {
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
      etag: cdktf.stringToTerraform(this._etag),
      guest_policy_id: cdktf.stringToTerraform(this._guestPolicyId),
      project: cdktf.stringToTerraform(this._project),
      assignment: googleOsConfigGuestPoliciesAssignmentToTerraform(this._assignment.internalValue),
      package_repositories: cdktf.listMapper(googleOsConfigGuestPoliciesPackageRepositoriesToTerraform)(this._packageRepositories),
      packages: cdktf.listMapper(googleOsConfigGuestPoliciesPackagesToTerraform)(this._packages),
      recipes: cdktf.listMapper(googleOsConfigGuestPoliciesRecipesToTerraform)(this._recipes),
      timeouts: googleOsConfigGuestPoliciesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
