# `google_looker_instance`

Refer to the Terraform Registory for docs: [`google_looker_instance`](https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance).

# `googleLookerInstance` Submodule <a name="`googleLookerInstance` Submodule" id="@cdktf/provider-google-beta.googleLookerInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLookerInstance <a name="GoogleLookerInstance" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance google_looker_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstance;

GoogleLookerInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .adminSettings(GoogleLookerInstanceAdminSettings)
//  .consumerNetwork(java.lang.String)
//  .denyMaintenancePeriod(GoogleLookerInstanceDenyMaintenancePeriod)
//  .encryptionConfig(GoogleLookerInstanceEncryptionConfig)
//  .id(java.lang.String)
//  .maintenanceWindow(GoogleLookerInstanceMaintenanceWindow)
//  .oauthConfig(GoogleLookerInstanceOauthConfig)
//  .platformEdition(java.lang.String)
//  .privateIpEnabled(java.lang.Boolean)
//  .privateIpEnabled(IResolvable)
//  .project(java.lang.String)
//  .publicIpEnabled(java.lang.Boolean)
//  .publicIpEnabled(IResolvable)
//  .region(java.lang.String)
//  .reservedRange(java.lang.String)
//  .timeouts(GoogleLookerInstanceTimeouts)
//  .userMetadata(GoogleLookerInstanceUserMetadata)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.adminSettings">adminSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.platformEdition">platformEdition</a></code> | <code>java.lang.String</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.privateIpEnabled">privateIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.publicIpEnabled">publicIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.reservedRange">reservedRange</a></code> | <code>java.lang.String</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.userMetadata">userMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#name GoogleLookerInstance#name}

---

##### `adminSettings`<sup>Optional</sup> <a name="adminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.adminSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#admin_settings GoogleLookerInstance#admin_settings}

---

##### `consumerNetwork`<sup>Optional</sup> <a name="consumerNetwork" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.consumerNetwork"></a>

- *Type:* java.lang.String

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#consumer_network GoogleLookerInstance#consumer_network}

---

##### `denyMaintenancePeriod`<sup>Optional</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.denyMaintenancePeriod"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#deny_maintenance_period GoogleLookerInstance#deny_maintenance_period}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.encryptionConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#encryption_config GoogleLookerInstance#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#maintenance_window GoogleLookerInstance#maintenance_window}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.oauthConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#oauth_config GoogleLookerInstance#oauth_config}

---

##### `platformEdition`<sup>Optional</sup> <a name="platformEdition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.platformEdition"></a>

- *Type:* java.lang.String

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:

* LOOKER_CORE_TRIAL: trial instance
* LOOKER_CORE_STANDARD: pay as you go standard instance
* LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
* LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
* LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
* LOOKER_MODELER: standalone modeling service Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_MODELER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#platform_edition GoogleLookerInstance#platform_edition}

---

##### `privateIpEnabled`<sup>Optional</sup> <a name="privateIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.privateIpEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#private_ip_enabled GoogleLookerInstance#private_ip_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}.

---

##### `publicIpEnabled`<sup>Optional</sup> <a name="publicIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.publicIpEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#public_ip_enabled GoogleLookerInstance#public_ip_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#region GoogleLookerInstance#region}

---

##### `reservedRange`<sup>Optional</sup> <a name="reservedRange" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.reservedRange"></a>

- *Type:* java.lang.String

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#reserved_range GoogleLookerInstance#reserved_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#timeouts GoogleLookerInstance#timeouts}

---

##### `userMetadata`<sup>Optional</sup> <a name="userMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.Initializer.parameter.userMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#user_metadata GoogleLookerInstance#user_metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings">putAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod">putDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata">putUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetAdminSettings">resetAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetConsumerNetwork">resetConsumerNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDenyMaintenancePeriod">resetDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPlatformEdition">resetPlatformEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPrivateIpEnabled">resetPrivateIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPublicIpEnabled">resetPublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetReservedRange">resetReservedRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetUserMetadata">resetUserMetadata</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAdminSettings` <a name="putAdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings"></a>

```java
public void putAdminSettings(GoogleLookerInstanceAdminSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putAdminSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---

##### `putDenyMaintenancePeriod` <a name="putDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod"></a>

```java
public void putDenyMaintenancePeriod(GoogleLookerInstanceDenyMaintenancePeriod value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putDenyMaintenancePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig"></a>

```java
public void putEncryptionConfig(GoogleLookerInstanceEncryptionConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(GoogleLookerInstanceMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig"></a>

```java
public void putOauthConfig(GoogleLookerInstanceOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts"></a>

```java
public void putTimeouts(GoogleLookerInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

---

##### `putUserMetadata` <a name="putUserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata"></a>

```java
public void putUserMetadata(GoogleLookerInstanceUserMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.putUserMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---

##### `resetAdminSettings` <a name="resetAdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetAdminSettings"></a>

```java
public void resetAdminSettings()
```

##### `resetConsumerNetwork` <a name="resetConsumerNetwork" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetConsumerNetwork"></a>

```java
public void resetConsumerNetwork()
```

##### `resetDenyMaintenancePeriod` <a name="resetDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetDenyMaintenancePeriod"></a>

```java
public void resetDenyMaintenancePeriod()
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetEncryptionConfig"></a>

```java
public void resetEncryptionConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetOauthConfig"></a>

```java
public void resetOauthConfig()
```

##### `resetPlatformEdition` <a name="resetPlatformEdition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPlatformEdition"></a>

```java
public void resetPlatformEdition()
```

##### `resetPrivateIpEnabled` <a name="resetPrivateIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPrivateIpEnabled"></a>

```java
public void resetPrivateIpEnabled()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetProject"></a>

```java
public void resetProject()
```

##### `resetPublicIpEnabled` <a name="resetPublicIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetPublicIpEnabled"></a>

```java
public void resetPublicIpEnabled()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetReservedRange` <a name="resetReservedRange" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetReservedRange"></a>

```java
public void resetReservedRange()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUserMetadata` <a name="resetUserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.resetUserMetadata"></a>

```java
public void resetUserMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstance;

GoogleLookerInstance.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstance;

GoogleLookerInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstance;

GoogleLookerInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettings">adminSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference">GoogleLookerInstanceAdminSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference">GoogleLookerInstanceDenyMaintenancePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.egressPublicIp">egressPublicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference">GoogleLookerInstanceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPrivateIp">ingressPrivateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPublicIp">ingressPublicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerUri">lookerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerVersion">lookerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference">GoogleLookerInstanceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference">GoogleLookerInstanceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference">GoogleLookerInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadata">userMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference">GoogleLookerInstanceUserMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettingsInput">adminSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetworkInput">consumerNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriodInput">denyMaintenancePeriodInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEditionInput">platformEditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabledInput">privateIpEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabledInput">publicIpEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRangeInput">reservedRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadataInput">userMetadataInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEdition">platformEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabled">privateIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabled">publicIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRange">reservedRange</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `adminSettings`<sup>Required</sup> <a name="adminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettings"></a>

```java
public GoogleLookerInstanceAdminSettingsOutputReference getAdminSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference">GoogleLookerInstanceAdminSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `denyMaintenancePeriod`<sup>Required</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriod"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodOutputReference getDenyMaintenancePeriod();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference">GoogleLookerInstanceDenyMaintenancePeriodOutputReference</a>

---

##### `egressPublicIp`<sup>Required</sup> <a name="egressPublicIp" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.egressPublicIp"></a>

```java
public java.lang.String getEgressPublicIp();
```

- *Type:* java.lang.String

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfig"></a>

```java
public GoogleLookerInstanceEncryptionConfigOutputReference getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference">GoogleLookerInstanceEncryptionConfigOutputReference</a>

---

##### `ingressPrivateIp`<sup>Required</sup> <a name="ingressPrivateIp" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPrivateIp"></a>

```java
public java.lang.String getIngressPrivateIp();
```

- *Type:* java.lang.String

---

##### `ingressPublicIp`<sup>Required</sup> <a name="ingressPublicIp" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.ingressPublicIp"></a>

```java
public java.lang.String getIngressPublicIp();
```

- *Type:* java.lang.String

---

##### `lookerUri`<sup>Required</sup> <a name="lookerUri" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerUri"></a>

```java
public java.lang.String getLookerUri();
```

- *Type:* java.lang.String

---

##### `lookerVersion`<sup>Required</sup> <a name="lookerVersion" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.lookerVersion"></a>

```java
public java.lang.String getLookerVersion();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindow"></a>

```java
public GoogleLookerInstanceMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference">GoogleLookerInstanceMaintenanceWindowOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfig"></a>

```java
public GoogleLookerInstanceOauthConfigOutputReference getOauthConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference">GoogleLookerInstanceOauthConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeouts"></a>

```java
public GoogleLookerInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference">GoogleLookerInstanceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `userMetadata`<sup>Required</sup> <a name="userMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadata"></a>

```java
public GoogleLookerInstanceUserMetadataOutputReference getUserMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference">GoogleLookerInstanceUserMetadataOutputReference</a>

---

##### `adminSettingsInput`<sup>Optional</sup> <a name="adminSettingsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.adminSettingsInput"></a>

```java
public GoogleLookerInstanceAdminSettings getAdminSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---

##### `consumerNetworkInput`<sup>Optional</sup> <a name="consumerNetworkInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetworkInput"></a>

```java
public java.lang.String getConsumerNetworkInput();
```

- *Type:* java.lang.String

---

##### `denyMaintenancePeriodInput`<sup>Optional</sup> <a name="denyMaintenancePeriodInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.denyMaintenancePeriodInput"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriod getDenyMaintenancePeriodInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.encryptionConfigInput"></a>

```java
public GoogleLookerInstanceEncryptionConfig getEncryptionConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.maintenanceWindowInput"></a>

```java
public GoogleLookerInstanceMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.oauthConfigInput"></a>

```java
public GoogleLookerInstanceOauthConfig getOauthConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---

##### `platformEditionInput`<sup>Optional</sup> <a name="platformEditionInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEditionInput"></a>

```java
public java.lang.String getPlatformEditionInput();
```

- *Type:* java.lang.String

---

##### `privateIpEnabledInput`<sup>Optional</sup> <a name="privateIpEnabledInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabledInput"></a>

```java
public java.lang.Object getPrivateIpEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `publicIpEnabledInput`<sup>Optional</sup> <a name="publicIpEnabledInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabledInput"></a>

```java
public java.lang.Object getPublicIpEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `reservedRangeInput`<sup>Optional</sup> <a name="reservedRangeInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRangeInput"></a>

```java
public java.lang.String getReservedRangeInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

---

##### `userMetadataInput`<sup>Optional</sup> <a name="userMetadataInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.userMetadataInput"></a>

```java
public GoogleLookerInstanceUserMetadata getUserMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.consumerNetwork"></a>

```java
public java.lang.String getConsumerNetwork();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platformEdition`<sup>Required</sup> <a name="platformEdition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.platformEdition"></a>

```java
public java.lang.String getPlatformEdition();
```

- *Type:* java.lang.String

---

##### `privateIpEnabled`<sup>Required</sup> <a name="privateIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.privateIpEnabled"></a>

```java
public java.lang.Object getPrivateIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `publicIpEnabled`<sup>Required</sup> <a name="publicIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.publicIpEnabled"></a>

```java
public java.lang.Object getPublicIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `reservedRange`<sup>Required</sup> <a name="reservedRange" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.reservedRange"></a>

```java
public java.lang.String getReservedRange();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLookerInstanceAdminSettings <a name="GoogleLookerInstanceAdminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceAdminSettings;

GoogleLookerInstanceAdminSettings.builder()
//  .allowedEmailDomains(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | Email domain allowlist for the instance. |

---

##### `allowedEmailDomains`<sup>Optional</sup> <a name="allowedEmailDomains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings.property.allowedEmailDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomains();
```

- *Type:* java.util.List<java.lang.String>

Email domain allowlist for the instance.

Define the email domains to which your users can deliver Looker (Google Cloud core) content.
Updating this list will restart the instance. Updating the allowed email domains from terraform
means the value provided will be considered as the entire list and not an amendment to the
existing list of allowed email domains.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#allowed_email_domains GoogleLookerInstance#allowed_email_domains}

---

### GoogleLookerInstanceConfig <a name="GoogleLookerInstanceConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceConfig;

GoogleLookerInstanceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .adminSettings(GoogleLookerInstanceAdminSettings)
//  .consumerNetwork(java.lang.String)
//  .denyMaintenancePeriod(GoogleLookerInstanceDenyMaintenancePeriod)
//  .encryptionConfig(GoogleLookerInstanceEncryptionConfig)
//  .id(java.lang.String)
//  .maintenanceWindow(GoogleLookerInstanceMaintenanceWindow)
//  .oauthConfig(GoogleLookerInstanceOauthConfig)
//  .platformEdition(java.lang.String)
//  .privateIpEnabled(java.lang.Boolean)
//  .privateIpEnabled(IResolvable)
//  .project(java.lang.String)
//  .publicIpEnabled(java.lang.Boolean)
//  .publicIpEnabled(IResolvable)
//  .region(java.lang.String)
//  .reservedRange(java.lang.String)
//  .timeouts(GoogleLookerInstanceTimeouts)
//  .userMetadata(GoogleLookerInstanceUserMetadata)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The ID of the instance or a fully qualified identifier for the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.adminSettings">adminSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | admin_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.consumerNetwork">consumerNetwork</a></code> | <code>java.lang.String</code> | Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.denyMaintenancePeriod">denyMaintenancePeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | deny_maintenance_period block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.platformEdition">platformEdition</a></code> | <code>java.lang.String</code> | Platform editions for a Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.privateIpEnabled">privateIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether private IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.publicIpEnabled">publicIpEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether public IP is enabled on the Looker instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.region">region</a></code> | <code>java.lang.String</code> | The name of the Looker region of the instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.reservedRange">reservedRange</a></code> | <code>java.lang.String</code> | Name of a reserved IP address range within the consumer network, to be used for private service access connection. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.userMetadata">userMetadata</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | user_metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The ID of the instance or a fully qualified identifier for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#name GoogleLookerInstance#name}

---

##### `adminSettings`<sup>Optional</sup> <a name="adminSettings" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.adminSettings"></a>

```java
public GoogleLookerInstanceAdminSettings getAdminSettings();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

admin_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#admin_settings GoogleLookerInstance#admin_settings}

---

##### `consumerNetwork`<sup>Optional</sup> <a name="consumerNetwork" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.consumerNetwork"></a>

```java
public java.lang.String getConsumerNetwork();
```

- *Type:* java.lang.String

Network name in the consumer project in the format of: projects/{project}/global/networks/{network} Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#consumer_network GoogleLookerInstance#consumer_network}

---

##### `denyMaintenancePeriod`<sup>Optional</sup> <a name="denyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.denyMaintenancePeriod"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriod getDenyMaintenancePeriod();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

deny_maintenance_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#deny_maintenance_period GoogleLookerInstance#deny_maintenance_period}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.encryptionConfig"></a>

```java
public GoogleLookerInstanceEncryptionConfig getEncryptionConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#encryption_config GoogleLookerInstance#encryption_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#id GoogleLookerInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.maintenanceWindow"></a>

```java
public GoogleLookerInstanceMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#maintenance_window GoogleLookerInstance#maintenance_window}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.oauthConfig"></a>

```java
public GoogleLookerInstanceOauthConfig getOauthConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#oauth_config GoogleLookerInstance#oauth_config}

---

##### `platformEdition`<sup>Optional</sup> <a name="platformEdition" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.platformEdition"></a>

```java
public java.lang.String getPlatformEdition();
```

- *Type:* java.lang.String

Platform editions for a Looker instance.

Each edition maps to a set of instance features, like its size. Must be one of these values:

* LOOKER_CORE_TRIAL: trial instance
* LOOKER_CORE_STANDARD: pay as you go standard instance
* LOOKER_CORE_STANDARD_ANNUAL: subscription standard instance
* LOOKER_CORE_ENTERPRISE_ANNUAL: subscription enterprise instance
* LOOKER_CORE_EMBED_ANNUAL: subscription embed instance
* LOOKER_MODELER: standalone modeling service Default value: "LOOKER_CORE_TRIAL" Possible values: ["LOOKER_CORE_TRIAL", "LOOKER_CORE_STANDARD", "LOOKER_CORE_STANDARD_ANNUAL", "LOOKER_CORE_ENTERPRISE_ANNUAL", "LOOKER_CORE_EMBED_ANNUAL", "LOOKER_MODELER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#platform_edition GoogleLookerInstance#platform_edition}

---

##### `privateIpEnabled`<sup>Optional</sup> <a name="privateIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.privateIpEnabled"></a>

```java
public java.lang.Object getPrivateIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether private IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#private_ip_enabled GoogleLookerInstance#private_ip_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#project GoogleLookerInstance#project}.

---

##### `publicIpEnabled`<sup>Optional</sup> <a name="publicIpEnabled" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.publicIpEnabled"></a>

```java
public java.lang.Object getPublicIpEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether public IP is enabled on the Looker instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#public_ip_enabled GoogleLookerInstance#public_ip_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The name of the Looker region of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#region GoogleLookerInstance#region}

---

##### `reservedRange`<sup>Optional</sup> <a name="reservedRange" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.reservedRange"></a>

```java
public java.lang.String getReservedRange();
```

- *Type:* java.lang.String

Name of a reserved IP address range within the consumer network, to be used for private service access connection.

User may or may not specify this in a request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#reserved_range GoogleLookerInstance#reserved_range}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.timeouts"></a>

```java
public GoogleLookerInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#timeouts GoogleLookerInstance#timeouts}

---

##### `userMetadata`<sup>Optional</sup> <a name="userMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceConfig.property.userMetadata"></a>

```java
public GoogleLookerInstanceUserMetadata getUserMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

user_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#user_metadata GoogleLookerInstance#user_metadata}

---

### GoogleLookerInstanceDenyMaintenancePeriod <a name="GoogleLookerInstanceDenyMaintenancePeriod" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceDenyMaintenancePeriod;

GoogleLookerInstanceDenyMaintenancePeriod.builder()
    .endDate(GoogleLookerInstanceDenyMaintenancePeriodEndDate)
    .startDate(GoogleLookerInstanceDenyMaintenancePeriodStartDate)
    .time(GoogleLookerInstanceDenyMaintenancePeriodTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.time">time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | time block. |

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.endDate"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodEndDate getEndDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#end_date GoogleLookerInstance#end_date}

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.startDate"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodStartDate getStartDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#start_date GoogleLookerInstance#start_date}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod.property.time"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodTime getTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#time GoogleLookerInstance#time}

---

### GoogleLookerInstanceDenyMaintenancePeriodEndDate <a name="GoogleLookerInstanceDenyMaintenancePeriodEndDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceDenyMaintenancePeriodEndDate;

GoogleLookerInstanceDenyMaintenancePeriodEndDate.builder()
//  .day(java.lang.Number)
//  .month(java.lang.Number)
//  .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#day GoogleLookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#month GoogleLookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#year GoogleLookerInstance#year}

---

### GoogleLookerInstanceDenyMaintenancePeriodStartDate <a name="GoogleLookerInstanceDenyMaintenancePeriodStartDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceDenyMaintenancePeriodStartDate;

GoogleLookerInstanceDenyMaintenancePeriodStartDate.builder()
//  .day(java.lang.Number)
//  .month(java.lang.Number)
//  .year(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.day">day</a></code> | <code>java.lang.Number</code> | Day of a month. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.month">month</a></code> | <code>java.lang.Number</code> | Month of a year. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.year">year</a></code> | <code>java.lang.Number</code> | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |

---

##### `day`<sup>Optional</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

Day of a month.

Must be from 1 to 31 and valid for the year and month, or 0
to specify a year by itself or a year and month where the day isn't significant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#day GoogleLookerInstance#day}

---

##### `month`<sup>Optional</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

Month of a year.

Must be from 1 to 12, or 0 to specify a year without a
month and day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#month GoogleLookerInstance#month}

---

##### `year`<sup>Optional</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#year GoogleLookerInstance#year}

---

### GoogleLookerInstanceDenyMaintenancePeriodTime <a name="GoogleLookerInstanceDenyMaintenancePeriodTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceDenyMaintenancePeriodTime;

GoogleLookerInstanceDenyMaintenancePeriodTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#hours GoogleLookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#minutes GoogleLookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#nanos GoogleLookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#seconds GoogleLookerInstance#seconds}

---

### GoogleLookerInstanceEncryptionConfig <a name="GoogleLookerInstanceEncryptionConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceEncryptionConfig;

GoogleLookerInstanceEncryptionConfig.builder()
//  .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | Name of the customer managed encryption key (CMEK) in KMS. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

Name of the customer managed encryption key (CMEK) in KMS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#kms_key_name GoogleLookerInstance#kms_key_name}

---

### GoogleLookerInstanceMaintenanceWindow <a name="GoogleLookerInstanceMaintenanceWindow" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceMaintenanceWindow;

GoogleLookerInstanceMaintenanceWindow.builder()
    .dayOfWeek(java.lang.String)
    .startTime(GoogleLookerInstanceMaintenanceWindowStartTime)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Required. Day of the week for this MaintenanceWindow (in UTC). |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | start_time block. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Required. Day of the week for this MaintenanceWindow (in UTC).

* MONDAY: Monday
* TUESDAY: Tuesday
* WEDNESDAY: Wednesday
* THURSDAY: Thursday
* FRIDAY: Friday
* SATURDAY: Saturday
* SUNDAY: Sunday Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#day_of_week GoogleLookerInstance#day_of_week}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow.property.startTime"></a>

```java
public GoogleLookerInstanceMaintenanceWindowStartTime getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#start_time GoogleLookerInstance#start_time}

---

### GoogleLookerInstanceMaintenanceWindowStartTime <a name="GoogleLookerInstanceMaintenanceWindowStartTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceMaintenanceWindowStartTime;

GoogleLookerInstanceMaintenanceWindowStartTime.builder()
//  .hours(java.lang.Number)
//  .minutes(java.lang.Number)
//  .nanos(java.lang.Number)
//  .seconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.hours">hours</a></code> | <code>java.lang.Number</code> | Hours of day in 24 hour format. Should be from 0 to 23. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | Minutes of hour of day. Must be from 0 to 59. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | Seconds of minutes of the time. Must normally be from 0 to 59. |

---

##### `hours`<sup>Optional</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

Hours of day in 24 hour format. Should be from 0 to 23.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#hours GoogleLookerInstance#hours}

---

##### `minutes`<sup>Optional</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

Minutes of hour of day. Must be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#minutes GoogleLookerInstance#minutes}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#nanos GoogleLookerInstance#nanos}

---

##### `seconds`<sup>Optional</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

Seconds of minutes of the time. Must normally be from 0 to 59.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#seconds GoogleLookerInstance#seconds}

---

### GoogleLookerInstanceOauthConfig <a name="GoogleLookerInstanceOauthConfig" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceOauthConfig;

GoogleLookerInstanceOauthConfig.builder()
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID for the Oauth config. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | The client secret for the Oauth config. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#client_id GoogleLookerInstance#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

The client secret for the Oauth config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#client_secret GoogleLookerInstance#client_secret}

---

### GoogleLookerInstanceTimeouts <a name="GoogleLookerInstanceTimeouts" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceTimeouts;

GoogleLookerInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#create GoogleLookerInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#delete GoogleLookerInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#update GoogleLookerInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#create GoogleLookerInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#delete GoogleLookerInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#update GoogleLookerInstance#update}.

---

### GoogleLookerInstanceUserMetadata <a name="GoogleLookerInstanceUserMetadata" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceUserMetadata;

GoogleLookerInstanceUserMetadata.builder()
//  .additionalDeveloperUserCount(java.lang.Number)
//  .additionalStandardUserCount(java.lang.Number)
//  .additionalViewerUserCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalDeveloperUserCount">additionalDeveloperUserCount</a></code> | <code>java.lang.Number</code> | Number of additional Developer Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalStandardUserCount">additionalStandardUserCount</a></code> | <code>java.lang.Number</code> | Number of additional Standard Users to allocate to the Looker Instance. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalViewerUserCount">additionalViewerUserCount</a></code> | <code>java.lang.Number</code> | Number of additional Viewer Users to allocate to the Looker Instance. |

---

##### `additionalDeveloperUserCount`<sup>Optional</sup> <a name="additionalDeveloperUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalDeveloperUserCount"></a>

```java
public java.lang.Number getAdditionalDeveloperUserCount();
```

- *Type:* java.lang.Number

Number of additional Developer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#additional_developer_user_count GoogleLookerInstance#additional_developer_user_count}

---

##### `additionalStandardUserCount`<sup>Optional</sup> <a name="additionalStandardUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalStandardUserCount"></a>

```java
public java.lang.Number getAdditionalStandardUserCount();
```

- *Type:* java.lang.Number

Number of additional Standard Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#additional_standard_user_count GoogleLookerInstance#additional_standard_user_count}

---

##### `additionalViewerUserCount`<sup>Optional</sup> <a name="additionalViewerUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata.property.additionalViewerUserCount"></a>

```java
public java.lang.Number getAdditionalViewerUserCount();
```

- *Type:* java.lang.Number

Number of additional Viewer Users to allocate to the Looker Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.76.0/docs/resources/google_looker_instance#additional_viewer_user_count GoogleLookerInstance#additional_viewer_user_count}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLookerInstanceAdminSettingsOutputReference <a name="GoogleLookerInstanceAdminSettingsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceAdminSettingsOutputReference;

new GoogleLookerInstanceAdminSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains">resetAllowedEmailDomains</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedEmailDomains` <a name="resetAllowedEmailDomains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.resetAllowedEmailDomains"></a>

```java
public void resetAllowedEmailDomains()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput">allowedEmailDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains">allowedEmailDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedEmailDomainsInput`<sup>Optional</sup> <a name="allowedEmailDomainsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomainsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedEmailDomains`<sup>Required</sup> <a name="allowedEmailDomains" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.allowedEmailDomains"></a>

```java
public java.util.List<java.lang.String> getAllowedEmailDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettingsOutputReference.property.internalValue"></a>

```java
public GoogleLookerInstanceAdminSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceAdminSettings">GoogleLookerInstanceAdminSettings</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference;

new GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetMonth` <a name="resetMonth" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetYear` <a name="resetYear" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.resetYear"></a>

```java
public void resetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference.property.internalValue"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodEndDate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference;

new GoogleLookerInstanceDenyMaintenancePeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate">putEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate">putStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime">putTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndDate` <a name="putEndDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate"></a>

```java
public void putEndDate(GoogleLookerInstanceDenyMaintenancePeriodEndDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `putStartDate` <a name="putStartDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate"></a>

```java
public void putStartDate(GoogleLookerInstanceDenyMaintenancePeriodStartDate value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `putTime` <a name="putTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime"></a>

```java
public void putTime(GoogleLookerInstanceDenyMaintenancePeriodTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.putTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDate">endDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDate">startDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.time">time</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference">GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput">endDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput">startDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput">timeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endDate`<sup>Required</sup> <a name="endDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDate"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference getEndDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodEndDateOutputReference</a>

---

##### `startDate`<sup>Required</sup> <a name="startDate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDate"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference getStartDate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference">GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference</a>

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.time"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference getTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference">GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference</a>

---

##### `endDateInput`<sup>Optional</sup> <a name="endDateInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.endDateInput"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodEndDate getEndDateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodEndDate">GoogleLookerInstanceDenyMaintenancePeriodEndDate</a>

---

##### `startDateInput`<sup>Optional</sup> <a name="startDateInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.startDateInput"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodStartDate getStartDateInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.timeInput"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodTime getTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodOutputReference.property.internalValue"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriod getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriod">GoogleLookerInstanceDenyMaintenancePeriod</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference;

new GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay">resetDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear">resetYear</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDay` <a name="resetDay" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetDay"></a>

```java
public void resetDay()
```

##### `resetMonth` <a name="resetMonth" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetYear` <a name="resetYear" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.resetYear"></a>

```java
public void resetYear()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput">dayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput">yearInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day">day</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month">month</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year">year</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.dayInput"></a>

```java
public java.lang.Number getDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.monthInput"></a>

```java
public java.lang.Number getMonthInput();
```

- *Type:* java.lang.Number

---

##### `yearInput`<sup>Optional</sup> <a name="yearInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.yearInput"></a>

```java
public java.lang.Number getYearInput();
```

- *Type:* java.lang.Number

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.day"></a>

```java
public java.lang.Number getDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.month"></a>

```java
public java.lang.Number getMonth();
```

- *Type:* java.lang.Number

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.year"></a>

```java
public java.lang.Number getYear();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDateOutputReference.property.internalValue"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodStartDate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodStartDate">GoogleLookerInstanceDenyMaintenancePeriodStartDate</a>

---


### GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference <a name="GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference;

new GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTimeOutputReference.property.internalValue"></a>

```java
public GoogleLookerInstanceDenyMaintenancePeriodTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceDenyMaintenancePeriodTime">GoogleLookerInstanceDenyMaintenancePeriodTime</a>

---


### GoogleLookerInstanceEncryptionConfigOutputReference <a name="GoogleLookerInstanceEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceEncryptionConfigOutputReference;

new GoogleLookerInstanceEncryptionConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion">kmsKeyNameVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyState">kmsKeyState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameVersion`<sup>Required</sup> <a name="kmsKeyNameVersion" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameVersion"></a>

```java
public java.lang.String getKmsKeyNameVersion();
```

- *Type:* java.lang.String

---

##### `kmsKeyState`<sup>Required</sup> <a name="kmsKeyState" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyState"></a>

```java
public java.lang.String getKmsKeyState();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfigOutputReference.property.internalValue"></a>

```java
public GoogleLookerInstanceEncryptionConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceEncryptionConfig">GoogleLookerInstanceEncryptionConfig</a>

---


### GoogleLookerInstanceMaintenanceWindowOutputReference <a name="GoogleLookerInstanceMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceMaintenanceWindowOutputReference;

new GoogleLookerInstanceMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStartTime` <a name="putStartTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime"></a>

```java
public void putStartTime(GoogleLookerInstanceMaintenanceWindowStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference">GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTime"></a>

```java
public GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference getStartTime();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference">GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.startTimeInput"></a>

```java
public GoogleLookerInstanceMaintenanceWindowStartTime getStartTimeInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public GoogleLookerInstanceMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindow">GoogleLookerInstanceMaintenanceWindow</a>

---


### GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference <a name="GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference;

new GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours">resetHours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes">resetMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos">resetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds">resetSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHours` <a name="resetHours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetHours"></a>

```java
public void resetHours()
```

##### `resetMinutes` <a name="resetMinutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetMinutes"></a>

```java
public void resetMinutes()
```

##### `resetNanos` <a name="resetNanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetNanos"></a>

```java
public void resetNanos()
```

##### `resetSeconds` <a name="resetSeconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.resetSeconds"></a>

```java
public void resetSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput">nanosInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput">secondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours">hours</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes">minutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hoursInput"></a>

```java
public java.lang.Number getHoursInput();
```

- *Type:* java.lang.Number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutesInput"></a>

```java
public java.lang.Number getMinutesInput();
```

- *Type:* java.lang.Number

---

##### `nanosInput`<sup>Optional</sup> <a name="nanosInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanosInput"></a>

```java
public java.lang.Number getNanosInput();
```

- *Type:* java.lang.Number

---

##### `secondsInput`<sup>Optional</sup> <a name="secondsInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.secondsInput"></a>

```java
public java.lang.Number getSecondsInput();
```

- *Type:* java.lang.Number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```java
public java.lang.Number getHours();
```

- *Type:* java.lang.Number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```java
public java.lang.Number getMinutes();
```

- *Type:* java.lang.Number

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```java
public GoogleLookerInstanceMaintenanceWindowStartTime getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceMaintenanceWindowStartTime">GoogleLookerInstanceMaintenanceWindowStartTime</a>

---


### GoogleLookerInstanceOauthConfigOutputReference <a name="GoogleLookerInstanceOauthConfigOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceOauthConfigOutputReference;

new GoogleLookerInstanceOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfigOutputReference.property.internalValue"></a>

```java
public GoogleLookerInstanceOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceOauthConfig">GoogleLookerInstanceOauthConfig</a>

---


### GoogleLookerInstanceTimeoutsOutputReference <a name="GoogleLookerInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceTimeoutsOutputReference;

new GoogleLookerInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceTimeouts">GoogleLookerInstanceTimeouts</a>

---


### GoogleLookerInstanceUserMetadataOutputReference <a name="GoogleLookerInstanceUserMetadataOutputReference" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_looker_instance.GoogleLookerInstanceUserMetadataOutputReference;

new GoogleLookerInstanceUserMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount">resetAdditionalDeveloperUserCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount">resetAdditionalStandardUserCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount">resetAdditionalViewerUserCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalDeveloperUserCount` <a name="resetAdditionalDeveloperUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalDeveloperUserCount"></a>

```java
public void resetAdditionalDeveloperUserCount()
```

##### `resetAdditionalStandardUserCount` <a name="resetAdditionalStandardUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalStandardUserCount"></a>

```java
public void resetAdditionalStandardUserCount()
```

##### `resetAdditionalViewerUserCount` <a name="resetAdditionalViewerUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.resetAdditionalViewerUserCount"></a>

```java
public void resetAdditionalViewerUserCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput">additionalDeveloperUserCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput">additionalStandardUserCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput">additionalViewerUserCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount">additionalDeveloperUserCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount">additionalStandardUserCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount">additionalViewerUserCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalDeveloperUserCountInput`<sup>Optional</sup> <a name="additionalDeveloperUserCountInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCountInput"></a>

```java
public java.lang.Number getAdditionalDeveloperUserCountInput();
```

- *Type:* java.lang.Number

---

##### `additionalStandardUserCountInput`<sup>Optional</sup> <a name="additionalStandardUserCountInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCountInput"></a>

```java
public java.lang.Number getAdditionalStandardUserCountInput();
```

- *Type:* java.lang.Number

---

##### `additionalViewerUserCountInput`<sup>Optional</sup> <a name="additionalViewerUserCountInput" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCountInput"></a>

```java
public java.lang.Number getAdditionalViewerUserCountInput();
```

- *Type:* java.lang.Number

---

##### `additionalDeveloperUserCount`<sup>Required</sup> <a name="additionalDeveloperUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalDeveloperUserCount"></a>

```java
public java.lang.Number getAdditionalDeveloperUserCount();
```

- *Type:* java.lang.Number

---

##### `additionalStandardUserCount`<sup>Required</sup> <a name="additionalStandardUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalStandardUserCount"></a>

```java
public java.lang.Number getAdditionalStandardUserCount();
```

- *Type:* java.lang.Number

---

##### `additionalViewerUserCount`<sup>Required</sup> <a name="additionalViewerUserCount" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.additionalViewerUserCount"></a>

```java
public java.lang.Number getAdditionalViewerUserCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadataOutputReference.property.internalValue"></a>

```java
public GoogleLookerInstanceUserMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLookerInstance.GoogleLookerInstanceUserMetadata">GoogleLookerInstanceUserMetadata</a>

---



