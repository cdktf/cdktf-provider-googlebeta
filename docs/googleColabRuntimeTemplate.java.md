# `googleColabRuntimeTemplate` Submodule <a name="`googleColabRuntimeTemplate` Submodule" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabRuntimeTemplate <a name="GoogleColabRuntimeTemplate" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template google_colab_runtime_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplate;

GoogleColabRuntimeTemplate.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .dataPersistentDiskSpec(GoogleColabRuntimeTemplateDataPersistentDiskSpec)
//  .description(java.lang.String)
//  .encryptionSpec(GoogleColabRuntimeTemplateEncryptionSpec)
//  .eucConfig(GoogleColabRuntimeTemplateEucConfig)
//  .id(java.lang.String)
//  .idleShutdownConfig(GoogleColabRuntimeTemplateIdleShutdownConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .machineSpec(GoogleColabRuntimeTemplateMachineSpec)
//  .name(java.lang.String)
//  .networkSpec(GoogleColabRuntimeTemplateNetworkSpec)
//  .networkTags(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .shieldedVmConfig(GoogleColabRuntimeTemplateShieldedVmConfig)
//  .softwareConfig(GoogleColabRuntimeTemplateSoftwareConfig)
//  .timeouts(GoogleColabRuntimeTemplateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.dataPersistentDiskSpec">dataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.eucConfig">eucConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.idleShutdownConfig">idleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.networkSpec">networkSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.shieldedVmConfig">shieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#display_name GoogleColabRuntimeTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#location GoogleColabRuntimeTemplate#location}

---

##### `dataPersistentDiskSpec`<sup>Optional</sup> <a name="dataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.dataPersistentDiskSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#data_persistent_disk_spec GoogleColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#description GoogleColabRuntimeTemplate#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#encryption_spec GoogleColabRuntimeTemplate#encryption_spec}

---

##### `eucConfig`<sup>Optional</sup> <a name="eucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.eucConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#euc_config GoogleColabRuntimeTemplate#euc_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleShutdownConfig`<sup>Optional</sup> <a name="idleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.idleShutdownConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#idle_shutdown_config GoogleColabRuntimeTemplate#idle_shutdown_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#labels GoogleColabRuntimeTemplate#labels}

---

##### `machineSpec`<sup>Optional</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.machineSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#machine_spec GoogleColabRuntimeTemplate#machine_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#name GoogleColabRuntimeTemplate#name}

---

##### `networkSpec`<sup>Optional</sup> <a name="networkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.networkSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#network_spec GoogleColabRuntimeTemplate#network_spec}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.networkTags"></a>

- *Type:* java.util.List<java.lang.String>

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#network_tags GoogleColabRuntimeTemplate#network_tags}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}.

---

##### `shieldedVmConfig`<sup>Optional</sup> <a name="shieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.shieldedVmConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#shielded_vm_config GoogleColabRuntimeTemplate#shielded_vm_config}

---

##### `softwareConfig`<sup>Optional</sup> <a name="softwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.softwareConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#software_config GoogleColabRuntimeTemplate#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#timeouts GoogleColabRuntimeTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec">putDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec">putEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig">putEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig">putIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec">putMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec">putNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig">putShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig">putSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDataPersistentDiskSpec">resetDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEncryptionSpec">resetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEucConfig">resetEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetIdleShutdownConfig">resetIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetMachineSpec">resetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkSpec">resetNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkTags">resetNetworkTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetShieldedVmConfig">resetShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetSoftwareConfig">resetSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataPersistentDiskSpec` <a name="putDataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec"></a>

```java
public void putDataPersistentDiskSpec(GoogleColabRuntimeTemplateDataPersistentDiskSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `putEncryptionSpec` <a name="putEncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec"></a>

```java
public void putEncryptionSpec(GoogleColabRuntimeTemplateEncryptionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---

##### `putEucConfig` <a name="putEucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig"></a>

```java
public void putEucConfig(GoogleColabRuntimeTemplateEucConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---

##### `putIdleShutdownConfig` <a name="putIdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig"></a>

```java
public void putIdleShutdownConfig(GoogleColabRuntimeTemplateIdleShutdownConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `putMachineSpec` <a name="putMachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec"></a>

```java
public void putMachineSpec(GoogleColabRuntimeTemplateMachineSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---

##### `putNetworkSpec` <a name="putNetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec"></a>

```java
public void putNetworkSpec(GoogleColabRuntimeTemplateNetworkSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---

##### `putShieldedVmConfig` <a name="putShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig"></a>

```java
public void putShieldedVmConfig(GoogleColabRuntimeTemplateShieldedVmConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---

##### `putSoftwareConfig` <a name="putSoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig"></a>

```java
public void putSoftwareConfig(GoogleColabRuntimeTemplateSoftwareConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts"></a>

```java
public void putTimeouts(GoogleColabRuntimeTemplateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

---

##### `resetDataPersistentDiskSpec` <a name="resetDataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDataPersistentDiskSpec"></a>

```java
public void resetDataPersistentDiskSpec()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionSpec` <a name="resetEncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEncryptionSpec"></a>

```java
public void resetEncryptionSpec()
```

##### `resetEucConfig` <a name="resetEucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEucConfig"></a>

```java
public void resetEucConfig()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetId"></a>

```java
public void resetId()
```

##### `resetIdleShutdownConfig` <a name="resetIdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetIdleShutdownConfig"></a>

```java
public void resetIdleShutdownConfig()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMachineSpec` <a name="resetMachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetMachineSpec"></a>

```java
public void resetMachineSpec()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetName"></a>

```java
public void resetName()
```

##### `resetNetworkSpec` <a name="resetNetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkSpec"></a>

```java
public void resetNetworkSpec()
```

##### `resetNetworkTags` <a name="resetNetworkTags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkTags"></a>

```java
public void resetNetworkTags()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetProject"></a>

```java
public void resetProject()
```

##### `resetShieldedVmConfig` <a name="resetShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetShieldedVmConfig"></a>

```java
public void resetShieldedVmConfig()
```

##### `resetSoftwareConfig` <a name="resetSoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetSoftwareConfig"></a>

```java
public void resetSoftwareConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleColabRuntimeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplate;

GoogleColabRuntimeTemplate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplate;

GoogleColabRuntimeTemplate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplate;

GoogleColabRuntimeTemplate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplate;

GoogleColabRuntimeTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleColabRuntimeTemplate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleColabRuntimeTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleColabRuntimeTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleColabRuntimeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleColabRuntimeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpec">dataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference">GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference">GoogleColabRuntimeTemplateEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfig">eucConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference">GoogleColabRuntimeTemplateEucConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfig">idleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference">GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference">GoogleColabRuntimeTemplateMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpec">networkSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference">GoogleColabRuntimeTemplateNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfig">shieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference">GoogleColabRuntimeTemplateShieldedVmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference">GoogleColabRuntimeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpecInput">dataPersistentDiskSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpecInput">encryptionSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfigInput">eucConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfigInput">idleShutdownConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpecInput">machineSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpecInput">networkSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTagsInput">networkTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfigInput">shieldedVmConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfigInput">softwareConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataPersistentDiskSpec`<sup>Required</sup> <a name="dataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpec"></a>

```java
public GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference getDataPersistentDiskSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference">GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `encryptionSpec`<sup>Required</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpec"></a>

```java
public GoogleColabRuntimeTemplateEncryptionSpecOutputReference getEncryptionSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference">GoogleColabRuntimeTemplateEncryptionSpecOutputReference</a>

---

##### `eucConfig`<sup>Required</sup> <a name="eucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfig"></a>

```java
public GoogleColabRuntimeTemplateEucConfigOutputReference getEucConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference">GoogleColabRuntimeTemplateEucConfigOutputReference</a>

---

##### `idleShutdownConfig`<sup>Required</sup> <a name="idleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfig"></a>

```java
public GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference getIdleShutdownConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference">GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference</a>

---

##### `machineSpec`<sup>Required</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpec"></a>

```java
public GoogleColabRuntimeTemplateMachineSpecOutputReference getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference">GoogleColabRuntimeTemplateMachineSpecOutputReference</a>

---

##### `networkSpec`<sup>Required</sup> <a name="networkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpec"></a>

```java
public GoogleColabRuntimeTemplateNetworkSpecOutputReference getNetworkSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference">GoogleColabRuntimeTemplateNetworkSpecOutputReference</a>

---

##### `shieldedVmConfig`<sup>Required</sup> <a name="shieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfig"></a>

```java
public GoogleColabRuntimeTemplateShieldedVmConfigOutputReference getShieldedVmConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference">GoogleColabRuntimeTemplateShieldedVmConfigOutputReference</a>

---

##### `softwareConfig`<sup>Required</sup> <a name="softwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfig"></a>

```java
public GoogleColabRuntimeTemplateSoftwareConfigOutputReference getSoftwareConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeouts"></a>

```java
public GoogleColabRuntimeTemplateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference">GoogleColabRuntimeTemplateTimeoutsOutputReference</a>

---

##### `dataPersistentDiskSpecInput`<sup>Optional</sup> <a name="dataPersistentDiskSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpecInput"></a>

```java
public GoogleColabRuntimeTemplateDataPersistentDiskSpec getDataPersistentDiskSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `encryptionSpecInput`<sup>Optional</sup> <a name="encryptionSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpecInput"></a>

```java
public GoogleColabRuntimeTemplateEncryptionSpec getEncryptionSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---

##### `eucConfigInput`<sup>Optional</sup> <a name="eucConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfigInput"></a>

```java
public GoogleColabRuntimeTemplateEucConfig getEucConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleShutdownConfigInput`<sup>Optional</sup> <a name="idleShutdownConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfigInput"></a>

```java
public GoogleColabRuntimeTemplateIdleShutdownConfig getIdleShutdownConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `machineSpecInput`<sup>Optional</sup> <a name="machineSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpecInput"></a>

```java
public GoogleColabRuntimeTemplateMachineSpec getMachineSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkSpecInput`<sup>Optional</sup> <a name="networkSpecInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpecInput"></a>

```java
public GoogleColabRuntimeTemplateNetworkSpec getNetworkSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---

##### `networkTagsInput`<sup>Optional</sup> <a name="networkTagsInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTagsInput"></a>

```java
public java.util.List<java.lang.String> getNetworkTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `shieldedVmConfigInput`<sup>Optional</sup> <a name="shieldedVmConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfigInput"></a>

```java
public GoogleColabRuntimeTemplateShieldedVmConfig getShieldedVmConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---

##### `softwareConfigInput`<sup>Optional</sup> <a name="softwareConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfigInput"></a>

```java
public GoogleColabRuntimeTemplateSoftwareConfig getSoftwareConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkTags`<sup>Required</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabRuntimeTemplateConfig <a name="GoogleColabRuntimeTemplateConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateConfig;

GoogleColabRuntimeTemplateConfig.builder()
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
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .dataPersistentDiskSpec(GoogleColabRuntimeTemplateDataPersistentDiskSpec)
//  .description(java.lang.String)
//  .encryptionSpec(GoogleColabRuntimeTemplateEncryptionSpec)
//  .eucConfig(GoogleColabRuntimeTemplateEucConfig)
//  .id(java.lang.String)
//  .idleShutdownConfig(GoogleColabRuntimeTemplateIdleShutdownConfig)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .machineSpec(GoogleColabRuntimeTemplateMachineSpec)
//  .name(java.lang.String)
//  .networkSpec(GoogleColabRuntimeTemplateNetworkSpec)
//  .networkTags(java.util.List<java.lang.String>)
//  .project(java.lang.String)
//  .shieldedVmConfig(GoogleColabRuntimeTemplateShieldedVmConfig)
//  .softwareConfig(GoogleColabRuntimeTemplateSoftwareConfig)
//  .timeouts(GoogleColabRuntimeTemplateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dataPersistentDiskSpec">dataPersistentDiskSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.encryptionSpec">encryptionSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.eucConfig">eucConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.idleShutdownConfig">idleShutdownConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.machineSpec">machineSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkSpec">networkSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkTags">networkTags</a></code> | <code>java.util.List<java.lang.String></code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.shieldedVmConfig">shieldedVmConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.softwareConfig">softwareConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#display_name GoogleColabRuntimeTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#location GoogleColabRuntimeTemplate#location}

---

##### `dataPersistentDiskSpec`<sup>Optional</sup> <a name="dataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dataPersistentDiskSpec"></a>

```java
public GoogleColabRuntimeTemplateDataPersistentDiskSpec getDataPersistentDiskSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#data_persistent_disk_spec GoogleColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#description GoogleColabRuntimeTemplate#description}

---

##### `encryptionSpec`<sup>Optional</sup> <a name="encryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.encryptionSpec"></a>

```java
public GoogleColabRuntimeTemplateEncryptionSpec getEncryptionSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#encryption_spec GoogleColabRuntimeTemplate#encryption_spec}

---

##### `eucConfig`<sup>Optional</sup> <a name="eucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.eucConfig"></a>

```java
public GoogleColabRuntimeTemplateEucConfig getEucConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#euc_config GoogleColabRuntimeTemplate#euc_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleShutdownConfig`<sup>Optional</sup> <a name="idleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.idleShutdownConfig"></a>

```java
public GoogleColabRuntimeTemplateIdleShutdownConfig getIdleShutdownConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#idle_shutdown_config GoogleColabRuntimeTemplate#idle_shutdown_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#labels GoogleColabRuntimeTemplate#labels}

---

##### `machineSpec`<sup>Optional</sup> <a name="machineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.machineSpec"></a>

```java
public GoogleColabRuntimeTemplateMachineSpec getMachineSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#machine_spec GoogleColabRuntimeTemplate#machine_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#name GoogleColabRuntimeTemplate#name}

---

##### `networkSpec`<sup>Optional</sup> <a name="networkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkSpec"></a>

```java
public GoogleColabRuntimeTemplateNetworkSpec getNetworkSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#network_spec GoogleColabRuntimeTemplate#network_spec}

---

##### `networkTags`<sup>Optional</sup> <a name="networkTags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkTags"></a>

```java
public java.util.List<java.lang.String> getNetworkTags();
```

- *Type:* java.util.List<java.lang.String>

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#network_tags GoogleColabRuntimeTemplate#network_tags}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}.

---

##### `shieldedVmConfig`<sup>Optional</sup> <a name="shieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.shieldedVmConfig"></a>

```java
public GoogleColabRuntimeTemplateShieldedVmConfig getShieldedVmConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#shielded_vm_config GoogleColabRuntimeTemplate#shielded_vm_config}

---

##### `softwareConfig`<sup>Optional</sup> <a name="softwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.softwareConfig"></a>

```java
public GoogleColabRuntimeTemplateSoftwareConfig getSoftwareConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#software_config GoogleColabRuntimeTemplate#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.timeouts"></a>

```java
public GoogleColabRuntimeTemplateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#timeouts GoogleColabRuntimeTemplate#timeouts}

---

### GoogleColabRuntimeTemplateDataPersistentDiskSpec <a name="GoogleColabRuntimeTemplateDataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateDataPersistentDiskSpec;

GoogleColabRuntimeTemplateDataPersistentDiskSpec.builder()
//  .diskSizeGb(java.lang.String)
//  .diskType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskType">diskType</a></code> | <code>java.lang.String</code> | The type of the persistent disk. |

---

##### `diskSizeGb`<sup>Optional</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#disk_size_gb GoogleColabRuntimeTemplate#disk_size_gb}

---

##### `diskType`<sup>Optional</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#disk_type GoogleColabRuntimeTemplate#disk_type}

---

### GoogleColabRuntimeTemplateEncryptionSpec <a name="GoogleColabRuntimeTemplateEncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateEncryptionSpec;

GoogleColabRuntimeTemplateEncryptionSpec.builder()
//  .kmsKeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime. |

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#kms_key_name GoogleColabRuntimeTemplate#kms_key_name}

---

### GoogleColabRuntimeTemplateEucConfig <a name="GoogleColabRuntimeTemplateEucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateEucConfig;

GoogleColabRuntimeTemplateEucConfig.builder()
//  .eucDisabled(java.lang.Boolean)
//  .eucDisabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.property.eucDisabled">eucDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Disable end user credential access for the runtime. |

---

##### `eucDisabled`<sup>Optional</sup> <a name="eucDisabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.property.eucDisabled"></a>

```java
public java.lang.Object getEucDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Disable end user credential access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#euc_disabled GoogleColabRuntimeTemplate#euc_disabled}

---

### GoogleColabRuntimeTemplateIdleShutdownConfig <a name="GoogleColabRuntimeTemplateIdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateIdleShutdownConfig;

GoogleColabRuntimeTemplateIdleShutdownConfig.builder()
//  .idleTimeout(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.String</code> | The duration after which the runtime is automatically shut down. |

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout"></a>

```java
public java.lang.String getIdleTimeout();
```

- *Type:* java.lang.String

The duration after which the runtime is automatically shut down.

An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#idle_timeout GoogleColabRuntimeTemplate#idle_timeout}

---

### GoogleColabRuntimeTemplateMachineSpec <a name="GoogleColabRuntimeTemplateMachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateMachineSpec;

GoogleColabRuntimeTemplateMachineSpec.builder()
//  .acceleratorCount(java.lang.Number)
//  .acceleratorType(java.lang.String)
//  .machineType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.machineType">machineType</a></code> | <code>java.lang.String</code> | The Compute Engine machine type selected for the runtime. |

---

##### `acceleratorCount`<sup>Optional</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#accelerator_count GoogleColabRuntimeTemplate#accelerator_count}

---

##### `acceleratorType`<sup>Optional</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#accelerator_type GoogleColabRuntimeTemplate#accelerator_type}

---

##### `machineType`<sup>Optional</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#machine_type GoogleColabRuntimeTemplate#machine_type}

---

### GoogleColabRuntimeTemplateNetworkSpec <a name="GoogleColabRuntimeTemplateNetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateNetworkSpec;

GoogleColabRuntimeTemplateNetworkSpec.builder()
//  .enableInternetAccess(java.lang.Boolean)
//  .enableInternetAccess(IResolvable)
//  .network(java.lang.String)
//  .subnetwork(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.enableInternetAccess">enableInternetAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The name of the subnetwork that this runtime is in. |

---

##### `enableInternetAccess`<sup>Optional</sup> <a name="enableInternetAccess" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.enableInternetAccess"></a>

```java
public java.lang.Object getEnableInternetAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#enable_internet_access GoogleColabRuntimeTemplate#enable_internet_access}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#network GoogleColabRuntimeTemplate#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#subnetwork GoogleColabRuntimeTemplate#subnetwork}

---

### GoogleColabRuntimeTemplateShieldedVmConfig <a name="GoogleColabRuntimeTemplateShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateShieldedVmConfig;

GoogleColabRuntimeTemplateShieldedVmConfig.builder()
//  .enableSecureBoot(java.lang.Boolean)
//  .enableSecureBoot(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables secure boot for the runtime. |

---

##### `enableSecureBoot`<sup>Optional</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables secure boot for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#enable_secure_boot GoogleColabRuntimeTemplate#enable_secure_boot}

---

### GoogleColabRuntimeTemplateSoftwareConfig <a name="GoogleColabRuntimeTemplateSoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateSoftwareConfig;

GoogleColabRuntimeTemplateSoftwareConfig.builder()
//  .env(IResolvable)
//  .env(java.util.List<GoogleColabRuntimeTemplateSoftwareConfigEnv>)
//  .postStartupScriptConfig(GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.env">env</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>></code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig">postStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | post_startup_script_config block. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.env"></a>

```java
public java.lang.Object getEnv();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>>

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#env GoogleColabRuntimeTemplate#env}

---

##### `postStartupScriptConfig`<sup>Optional</sup> <a name="postStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig"></a>

```java
public GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig getPostStartupScriptConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

post_startup_script_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#post_startup_script_config GoogleColabRuntimeTemplate#post_startup_script_config}

---

### GoogleColabRuntimeTemplateSoftwareConfigEnv <a name="GoogleColabRuntimeTemplateSoftwareConfigEnv" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateSoftwareConfigEnv;

GoogleColabRuntimeTemplateSoftwareConfigEnv.builder()
//  .name(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.name">name</a></code> | <code>java.lang.String</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.value">value</a></code> | <code>java.lang.String</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#name GoogleColabRuntimeTemplate#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#value GoogleColabRuntimeTemplate#value}

---

### GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig <a name="GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig;

GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.builder()
//  .postStartupScript(java.lang.String)
//  .postStartupScriptBehavior(java.lang.String)
//  .postStartupScriptUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript">postStartupScript</a></code> | <code>java.lang.String</code> | Post startup script to run after runtime is started. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior">postStartupScriptBehavior</a></code> | <code>java.lang.String</code> | Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl">postStartupScriptUrl</a></code> | <code>java.lang.String</code> | Post startup script url to download. Example: https://bucket/script.sh. |

---

##### `postStartupScript`<sup>Optional</sup> <a name="postStartupScript" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript"></a>

```java
public java.lang.String getPostStartupScript();
```

- *Type:* java.lang.String

Post startup script to run after runtime is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#post_startup_script GoogleColabRuntimeTemplate#post_startup_script}

---

##### `postStartupScriptBehavior`<sup>Optional</sup> <a name="postStartupScriptBehavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior"></a>

```java
public java.lang.String getPostStartupScriptBehavior();
```

- *Type:* java.lang.String

Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#post_startup_script_behavior GoogleColabRuntimeTemplate#post_startup_script_behavior}

---

##### `postStartupScriptUrl`<sup>Optional</sup> <a name="postStartupScriptUrl" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl"></a>

```java
public java.lang.String getPostStartupScriptUrl();
```

- *Type:* java.lang.String

Post startup script url to download. Example: https://bucket/script.sh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#post_startup_script_url GoogleColabRuntimeTemplate#post_startup_script_url}

---

### GoogleColabRuntimeTemplateTimeouts <a name="GoogleColabRuntimeTemplateTimeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateTimeouts;

GoogleColabRuntimeTemplateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#create GoogleColabRuntimeTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#delete GoogleColabRuntimeTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#update GoogleColabRuntimeTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#create GoogleColabRuntimeTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#delete GoogleColabRuntimeTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_colab_runtime_template#update GoogleColabRuntimeTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference <a name="GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference;

new GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb">resetDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType">resetDiskType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiskSizeGb` <a name="resetDiskSizeGb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```java
public void resetDiskSizeGb()
```

##### `resetDiskType` <a name="resetDiskType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType"></a>

```java
public void resetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput">diskSizeGbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb">diskSizeGb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType">diskType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diskSizeGbInput`<sup>Optional</sup> <a name="diskSizeGbInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```java
public java.lang.String getDiskSizeGbInput();
```

- *Type:* java.lang.String

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```java
public java.lang.String getDiskTypeInput();
```

- *Type:* java.lang.String

---

##### `diskSizeGb`<sup>Required</sup> <a name="diskSizeGb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```java
public java.lang.String getDiskSizeGb();
```

- *Type:* java.lang.String

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType"></a>

```java
public java.lang.String getDiskType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue"></a>

```java
public GoogleColabRuntimeTemplateDataPersistentDiskSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---


### GoogleColabRuntimeTemplateEncryptionSpecOutputReference <a name="GoogleColabRuntimeTemplateEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateEncryptionSpecOutputReference;

new GoogleColabRuntimeTemplateEncryptionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName"></a>

```java
public void resetKmsKeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```java
public java.lang.String getKmsKeyNameInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue"></a>

```java
public GoogleColabRuntimeTemplateEncryptionSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---


### GoogleColabRuntimeTemplateEucConfigOutputReference <a name="GoogleColabRuntimeTemplateEucConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateEucConfigOutputReference;

new GoogleColabRuntimeTemplateEucConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled">resetEucDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEucDisabled` <a name="resetEucDisabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled"></a>

```java
public void resetEucDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput">eucDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled">eucDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eucDisabledInput`<sup>Optional</sup> <a name="eucDisabledInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput"></a>

```java
public java.lang.Object getEucDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eucDisabled`<sup>Required</sup> <a name="eucDisabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled"></a>

```java
public java.lang.Object getEucDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.internalValue"></a>

```java
public GoogleColabRuntimeTemplateEucConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---


### GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference <a name="GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference;

new GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout"></a>

```java
public void resetIdleTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput"></a>

```java
public java.lang.String getIdleTimeoutInput();
```

- *Type:* java.lang.String

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout"></a>

```java
public java.lang.String getIdleTimeout();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue"></a>

```java
public GoogleColabRuntimeTemplateIdleShutdownConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---


### GoogleColabRuntimeTemplateMachineSpecOutputReference <a name="GoogleColabRuntimeTemplateMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateMachineSpecOutputReference;

new GoogleColabRuntimeTemplateMachineSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount">resetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType">resetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetMachineType">resetMachineType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceleratorCount` <a name="resetAcceleratorCount" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount"></a>

```java
public void resetAcceleratorCount()
```

##### `resetAcceleratorType` <a name="resetAcceleratorType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType"></a>

```java
public void resetAcceleratorType()
```

##### `resetMachineType` <a name="resetMachineType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetMachineType"></a>

```java
public void resetMachineType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput">acceleratorCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput">acceleratorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput">machineTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount">acceleratorCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType">acceleratorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineType">machineType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceleratorCountInput`<sup>Optional</sup> <a name="acceleratorCountInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput"></a>

```java
public java.lang.Number getAcceleratorCountInput();
```

- *Type:* java.lang.Number

---

##### `acceleratorTypeInput`<sup>Optional</sup> <a name="acceleratorTypeInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```java
public java.lang.String getAcceleratorTypeInput();
```

- *Type:* java.lang.String

---

##### `machineTypeInput`<sup>Optional</sup> <a name="machineTypeInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput"></a>

```java
public java.lang.String getMachineTypeInput();
```

- *Type:* java.lang.String

---

##### `acceleratorCount`<sup>Required</sup> <a name="acceleratorCount" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount"></a>

```java
public java.lang.Number getAcceleratorCount();
```

- *Type:* java.lang.Number

---

##### `acceleratorType`<sup>Required</sup> <a name="acceleratorType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType"></a>

```java
public java.lang.String getAcceleratorType();
```

- *Type:* java.lang.String

---

##### `machineType`<sup>Required</sup> <a name="machineType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineType"></a>

```java
public java.lang.String getMachineType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.internalValue"></a>

```java
public GoogleColabRuntimeTemplateMachineSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---


### GoogleColabRuntimeTemplateNetworkSpecOutputReference <a name="GoogleColabRuntimeTemplateNetworkSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateNetworkSpecOutputReference;

new GoogleColabRuntimeTemplateNetworkSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess">resetEnableInternetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableInternetAccess` <a name="resetEnableInternetAccess" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```java
public void resetEnableInternetAccess()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput">enableInternetAccessInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess">enableInternetAccess</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInternetAccessInput`<sup>Optional</sup> <a name="enableInternetAccessInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```java
public java.lang.Object getEnableInternetAccessInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `enableInternetAccess`<sup>Required</sup> <a name="enableInternetAccess" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess"></a>

```java
public java.lang.Object getEnableInternetAccess();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue"></a>

```java
public GoogleColabRuntimeTemplateNetworkSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---


### GoogleColabRuntimeTemplateShieldedVmConfigOutputReference <a name="GoogleColabRuntimeTemplateShieldedVmConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference;

new GoogleColabRuntimeTemplateShieldedVmConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot">resetEnableSecureBoot</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableSecureBoot` <a name="resetEnableSecureBoot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot"></a>

```java
public void resetEnableSecureBoot()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput">enableSecureBootInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot">enableSecureBoot</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableSecureBootInput`<sup>Optional</sup> <a name="enableSecureBootInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput"></a>

```java
public java.lang.Object getEnableSecureBootInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSecureBoot`<sup>Required</sup> <a name="enableSecureBoot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot"></a>

```java
public java.lang.Object getEnableSecureBoot();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue"></a>

```java
public GoogleColabRuntimeTemplateShieldedVmConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---


### GoogleColabRuntimeTemplateSoftwareConfigEnvList <a name="GoogleColabRuntimeTemplateSoftwareConfigEnvList" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateSoftwareConfigEnvList;

new GoogleColabRuntimeTemplateSoftwareConfigEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get"></a>

```java
public GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>>

---


### GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference;

new GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>

---


### GoogleColabRuntimeTemplateSoftwareConfigOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateSoftwareConfigOutputReference;

new GoogleColabRuntimeTemplateSoftwareConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv">putEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig">putPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv">resetEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig">resetPostStartupScriptConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnv` <a name="putEnv" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv"></a>

```java
public void putEnv(IResolvable OR java.util.List<GoogleColabRuntimeTemplateSoftwareConfigEnv> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>>

---

##### `putPostStartupScriptConfig` <a name="putPostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig"></a>

```java
public void putPostStartupScriptConfig(GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `resetEnv` <a name="resetEnv" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv"></a>

```java
public void resetEnv()
```

##### `resetPostStartupScriptConfig` <a name="resetPostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig"></a>

```java
public void resetPostStartupScriptConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList">GoogleColabRuntimeTemplateSoftwareConfigEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig">postStartupScriptConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput">envInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput">postStartupScriptConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.env"></a>

```java
public GoogleColabRuntimeTemplateSoftwareConfigEnvList getEnv();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList">GoogleColabRuntimeTemplateSoftwareConfigEnvList</a>

---

##### `postStartupScriptConfig`<sup>Required</sup> <a name="postStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig"></a>

```java
public GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference getPostStartupScriptConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a>

---

##### `envInput`<sup>Optional</sup> <a name="envInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput"></a>

```java
public java.lang.Object getEnvInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>>

---

##### `postStartupScriptConfigInput`<sup>Optional</sup> <a name="postStartupScriptConfigInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput"></a>

```java
public GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig getPostStartupScriptConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue"></a>

```java
public GoogleColabRuntimeTemplateSoftwareConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---


### GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference;

new GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript">resetPostStartupScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior">resetPostStartupScriptBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl">resetPostStartupScriptUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPostStartupScript` <a name="resetPostStartupScript" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript"></a>

```java
public void resetPostStartupScript()
```

##### `resetPostStartupScriptBehavior` <a name="resetPostStartupScriptBehavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior"></a>

```java
public void resetPostStartupScriptBehavior()
```

##### `resetPostStartupScriptUrl` <a name="resetPostStartupScriptUrl" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl"></a>

```java
public void resetPostStartupScriptUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput">postStartupScriptBehaviorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput">postStartupScriptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput">postStartupScriptUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript">postStartupScript</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior">postStartupScriptBehavior</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl">postStartupScriptUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `postStartupScriptBehaviorInput`<sup>Optional</sup> <a name="postStartupScriptBehaviorInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```java
public java.lang.String getPostStartupScriptBehaviorInput();
```

- *Type:* java.lang.String

---

##### `postStartupScriptInput`<sup>Optional</sup> <a name="postStartupScriptInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput"></a>

```java
public java.lang.String getPostStartupScriptInput();
```

- *Type:* java.lang.String

---

##### `postStartupScriptUrlInput`<sup>Optional</sup> <a name="postStartupScriptUrlInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput"></a>

```java
public java.lang.String getPostStartupScriptUrlInput();
```

- *Type:* java.lang.String

---

##### `postStartupScript`<sup>Required</sup> <a name="postStartupScript" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript"></a>

```java
public java.lang.String getPostStartupScript();
```

- *Type:* java.lang.String

---

##### `postStartupScriptBehavior`<sup>Required</sup> <a name="postStartupScriptBehavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior"></a>

```java
public java.lang.String getPostStartupScriptBehavior();
```

- *Type:* java.lang.String

---

##### `postStartupScriptUrl`<sup>Required</sup> <a name="postStartupScriptUrl" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl"></a>

```java
public java.lang.String getPostStartupScriptUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue"></a>

```java
public GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---


### GoogleColabRuntimeTemplateTimeoutsOutputReference <a name="GoogleColabRuntimeTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_colab_runtime_template.GoogleColabRuntimeTemplateTimeoutsOutputReference;

new GoogleColabRuntimeTemplateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

---



