// https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataprocMetastoreServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#database_type GoogleDataprocMetastoreService#database_type}
  */
  readonly databaseType?: string;
  /**
  * Indicates if the dataproc metastore should be protected against accidental deletions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#deletion_protection GoogleDataprocMetastoreService#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the metastore service.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#labels GoogleDataprocMetastoreService#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the metastore service should reside.
  * The default value is 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#location GoogleDataprocMetastoreService#location}
  */
  readonly location?: string;
  /**
  * The relative resource name of the VPC network on which the instance can be accessed. It is specified in the following form:
  * 
  * "projects/{projectNumber}/global/networks/{network_id}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#network GoogleDataprocMetastoreService#network}
  */
  readonly network?: string;
  /**
  * The TCP port at which the metastore service is reached. Default: 9083.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#port GoogleDataprocMetastoreService#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}
  */
  readonly project?: string;
  /**
  * The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#release_channel GoogleDataprocMetastoreService#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * The ID of the metastore service. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
  * and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
  * 3 and 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#service_id GoogleDataprocMetastoreService#service_id}
  */
  readonly serviceId: string;
  /**
  * The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#tier GoogleDataprocMetastoreService#tier}
  */
  readonly tier?: string;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#encryption_config GoogleDataprocMetastoreService#encryption_config}
  */
  readonly encryptionConfig?: GoogleDataprocMetastoreServiceEncryptionConfig;
  /**
  * hive_metastore_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#hive_metastore_config GoogleDataprocMetastoreService#hive_metastore_config}
  */
  readonly hiveMetastoreConfig?: GoogleDataprocMetastoreServiceHiveMetastoreConfig;
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#maintenance_window GoogleDataprocMetastoreService#maintenance_window}
  */
  readonly maintenanceWindow?: GoogleDataprocMetastoreServiceMaintenanceWindow;
  /**
  * metadata_integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#metadata_integration GoogleDataprocMetastoreService#metadata_integration}
  */
  readonly metadataIntegration?: GoogleDataprocMetastoreServiceMetadataIntegration;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#network_config GoogleDataprocMetastoreService#network_config}
  */
  readonly networkConfig?: GoogleDataprocMetastoreServiceNetworkConfig;
  /**
  * scaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#scaling_config GoogleDataprocMetastoreService#scaling_config}
  */
  readonly scalingConfig?: GoogleDataprocMetastoreServiceScalingConfig;
  /**
  * scheduled_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#scheduled_backup GoogleDataprocMetastoreService#scheduled_backup}
  */
  readonly scheduledBackup?: GoogleDataprocMetastoreServiceScheduledBackup;
  /**
  * telemetry_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#telemetry_config GoogleDataprocMetastoreService#telemetry_config}
  */
  readonly telemetryConfig?: GoogleDataprocMetastoreServiceTelemetryConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#timeouts GoogleDataprocMetastoreService#timeouts}
  */
  readonly timeouts?: GoogleDataprocMetastoreServiceTimeouts;
}
export interface GoogleDataprocMetastoreServiceEncryptionConfig {
  /**
  * The fully qualified customer provided Cloud KMS key name to use for customer data encryption.
  * Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#kms_key GoogleDataprocMetastoreService#kms_key}
  */
  readonly kmsKey: string;
}

export function googleDataprocMetastoreServiceEncryptionConfigToTerraform(struct?: GoogleDataprocMetastoreServiceEncryptionConfigOutputReference | GoogleDataprocMetastoreServiceEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function googleDataprocMetastoreServiceEncryptionConfigToHclTerraform(struct?: GoogleDataprocMetastoreServiceEncryptionConfigOutputReference | GoogleDataprocMetastoreServiceEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: false, required: true
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions {
  /**
  * A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides.
  * If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#config_overrides GoogleDataprocMetastoreService#config_overrides}
  */
  readonly configOverrides?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#key GoogleDataprocMetastoreService#key}
  */
  readonly key: string;
  /**
  * The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#version GoogleDataprocMetastoreService#version}
  */
  readonly version: string;
}

export function googleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsToTerraform(struct?: GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configOverrides),
    key: cdktf.stringToTerraform(struct!.key),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsToHclTerraform(struct?: GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configOverrides = undefined;
      this._key = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configOverrides = value.configOverrides;
      this._key = value.key;
      this._version = value.version;
    }
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: string }; 
  public get configOverrides() {
    return this.getStringMapAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: string }) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList extends cdktf.ComplexList {
  public internalValue? : GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference {
    return new GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab {
  /**
  * The relative resource name of a Secret Manager secret version, in the following form:
  * 
  * "projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#cloud_secret GoogleDataprocMetastoreService#cloud_secret}
  */
  readonly cloudSecret: string;
}

export function googleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabToTerraform(struct?: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference | GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_secret: cdktf.stringToTerraform(struct!.cloudSecret),
  }
}


export function googleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabToHclTerraform(struct?: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference | GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_secret: {
      value: cdktf.stringToHclTerraform(struct!.cloudSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSecret = this._cloudSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudSecret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudSecret = value.cloudSecret;
    }
  }

  // cloud_secret - computed: false, optional: false, required: true
  private _cloudSecret?: string; 
  public get cloudSecret() {
    return this.getStringAttribute('cloud_secret');
  }
  public set cloudSecret(value: string) {
    this._cloudSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSecretInput() {
    return this._cloudSecret;
  }
}
export interface GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig {
  /**
  * A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#krb5_config_gcs_uri GoogleDataprocMetastoreService#krb5_config_gcs_uri}
  */
  readonly krb5ConfigGcsUri: string;
  /**
  * A Kerberos principal that exists in the both the keytab the KDC to authenticate as. A typical principal is of the form "primary/instance@REALM", but there is no exact format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#principal GoogleDataprocMetastoreService#principal}
  */
  readonly principal: string;
  /**
  * keytab block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#keytab GoogleDataprocMetastoreService#keytab}
  */
  readonly keytab: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;
}

export function googleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigToTerraform(struct?: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference | GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    krb5_config_gcs_uri: cdktf.stringToTerraform(struct!.krb5ConfigGcsUri),
    principal: cdktf.stringToTerraform(struct!.principal),
    keytab: googleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabToTerraform(struct!.keytab),
  }
}


export function googleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigToHclTerraform(struct?: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference | GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    krb5_config_gcs_uri: {
      value: cdktf.stringToHclTerraform(struct!.krb5ConfigGcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal: {
      value: cdktf.stringToHclTerraform(struct!.principal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keytab: {
      value: googleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabToHclTerraform(struct!.keytab),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._krb5ConfigGcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5ConfigGcsUri = this._krb5ConfigGcsUri;
    }
    if (this._principal !== undefined) {
      hasAnyValues = true;
      internalValueResult.principal = this._principal;
    }
    if (this._keytab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keytab = this._keytab?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._krb5ConfigGcsUri = undefined;
      this._principal = undefined;
      this._keytab.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._krb5ConfigGcsUri = value.krb5ConfigGcsUri;
      this._principal = value.principal;
      this._keytab.internalValue = value.keytab;
    }
  }

  // krb5_config_gcs_uri - computed: false, optional: false, required: true
  private _krb5ConfigGcsUri?: string; 
  public get krb5ConfigGcsUri() {
    return this.getStringAttribute('krb5_config_gcs_uri');
  }
  public set krb5ConfigGcsUri(value: string) {
    this._krb5ConfigGcsUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ConfigGcsUriInput() {
    return this._krb5ConfigGcsUri;
  }

  // principal - computed: false, optional: false, required: true
  private _principal?: string; 
  public get principal() {
    return this.getStringAttribute('principal');
  }
  public set principal(value: string) {
    this._principal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal;
  }

  // keytab - computed: false, optional: false, required: true
  private _keytab = new GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference(this, "keytab");
  public get keytab() {
    return this._keytab;
  }
  public putKeytab(value: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab) {
    this._keytab.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keytabInput() {
    return this._keytab.internalValue;
  }
}
export interface GoogleDataprocMetastoreServiceHiveMetastoreConfig {
  /**
  * A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml).
  * The mappings override system defaults (some keys cannot be overridden)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#config_overrides GoogleDataprocMetastoreService#config_overrides}
  */
  readonly configOverrides?: { [key: string]: string };
  /**
  * The protocol to use for the metastore service endpoint. If unspecified, defaults to 'THRIFT'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#endpoint_protocol GoogleDataprocMetastoreService#endpoint_protocol}
  */
  readonly endpointProtocol?: string;
  /**
  * The Hive metastore schema version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#version GoogleDataprocMetastoreService#version}
  */
  readonly version: string;
  /**
  * auxiliary_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#auxiliary_versions GoogleDataprocMetastoreService#auxiliary_versions}
  */
  readonly auxiliaryVersions?: GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[] | cdktf.IResolvable;
  /**
  * kerberos_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#kerberos_config GoogleDataprocMetastoreService#kerberos_config}
  */
  readonly kerberosConfig?: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;
}

export function googleDataprocMetastoreServiceHiveMetastoreConfigToTerraform(struct?: GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference | GoogleDataprocMetastoreServiceHiveMetastoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configOverrides),
    endpoint_protocol: cdktf.stringToTerraform(struct!.endpointProtocol),
    version: cdktf.stringToTerraform(struct!.version),
    auxiliary_versions: cdktf.listMapper(googleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsToTerraform, true)(struct!.auxiliaryVersions),
    kerberos_config: googleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigToTerraform(struct!.kerberosConfig),
  }
}


export function googleDataprocMetastoreServiceHiveMetastoreConfigToHclTerraform(struct?: GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference | GoogleDataprocMetastoreServiceHiveMetastoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    endpoint_protocol: {
      value: cdktf.stringToHclTerraform(struct!.endpointProtocol),
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
    auxiliary_versions: {
      value: cdktf.listMapperHcl(googleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsToHclTerraform, true)(struct!.auxiliaryVersions),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList",
    },
    kerberos_config: {
      value: googleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigToHclTerraform(struct!.kerberosConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceHiveMetastoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._endpointProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointProtocol = this._endpointProtocol;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._auxiliaryVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryVersions = this._auxiliaryVersions?.internalValue;
    }
    if (this._kerberosConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosConfig = this._kerberosConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceHiveMetastoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configOverrides = undefined;
      this._endpointProtocol = undefined;
      this._version = undefined;
      this._auxiliaryVersions.internalValue = undefined;
      this._kerberosConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configOverrides = value.configOverrides;
      this._endpointProtocol = value.endpointProtocol;
      this._version = value.version;
      this._auxiliaryVersions.internalValue = value.auxiliaryVersions;
      this._kerberosConfig.internalValue = value.kerberosConfig;
    }
  }

  // config_overrides - computed: true, optional: true, required: false
  private _configOverrides?: { [key: string]: string }; 
  public get configOverrides() {
    return this.getStringMapAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: string }) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // endpoint_protocol - computed: false, optional: true, required: false
  private _endpointProtocol?: string; 
  public get endpointProtocol() {
    return this.getStringAttribute('endpoint_protocol');
  }
  public set endpointProtocol(value: string) {
    this._endpointProtocol = value;
  }
  public resetEndpointProtocol() {
    this._endpointProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointProtocolInput() {
    return this._endpointProtocol;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // auxiliary_versions - computed: false, optional: true, required: false
  private _auxiliaryVersions = new GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList(this, "auxiliary_versions", true);
  public get auxiliaryVersions() {
    return this._auxiliaryVersions;
  }
  public putAuxiliaryVersions(value: GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[] | cdktf.IResolvable) {
    this._auxiliaryVersions.internalValue = value;
  }
  public resetAuxiliaryVersions() {
    this._auxiliaryVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryVersionsInput() {
    return this._auxiliaryVersions.internalValue;
  }

  // kerberos_config - computed: false, optional: true, required: false
  private _kerberosConfig = new GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference(this, "kerberos_config");
  public get kerberosConfig() {
    return this._kerberosConfig;
  }
  public putKerberosConfig(value: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig) {
    this._kerberosConfig.internalValue = value;
  }
  public resetKerberosConfig() {
    this._kerberosConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosConfigInput() {
    return this._kerberosConfig.internalValue;
  }
}
export interface GoogleDataprocMetastoreServiceMaintenanceWindow {
  /**
  * The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#day_of_week GoogleDataprocMetastoreService#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * The hour of day (0-23) when the window starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#hour_of_day GoogleDataprocMetastoreService#hour_of_day}
  */
  readonly hourOfDay: number;
}

export function googleDataprocMetastoreServiceMaintenanceWindowToTerraform(struct?: GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference | GoogleDataprocMetastoreServiceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
  }
}


export function googleDataprocMetastoreServiceMaintenanceWindowToHclTerraform(struct?: GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference | GoogleDataprocMetastoreServiceMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._hourOfDay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._hourOfDay = value.hourOfDay;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // hour_of_day - computed: false, optional: false, required: true
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }
}
export interface GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig {
  /**
  * Defines whether the metastore metadata should be synced to Data Catalog. The default value is to disable syncing metastore metadata to Data Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#enabled GoogleDataprocMetastoreService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigToTerraform(struct?: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference | GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigToHclTerraform(struct?: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference | GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig): any {
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

export class GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleDataprocMetastoreServiceMetadataIntegration {
  /**
  * data_catalog_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#data_catalog_config GoogleDataprocMetastoreService#data_catalog_config}
  */
  readonly dataCatalogConfig: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;
}

export function googleDataprocMetastoreServiceMetadataIntegrationToTerraform(struct?: GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference | GoogleDataprocMetastoreServiceMetadataIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_catalog_config: googleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigToTerraform(struct!.dataCatalogConfig),
  }
}


export function googleDataprocMetastoreServiceMetadataIntegrationToHclTerraform(struct?: GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference | GoogleDataprocMetastoreServiceMetadataIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_catalog_config: {
      value: googleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigToHclTerraform(struct!.dataCatalogConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceMetadataIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCatalogConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCatalogConfig = this._dataCatalogConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceMetadataIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCatalogConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCatalogConfig.internalValue = value.dataCatalogConfig;
    }
  }

  // data_catalog_config - computed: false, optional: false, required: true
  private _dataCatalogConfig = new GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference(this, "data_catalog_config");
  public get dataCatalogConfig() {
    return this._dataCatalogConfig;
  }
  public putDataCatalogConfig(value: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig) {
    this._dataCatalogConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogConfigInput() {
    return this._dataCatalogConfig.internalValue;
  }
}
export interface GoogleDataprocMetastoreServiceNetworkConfigConsumers {
  /**
  * The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint.
  * It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network.
  * There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:
  * 'projects/{projectNumber}/regions/{region_id}/subnetworks/{subnetwork_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#subnetwork GoogleDataprocMetastoreService#subnetwork}
  */
  readonly subnetwork: string;
}

export function googleDataprocMetastoreServiceNetworkConfigConsumersToTerraform(struct?: GoogleDataprocMetastoreServiceNetworkConfigConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function googleDataprocMetastoreServiceNetworkConfigConsumersToHclTerraform(struct?: GoogleDataprocMetastoreServiceNetworkConfigConsumers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataprocMetastoreServiceNetworkConfigConsumers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceNetworkConfigConsumers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetwork = value.subnetwork;
    }
  }

  // endpoint_uri - computed: true, optional: false, required: false
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
  }

  // subnetwork - computed: false, optional: false, required: true
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}

export class GoogleDataprocMetastoreServiceNetworkConfigConsumersList extends cdktf.ComplexList {
  public internalValue? : GoogleDataprocMetastoreServiceNetworkConfigConsumers[] | cdktf.IResolvable

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
  public get(index: number): GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference {
    return new GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataprocMetastoreServiceNetworkConfig {
  /**
  * Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#custom_routes_enabled GoogleDataprocMetastoreService#custom_routes_enabled}
  */
  readonly customRoutesEnabled?: boolean | cdktf.IResolvable;
  /**
  * consumers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#consumers GoogleDataprocMetastoreService#consumers}
  */
  readonly consumers: GoogleDataprocMetastoreServiceNetworkConfigConsumers[] | cdktf.IResolvable;
}

export function googleDataprocMetastoreServiceNetworkConfigToTerraform(struct?: GoogleDataprocMetastoreServiceNetworkConfigOutputReference | GoogleDataprocMetastoreServiceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_routes_enabled: cdktf.booleanToTerraform(struct!.customRoutesEnabled),
    consumers: cdktf.listMapper(googleDataprocMetastoreServiceNetworkConfigConsumersToTerraform, true)(struct!.consumers),
  }
}


export function googleDataprocMetastoreServiceNetworkConfigToHclTerraform(struct?: GoogleDataprocMetastoreServiceNetworkConfigOutputReference | GoogleDataprocMetastoreServiceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_routes_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.customRoutesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consumers: {
      value: cdktf.listMapperHcl(googleDataprocMetastoreServiceNetworkConfigConsumersToHclTerraform, true)(struct!.consumers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataprocMetastoreServiceNetworkConfigConsumersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRoutesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRoutesEnabled = this._customRoutesEnabled;
    }
    if (this._consumers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumers = this._consumers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRoutesEnabled = undefined;
      this._consumers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRoutesEnabled = value.customRoutesEnabled;
      this._consumers.internalValue = value.consumers;
    }
  }

  // custom_routes_enabled - computed: false, optional: true, required: false
  private _customRoutesEnabled?: boolean | cdktf.IResolvable; 
  public get customRoutesEnabled() {
    return this.getBooleanAttribute('custom_routes_enabled');
  }
  public set customRoutesEnabled(value: boolean | cdktf.IResolvable) {
    this._customRoutesEnabled = value;
  }
  public resetCustomRoutesEnabled() {
    this._customRoutesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRoutesEnabledInput() {
    return this._customRoutesEnabled;
  }

  // consumers - computed: false, optional: false, required: true
  private _consumers = new GoogleDataprocMetastoreServiceNetworkConfigConsumersList(this, "consumers", false);
  public get consumers() {
    return this._consumers;
  }
  public putConsumers(value: GoogleDataprocMetastoreServiceNetworkConfigConsumers[] | cdktf.IResolvable) {
    this._consumers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumersInput() {
    return this._consumers.internalValue;
  }
}
export interface GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig {
  /**
  * The maximum scaling factor that the service will autoscale to. The default value is 6.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#max_scaling_factor GoogleDataprocMetastoreService#max_scaling_factor}
  */
  readonly maxScalingFactor?: number;
  /**
  * The minimum scaling factor that the service will autoscale to. The default value is 0.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#min_scaling_factor GoogleDataprocMetastoreService#min_scaling_factor}
  */
  readonly minScalingFactor?: number;
}

export function googleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigToTerraform(struct?: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference | GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_scaling_factor: cdktf.numberToTerraform(struct!.maxScalingFactor),
    min_scaling_factor: cdktf.numberToTerraform(struct!.minScalingFactor),
  }
}


export function googleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigToHclTerraform(struct?: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference | GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_scaling_factor: {
      value: cdktf.numberToHclTerraform(struct!.maxScalingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_scaling_factor: {
      value: cdktf.numberToHclTerraform(struct!.minScalingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxScalingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScalingFactor = this._maxScalingFactor;
    }
    if (this._minScalingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.minScalingFactor = this._minScalingFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxScalingFactor = undefined;
      this._minScalingFactor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxScalingFactor = value.maxScalingFactor;
      this._minScalingFactor = value.minScalingFactor;
    }
  }

  // max_scaling_factor - computed: true, optional: true, required: false
  private _maxScalingFactor?: number; 
  public get maxScalingFactor() {
    return this.getNumberAttribute('max_scaling_factor');
  }
  public set maxScalingFactor(value: number) {
    this._maxScalingFactor = value;
  }
  public resetMaxScalingFactor() {
    this._maxScalingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScalingFactorInput() {
    return this._maxScalingFactor;
  }

  // min_scaling_factor - computed: true, optional: true, required: false
  private _minScalingFactor?: number; 
  public get minScalingFactor() {
    return this.getNumberAttribute('min_scaling_factor');
  }
  public set minScalingFactor(value: number) {
    this._minScalingFactor = value;
  }
  public resetMinScalingFactor() {
    this._minScalingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minScalingFactorInput() {
    return this._minScalingFactor;
  }
}
export interface GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig {
  /**
  * Defines whether autoscaling is enabled. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#autoscaling_enabled GoogleDataprocMetastoreService#autoscaling_enabled}
  */
  readonly autoscalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * limit_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#limit_config GoogleDataprocMetastoreService#limit_config}
  */
  readonly limitConfig?: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig;
}

export function googleDataprocMetastoreServiceScalingConfigAutoscalingConfigToTerraform(struct?: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference | GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_enabled: cdktf.booleanToTerraform(struct!.autoscalingEnabled),
    limit_config: googleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigToTerraform(struct!.limitConfig),
  }
}


export function googleDataprocMetastoreServiceScalingConfigAutoscalingConfigToHclTerraform(struct?: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference | GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.autoscalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_config: {
      value: googleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigToHclTerraform(struct!.limitConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingEnabled = this._autoscalingEnabled;
    }
    if (this._limitConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitConfig = this._limitConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoscalingEnabled = undefined;
      this._limitConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoscalingEnabled = value.autoscalingEnabled;
      this._limitConfig.internalValue = value.limitConfig;
    }
  }

  // autoscaling_enabled - computed: false, optional: true, required: false
  private _autoscalingEnabled?: boolean | cdktf.IResolvable; 
  public get autoscalingEnabled() {
    return this.getBooleanAttribute('autoscaling_enabled');
  }
  public set autoscalingEnabled(value: boolean | cdktf.IResolvable) {
    this._autoscalingEnabled = value;
  }
  public resetAutoscalingEnabled() {
    this._autoscalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingEnabledInput() {
    return this._autoscalingEnabled;
  }

  // limit_config - computed: false, optional: true, required: false
  private _limitConfig = new GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfigOutputReference(this, "limit_config");
  public get limitConfig() {
    return this._limitConfig;
  }
  public putLimitConfig(value: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigLimitConfig) {
    this._limitConfig.internalValue = value;
  }
  public resetLimitConfig() {
    this._limitConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitConfigInput() {
    return this._limitConfig.internalValue;
  }
}
export interface GoogleDataprocMetastoreServiceScalingConfig {
  /**
  * Metastore instance sizes. Possible values: ["EXTRA_SMALL", "SMALL", "MEDIUM", "LARGE", "EXTRA_LARGE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#instance_size GoogleDataprocMetastoreService#instance_size}
  */
  readonly instanceSize?: string;
  /**
  * Scaling factor, in increments of 0.1 for values less than 1.0, and increments of 1.0 for values greater than 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#scaling_factor GoogleDataprocMetastoreService#scaling_factor}
  */
  readonly scalingFactor?: number;
  /**
  * autoscaling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#autoscaling_config GoogleDataprocMetastoreService#autoscaling_config}
  */
  readonly autoscalingConfig?: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig;
}

export function googleDataprocMetastoreServiceScalingConfigToTerraform(struct?: GoogleDataprocMetastoreServiceScalingConfigOutputReference | GoogleDataprocMetastoreServiceScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_size: cdktf.stringToTerraform(struct!.instanceSize),
    scaling_factor: cdktf.numberToTerraform(struct!.scalingFactor),
    autoscaling_config: googleDataprocMetastoreServiceScalingConfigAutoscalingConfigToTerraform(struct!.autoscalingConfig),
  }
}


export function googleDataprocMetastoreServiceScalingConfigToHclTerraform(struct?: GoogleDataprocMetastoreServiceScalingConfigOutputReference | GoogleDataprocMetastoreServiceScalingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_size: {
      value: cdktf.stringToHclTerraform(struct!.instanceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scaling_factor: {
      value: cdktf.numberToHclTerraform(struct!.scalingFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscaling_config: {
      value: googleDataprocMetastoreServiceScalingConfigAutoscalingConfigToHclTerraform(struct!.autoscalingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceScalingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceScalingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceSize = this._instanceSize;
    }
    if (this._scalingFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingFactor = this._scalingFactor;
    }
    if (this._autoscalingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingConfig = this._autoscalingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceScalingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instanceSize = undefined;
      this._scalingFactor = undefined;
      this._autoscalingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instanceSize = value.instanceSize;
      this._scalingFactor = value.scalingFactor;
      this._autoscalingConfig.internalValue = value.autoscalingConfig;
    }
  }

  // instance_size - computed: false, optional: true, required: false
  private _instanceSize?: string; 
  public get instanceSize() {
    return this.getStringAttribute('instance_size');
  }
  public set instanceSize(value: string) {
    this._instanceSize = value;
  }
  public resetInstanceSize() {
    this._instanceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceSizeInput() {
    return this._instanceSize;
  }

  // scaling_factor - computed: false, optional: true, required: false
  private _scalingFactor?: number; 
  public get scalingFactor() {
    return this.getNumberAttribute('scaling_factor');
  }
  public set scalingFactor(value: number) {
    this._scalingFactor = value;
  }
  public resetScalingFactor() {
    this._scalingFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingFactorInput() {
    return this._scalingFactor;
  }

  // autoscaling_config - computed: false, optional: true, required: false
  private _autoscalingConfig = new GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfigOutputReference(this, "autoscaling_config");
  public get autoscalingConfig() {
    return this._autoscalingConfig;
  }
  public putAutoscalingConfig(value: GoogleDataprocMetastoreServiceScalingConfigAutoscalingConfig) {
    this._autoscalingConfig.internalValue = value;
  }
  public resetAutoscalingConfig() {
    this._autoscalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingConfigInput() {
    return this._autoscalingConfig.internalValue;
  }
}
export interface GoogleDataprocMetastoreServiceScheduledBackup {
  /**
  * A Cloud Storage URI of a folder, in the format gs://<bucket_name>/<path_inside_bucket>. A sub-folder <backup_folder> containing backup files will be stored below it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#backup_location GoogleDataprocMetastoreService#backup_location}
  */
  readonly backupLocation: string;
  /**
  * The scheduled interval in Cron format, see https://en.wikipedia.org/wiki/Cron The default is empty: scheduled backup is not enabled. Must be specified to enable scheduled backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#cron_schedule GoogleDataprocMetastoreService#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Defines whether the scheduled backup is enabled. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#enabled GoogleDataprocMetastoreService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones), e.g. America/Los_Angeles or Africa/Abidjan. If left unspecified, the default is UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#time_zone GoogleDataprocMetastoreService#time_zone}
  */
  readonly timeZone?: string;
}

export function googleDataprocMetastoreServiceScheduledBackupToTerraform(struct?: GoogleDataprocMetastoreServiceScheduledBackupOutputReference | GoogleDataprocMetastoreServiceScheduledBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_location: cdktf.stringToTerraform(struct!.backupLocation),
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function googleDataprocMetastoreServiceScheduledBackupToHclTerraform(struct?: GoogleDataprocMetastoreServiceScheduledBackupOutputReference | GoogleDataprocMetastoreServiceScheduledBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_location: {
      value: cdktf.stringToHclTerraform(struct!.backupLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceScheduledBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceScheduledBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupLocation = this._backupLocation;
    }
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceScheduledBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupLocation = undefined;
      this._cronSchedule = undefined;
      this._enabled = undefined;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupLocation = value.backupLocation;
      this._cronSchedule = value.cronSchedule;
      this._enabled = value.enabled;
      this._timeZone = value.timeZone;
    }
  }

  // backup_location - computed: false, optional: false, required: true
  private _backupLocation?: string; 
  public get backupLocation() {
    return this.getStringAttribute('backup_location');
  }
  public set backupLocation(value: string) {
    this._backupLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLocationInput() {
    return this._backupLocation;
  }

  // cron_schedule - computed: false, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // enabled - computed: true, optional: true, required: false
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

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface GoogleDataprocMetastoreServiceTelemetryConfig {
  /**
  * The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#log_format GoogleDataprocMetastoreService#log_format}
  */
  readonly logFormat?: string;
}

export function googleDataprocMetastoreServiceTelemetryConfigToTerraform(struct?: GoogleDataprocMetastoreServiceTelemetryConfigOutputReference | GoogleDataprocMetastoreServiceTelemetryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_format: cdktf.stringToTerraform(struct!.logFormat),
  }
}


export function googleDataprocMetastoreServiceTelemetryConfigToHclTerraform(struct?: GoogleDataprocMetastoreServiceTelemetryConfigOutputReference | GoogleDataprocMetastoreServiceTelemetryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocMetastoreServiceTelemetryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceTelemetryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocMetastoreServiceTelemetryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logFormat = value.logFormat;
    }
  }

  // log_format - computed: false, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }
}
export interface GoogleDataprocMetastoreServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#create GoogleDataprocMetastoreService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#delete GoogleDataprocMetastoreService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#update GoogleDataprocMetastoreService#update}
  */
  readonly update?: string;
}

export function googleDataprocMetastoreServiceTimeoutsToTerraform(struct?: GoogleDataprocMetastoreServiceTimeouts | cdktf.IResolvable): any {
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


export function googleDataprocMetastoreServiceTimeoutsToHclTerraform(struct?: GoogleDataprocMetastoreServiceTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataprocMetastoreServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataprocMetastoreServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataprocMetastoreServiceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service google_dataproc_metastore_service}
*/
export class GoogleDataprocMetastoreService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_metastore_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataprocMetastoreService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataprocMetastoreService to import
  * @param importFromId The id of the existing GoogleDataprocMetastoreService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataprocMetastoreService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataproc_metastore_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_metastore_service google_dataproc_metastore_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataprocMetastoreServiceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataprocMetastoreServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_metastore_service',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.23.0',
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
    this._databaseType = config.databaseType;
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._network = config.network;
    this._port = config.port;
    this._project = config.project;
    this._releaseChannel = config.releaseChannel;
    this._serviceId = config.serviceId;
    this._tier = config.tier;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._hiveMetastoreConfig.internalValue = config.hiveMetastoreConfig;
    this._maintenanceWindow.internalValue = config.maintenanceWindow;
    this._metadataIntegration.internalValue = config.metadataIntegration;
    this._networkConfig.internalValue = config.networkConfig;
    this._scalingConfig.internalValue = config.scalingConfig;
    this._scheduledBackup.internalValue = config.scheduledBackup;
    this._telemetryConfig.internalValue = config.telemetryConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_gcs_uri - computed: true, optional: false, required: false
  public get artifactGcsUri() {
    return this.getStringAttribute('artifact_gcs_uri');
  }

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // endpoint_uri - computed: true, optional: false, required: false
  public get endpointUri() {
    return this.getStringAttribute('endpoint_uri');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // release_channel - computed: false, optional: true, required: false
  private _releaseChannel?: string; 
  public get releaseChannel() {
    return this.getStringAttribute('release_channel');
  }
  public set releaseChannel(value: string) {
    this._releaseChannel = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new GoogleDataprocMetastoreServiceEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: GoogleDataprocMetastoreServiceEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // hive_metastore_config - computed: false, optional: true, required: false
  private _hiveMetastoreConfig = new GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference(this, "hive_metastore_config");
  public get hiveMetastoreConfig() {
    return this._hiveMetastoreConfig;
  }
  public putHiveMetastoreConfig(value: GoogleDataprocMetastoreServiceHiveMetastoreConfig) {
    this._hiveMetastoreConfig.internalValue = value;
  }
  public resetHiveMetastoreConfig() {
    this._hiveMetastoreConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveMetastoreConfigInput() {
    return this._hiveMetastoreConfig.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: GoogleDataprocMetastoreServiceMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // metadata_integration - computed: false, optional: true, required: false
  private _metadataIntegration = new GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference(this, "metadata_integration");
  public get metadataIntegration() {
    return this._metadataIntegration;
  }
  public putMetadataIntegration(value: GoogleDataprocMetastoreServiceMetadataIntegration) {
    this._metadataIntegration.internalValue = value;
  }
  public resetMetadataIntegration() {
    this._metadataIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataIntegrationInput() {
    return this._metadataIntegration.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new GoogleDataprocMetastoreServiceNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleDataprocMetastoreServiceNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // scaling_config - computed: false, optional: true, required: false
  private _scalingConfig = new GoogleDataprocMetastoreServiceScalingConfigOutputReference(this, "scaling_config");
  public get scalingConfig() {
    return this._scalingConfig;
  }
  public putScalingConfig(value: GoogleDataprocMetastoreServiceScalingConfig) {
    this._scalingConfig.internalValue = value;
  }
  public resetScalingConfig() {
    this._scalingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigInput() {
    return this._scalingConfig.internalValue;
  }

  // scheduled_backup - computed: false, optional: true, required: false
  private _scheduledBackup = new GoogleDataprocMetastoreServiceScheduledBackupOutputReference(this, "scheduled_backup");
  public get scheduledBackup() {
    return this._scheduledBackup;
  }
  public putScheduledBackup(value: GoogleDataprocMetastoreServiceScheduledBackup) {
    this._scheduledBackup.internalValue = value;
  }
  public resetScheduledBackup() {
    this._scheduledBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledBackupInput() {
    return this._scheduledBackup.internalValue;
  }

  // telemetry_config - computed: false, optional: true, required: false
  private _telemetryConfig = new GoogleDataprocMetastoreServiceTelemetryConfigOutputReference(this, "telemetry_config");
  public get telemetryConfig() {
    return this._telemetryConfig;
  }
  public putTelemetryConfig(value: GoogleDataprocMetastoreServiceTelemetryConfig) {
    this._telemetryConfig.internalValue = value;
  }
  public resetTelemetryConfig() {
    this._telemetryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryConfigInput() {
    return this._telemetryConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataprocMetastoreServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataprocMetastoreServiceTimeouts) {
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
      database_type: cdktf.stringToTerraform(this._databaseType),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      network: cdktf.stringToTerraform(this._network),
      port: cdktf.numberToTerraform(this._port),
      project: cdktf.stringToTerraform(this._project),
      release_channel: cdktf.stringToTerraform(this._releaseChannel),
      service_id: cdktf.stringToTerraform(this._serviceId),
      tier: cdktf.stringToTerraform(this._tier),
      encryption_config: googleDataprocMetastoreServiceEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      hive_metastore_config: googleDataprocMetastoreServiceHiveMetastoreConfigToTerraform(this._hiveMetastoreConfig.internalValue),
      maintenance_window: googleDataprocMetastoreServiceMaintenanceWindowToTerraform(this._maintenanceWindow.internalValue),
      metadata_integration: googleDataprocMetastoreServiceMetadataIntegrationToTerraform(this._metadataIntegration.internalValue),
      network_config: googleDataprocMetastoreServiceNetworkConfigToTerraform(this._networkConfig.internalValue),
      scaling_config: googleDataprocMetastoreServiceScalingConfigToTerraform(this._scalingConfig.internalValue),
      scheduled_backup: googleDataprocMetastoreServiceScheduledBackupToTerraform(this._scheduledBackup.internalValue),
      telemetry_config: googleDataprocMetastoreServiceTelemetryConfigToTerraform(this._telemetryConfig.internalValue),
      timeouts: googleDataprocMetastoreServiceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_channel: {
        value: cdktf.stringToHclTerraform(this._releaseChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_config: {
        value: googleDataprocMetastoreServiceEncryptionConfigToHclTerraform(this._encryptionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocMetastoreServiceEncryptionConfigList",
      },
      hive_metastore_config: {
        value: googleDataprocMetastoreServiceHiveMetastoreConfigToHclTerraform(this._hiveMetastoreConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocMetastoreServiceHiveMetastoreConfigList",
      },
      maintenance_window: {
        value: googleDataprocMetastoreServiceMaintenanceWindowToHclTerraform(this._maintenanceWindow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocMetastoreServiceMaintenanceWindowList",
      },
      metadata_integration: {
        value: googleDataprocMetastoreServiceMetadataIntegrationToHclTerraform(this._metadataIntegration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocMetastoreServiceMetadataIntegrationList",
      },
      network_config: {
        value: googleDataprocMetastoreServiceNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocMetastoreServiceNetworkConfigList",
      },
      scaling_config: {
        value: googleDataprocMetastoreServiceScalingConfigToHclTerraform(this._scalingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocMetastoreServiceScalingConfigList",
      },
      scheduled_backup: {
        value: googleDataprocMetastoreServiceScheduledBackupToHclTerraform(this._scheduledBackup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocMetastoreServiceScheduledBackupList",
      },
      telemetry_config: {
        value: googleDataprocMetastoreServiceTelemetryConfigToHclTerraform(this._telemetryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocMetastoreServiceTelemetryConfigList",
      },
      timeouts: {
        value: googleDataprocMetastoreServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataprocMetastoreServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
