# `googleColabRuntimeTemplate` Submodule <a name="`googleColabRuntimeTemplate` Submodule" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleColabRuntimeTemplate <a name="GoogleColabRuntimeTemplate" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template google_colab_runtime_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  data_persistent_disk_spec: GoogleColabRuntimeTemplateDataPersistentDiskSpec = None,
  description: str = None,
  encryption_spec: GoogleColabRuntimeTemplateEncryptionSpec = None,
  euc_config: GoogleColabRuntimeTemplateEucConfig = None,
  id: str = None,
  idle_shutdown_config: GoogleColabRuntimeTemplateIdleShutdownConfig = None,
  labels: typing.Mapping[str] = None,
  machine_spec: GoogleColabRuntimeTemplateMachineSpec = None,
  name: str = None,
  network_spec: GoogleColabRuntimeTemplateNetworkSpec = None,
  network_tags: typing.List[str] = None,
  project: str = None,
  shielded_vm_config: GoogleColabRuntimeTemplateShieldedVmConfig = None,
  software_config: GoogleColabRuntimeTemplateSoftwareConfig = None,
  timeouts: GoogleColabRuntimeTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.dataPersistentDiskSpec">data_persistent_disk_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.eucConfig">euc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.idleShutdownConfig">idle_shutdown_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.machineSpec">machine_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.networkSpec">network_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.shieldedVmConfig">shielded_vm_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.displayName"></a>

- *Type:* str

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#display_name GoogleColabRuntimeTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#location GoogleColabRuntimeTemplate#location}

---

##### `data_persistent_disk_spec`<sup>Optional</sup> <a name="data_persistent_disk_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.dataPersistentDiskSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#data_persistent_disk_spec GoogleColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.description"></a>

- *Type:* str

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#description GoogleColabRuntimeTemplate#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.encryptionSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#encryption_spec GoogleColabRuntimeTemplate#encryption_spec}

---

##### `euc_config`<sup>Optional</sup> <a name="euc_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.eucConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#euc_config GoogleColabRuntimeTemplate#euc_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_shutdown_config`<sup>Optional</sup> <a name="idle_shutdown_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.idleShutdownConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#idle_shutdown_config GoogleColabRuntimeTemplate#idle_shutdown_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#labels GoogleColabRuntimeTemplate#labels}

---

##### `machine_spec`<sup>Optional</sup> <a name="machine_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.machineSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#machine_spec GoogleColabRuntimeTemplate#machine_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#name GoogleColabRuntimeTemplate#name}

---

##### `network_spec`<sup>Optional</sup> <a name="network_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.networkSpec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#network_spec GoogleColabRuntimeTemplate#network_spec}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.networkTags"></a>

- *Type:* typing.List[str]

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#network_tags GoogleColabRuntimeTemplate#network_tags}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}.

---

##### `shielded_vm_config`<sup>Optional</sup> <a name="shielded_vm_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.shieldedVmConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#shielded_vm_config GoogleColabRuntimeTemplate#shielded_vm_config}

---

##### `software_config`<sup>Optional</sup> <a name="software_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.softwareConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#software_config GoogleColabRuntimeTemplate#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#timeouts GoogleColabRuntimeTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec">put_data_persistent_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec">put_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig">put_euc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig">put_idle_shutdown_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec">put_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec">put_network_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig">put_shielded_vm_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig">put_software_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDataPersistentDiskSpec">reset_data_persistent_disk_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEncryptionSpec">reset_encryption_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEucConfig">reset_euc_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetIdleShutdownConfig">reset_idle_shutdown_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetMachineSpec">reset_machine_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkSpec">reset_network_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkTags">reset_network_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetShieldedVmConfig">reset_shielded_vm_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetSoftwareConfig">reset_software_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_data_persistent_disk_spec` <a name="put_data_persistent_disk_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec"></a>

```python
def put_data_persistent_disk_spec(
  disk_size_gb: str = None,
  disk_type: str = None
) -> None
```

###### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec.parameter.diskSizeGb"></a>

- *Type:* str

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#disk_size_gb GoogleColabRuntimeTemplate#disk_size_gb}

---

###### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putDataPersistentDiskSpec.parameter.diskType"></a>

- *Type:* str

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#disk_type GoogleColabRuntimeTemplate#disk_type}

---

##### `put_encryption_spec` <a name="put_encryption_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec"></a>

```python
def put_encryption_spec(
  kms_key_name: str = None
) -> None
```

###### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEncryptionSpec.parameter.kmsKeyName"></a>

- *Type:* str

The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#kms_key_name GoogleColabRuntimeTemplate#kms_key_name}

---

##### `put_euc_config` <a name="put_euc_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig"></a>

```python
def put_euc_config(
  euc_disabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `euc_disabled`<sup>Optional</sup> <a name="euc_disabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putEucConfig.parameter.eucDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable end user credential access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#euc_disabled GoogleColabRuntimeTemplate#euc_disabled}

---

##### `put_idle_shutdown_config` <a name="put_idle_shutdown_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig"></a>

```python
def put_idle_shutdown_config(
  idle_timeout: str = None
) -> None
```

###### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putIdleShutdownConfig.parameter.idleTimeout"></a>

- *Type:* str

The duration after which the runtime is automatically shut down.

An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#idle_timeout GoogleColabRuntimeTemplate#idle_timeout}

---

##### `put_machine_spec` <a name="put_machine_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec"></a>

```python
def put_machine_spec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
) -> None
```

###### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec.parameter.acceleratorCount"></a>

- *Type:* typing.Union[int, float]

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#accelerator_count GoogleColabRuntimeTemplate#accelerator_count}

---

###### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec.parameter.acceleratorType"></a>

- *Type:* str

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#accelerator_type GoogleColabRuntimeTemplate#accelerator_type}

---

###### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putMachineSpec.parameter.machineType"></a>

- *Type:* str

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#machine_type GoogleColabRuntimeTemplate#machine_type}

---

##### `put_network_spec` <a name="put_network_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec"></a>

```python
def put_network_spec(
  enable_internet_access: typing.Union[bool, IResolvable] = None,
  network: str = None,
  subnetwork: str = None
) -> None
```

###### `enable_internet_access`<sup>Optional</sup> <a name="enable_internet_access" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec.parameter.enableInternetAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#enable_internet_access GoogleColabRuntimeTemplate#enable_internet_access}

---

###### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec.parameter.network"></a>

- *Type:* str

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#network GoogleColabRuntimeTemplate#network}

---

###### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putNetworkSpec.parameter.subnetwork"></a>

- *Type:* str

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#subnetwork GoogleColabRuntimeTemplate#subnetwork}

---

##### `put_shielded_vm_config` <a name="put_shielded_vm_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig"></a>

```python
def put_shielded_vm_config(
  enable_secure_boot: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putShieldedVmConfig.parameter.enableSecureBoot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables secure boot for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#enable_secure_boot GoogleColabRuntimeTemplate#enable_secure_boot}

---

##### `put_software_config` <a name="put_software_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig"></a>

```python
def put_software_config(
  env: typing.Union[IResolvable, typing.List[GoogleColabRuntimeTemplateSoftwareConfigEnv]] = None,
  post_startup_script_config: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig = None
) -> None
```

###### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig.parameter.env"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#env GoogleColabRuntimeTemplate#env}

---

###### `post_startup_script_config`<sup>Optional</sup> <a name="post_startup_script_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putSoftwareConfig.parameter.postStartupScriptConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

post_startup_script_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#post_startup_script_config GoogleColabRuntimeTemplate#post_startup_script_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#create GoogleColabRuntimeTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#delete GoogleColabRuntimeTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#update GoogleColabRuntimeTemplate#update}.

---

##### `reset_data_persistent_disk_spec` <a name="reset_data_persistent_disk_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDataPersistentDiskSpec"></a>

```python
def reset_data_persistent_disk_spec() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encryption_spec` <a name="reset_encryption_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEncryptionSpec"></a>

```python
def reset_encryption_spec() -> None
```

##### `reset_euc_config` <a name="reset_euc_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetEucConfig"></a>

```python
def reset_euc_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_shutdown_config` <a name="reset_idle_shutdown_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetIdleShutdownConfig"></a>

```python
def reset_idle_shutdown_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_machine_spec` <a name="reset_machine_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetMachineSpec"></a>

```python
def reset_machine_spec() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_network_spec` <a name="reset_network_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkSpec"></a>

```python
def reset_network_spec() -> None
```

##### `reset_network_tags` <a name="reset_network_tags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetNetworkTags"></a>

```python
def reset_network_tags() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_shielded_vm_config` <a name="reset_shielded_vm_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetShieldedVmConfig"></a>

```python
def reset_shielded_vm_config() -> None
```

##### `reset_software_config` <a name="reset_software_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetSoftwareConfig"></a>

```python
def reset_software_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleColabRuntimeTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleColabRuntimeTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleColabRuntimeTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleColabRuntimeTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleColabRuntimeTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpec">data_persistent_disk_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference">GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference">GoogleColabRuntimeTemplateEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfig">euc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference">GoogleColabRuntimeTemplateEucConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfig">idle_shutdown_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference">GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference">GoogleColabRuntimeTemplateMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpec">network_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference">GoogleColabRuntimeTemplateNetworkSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfig">shielded_vm_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference">GoogleColabRuntimeTemplateShieldedVmConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference">GoogleColabRuntimeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpecInput">data_persistent_disk_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpecInput">encryption_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfigInput">euc_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfigInput">idle_shutdown_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpecInput">machine_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpecInput">network_spec_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTagsInput">network_tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfigInput">shielded_vm_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfigInput">software_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_persistent_disk_spec`<sup>Required</sup> <a name="data_persistent_disk_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpec"></a>

```python
data_persistent_disk_spec: GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference">GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_spec`<sup>Required</sup> <a name="encryption_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpec"></a>

```python
encryption_spec: GoogleColabRuntimeTemplateEncryptionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference">GoogleColabRuntimeTemplateEncryptionSpecOutputReference</a>

---

##### `euc_config`<sup>Required</sup> <a name="euc_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfig"></a>

```python
euc_config: GoogleColabRuntimeTemplateEucConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference">GoogleColabRuntimeTemplateEucConfigOutputReference</a>

---

##### `idle_shutdown_config`<sup>Required</sup> <a name="idle_shutdown_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfig"></a>

```python
idle_shutdown_config: GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference">GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference</a>

---

##### `machine_spec`<sup>Required</sup> <a name="machine_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpec"></a>

```python
machine_spec: GoogleColabRuntimeTemplateMachineSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference">GoogleColabRuntimeTemplateMachineSpecOutputReference</a>

---

##### `network_spec`<sup>Required</sup> <a name="network_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpec"></a>

```python
network_spec: GoogleColabRuntimeTemplateNetworkSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference">GoogleColabRuntimeTemplateNetworkSpecOutputReference</a>

---

##### `shielded_vm_config`<sup>Required</sup> <a name="shielded_vm_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfig"></a>

```python
shielded_vm_config: GoogleColabRuntimeTemplateShieldedVmConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference">GoogleColabRuntimeTemplateShieldedVmConfigOutputReference</a>

---

##### `software_config`<sup>Required</sup> <a name="software_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfig"></a>

```python
software_config: GoogleColabRuntimeTemplateSoftwareConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeouts"></a>

```python
timeouts: GoogleColabRuntimeTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference">GoogleColabRuntimeTemplateTimeoutsOutputReference</a>

---

##### `data_persistent_disk_spec_input`<sup>Optional</sup> <a name="data_persistent_disk_spec_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.dataPersistentDiskSpecInput"></a>

```python
data_persistent_disk_spec_input: GoogleColabRuntimeTemplateDataPersistentDiskSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `encryption_spec_input`<sup>Optional</sup> <a name="encryption_spec_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.encryptionSpecInput"></a>

```python
encryption_spec_input: GoogleColabRuntimeTemplateEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---

##### `euc_config_input`<sup>Optional</sup> <a name="euc_config_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.eucConfigInput"></a>

```python
euc_config_input: GoogleColabRuntimeTemplateEucConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_shutdown_config_input`<sup>Optional</sup> <a name="idle_shutdown_config_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.idleShutdownConfigInput"></a>

```python
idle_shutdown_config_input: GoogleColabRuntimeTemplateIdleShutdownConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `machine_spec_input`<sup>Optional</sup> <a name="machine_spec_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.machineSpecInput"></a>

```python
machine_spec_input: GoogleColabRuntimeTemplateMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_spec_input`<sup>Optional</sup> <a name="network_spec_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkSpecInput"></a>

```python
network_spec_input: GoogleColabRuntimeTemplateNetworkSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---

##### `network_tags_input`<sup>Optional</sup> <a name="network_tags_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTagsInput"></a>

```python
network_tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `shielded_vm_config_input`<sup>Optional</sup> <a name="shielded_vm_config_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.shieldedVmConfigInput"></a>

```python
shielded_vm_config_input: GoogleColabRuntimeTemplateShieldedVmConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---

##### `software_config_input`<sup>Optional</sup> <a name="software_config_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.softwareConfigInput"></a>

```python
software_config_input: GoogleColabRuntimeTemplateSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleColabRuntimeTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_tags`<sup>Required</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleColabRuntimeTemplateConfig <a name="GoogleColabRuntimeTemplateConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  location: str,
  data_persistent_disk_spec: GoogleColabRuntimeTemplateDataPersistentDiskSpec = None,
  description: str = None,
  encryption_spec: GoogleColabRuntimeTemplateEncryptionSpec = None,
  euc_config: GoogleColabRuntimeTemplateEucConfig = None,
  id: str = None,
  idle_shutdown_config: GoogleColabRuntimeTemplateIdleShutdownConfig = None,
  labels: typing.Mapping[str] = None,
  machine_spec: GoogleColabRuntimeTemplateMachineSpec = None,
  name: str = None,
  network_spec: GoogleColabRuntimeTemplateNetworkSpec = None,
  network_tags: typing.List[str] = None,
  project: str = None,
  shielded_vm_config: GoogleColabRuntimeTemplateShieldedVmConfig = None,
  software_config: GoogleColabRuntimeTemplateSoftwareConfig = None,
  timeouts: GoogleColabRuntimeTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.displayName">display_name</a></code> | <code>str</code> | Required. The display name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.location">location</a></code> | <code>str</code> | The location for the resource: https://cloud.google.com/colab/docs/locations. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dataPersistentDiskSpec">data_persistent_disk_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | data_persistent_disk_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.description">description</a></code> | <code>str</code> | The description of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.encryptionSpec">encryption_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.eucConfig">euc_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | euc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.idleShutdownConfig">idle_shutdown_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | idle_shutdown_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels to identify and group the runtime template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.machineSpec">machine_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.name">name</a></code> | <code>str</code> | The resource name of the Runtime Template. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkSpec">network_spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | network_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkTags">network_tags</a></code> | <code>typing.List[str]</code> | Applies the given Compute Engine tags to the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.shieldedVmConfig">shielded_vm_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | shielded_vm_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.softwareConfig">software_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | software_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Required. The display name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#display_name GoogleColabRuntimeTemplate#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource: https://cloud.google.com/colab/docs/locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#location GoogleColabRuntimeTemplate#location}

---

##### `data_persistent_disk_spec`<sup>Optional</sup> <a name="data_persistent_disk_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.dataPersistentDiskSpec"></a>

```python
data_persistent_disk_spec: GoogleColabRuntimeTemplateDataPersistentDiskSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

data_persistent_disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#data_persistent_disk_spec GoogleColabRuntimeTemplate#data_persistent_disk_spec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#description GoogleColabRuntimeTemplate#description}

---

##### `encryption_spec`<sup>Optional</sup> <a name="encryption_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.encryptionSpec"></a>

```python
encryption_spec: GoogleColabRuntimeTemplateEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#encryption_spec GoogleColabRuntimeTemplate#encryption_spec}

---

##### `euc_config`<sup>Optional</sup> <a name="euc_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.eucConfig"></a>

```python
euc_config: GoogleColabRuntimeTemplateEucConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

euc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#euc_config GoogleColabRuntimeTemplate#euc_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#id GoogleColabRuntimeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_shutdown_config`<sup>Optional</sup> <a name="idle_shutdown_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.idleShutdownConfig"></a>

```python
idle_shutdown_config: GoogleColabRuntimeTemplateIdleShutdownConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

idle_shutdown_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#idle_shutdown_config GoogleColabRuntimeTemplate#idle_shutdown_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels to identify and group the runtime template.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#labels GoogleColabRuntimeTemplate#labels}

---

##### `machine_spec`<sup>Optional</sup> <a name="machine_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.machineSpec"></a>

```python
machine_spec: GoogleColabRuntimeTemplateMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#machine_spec GoogleColabRuntimeTemplate#machine_spec}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the Runtime Template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#name GoogleColabRuntimeTemplate#name}

---

##### `network_spec`<sup>Optional</sup> <a name="network_spec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkSpec"></a>

```python
network_spec: GoogleColabRuntimeTemplateNetworkSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

network_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#network_spec GoogleColabRuntimeTemplate#network_spec}

---

##### `network_tags`<sup>Optional</sup> <a name="network_tags" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.networkTags"></a>

```python
network_tags: typing.List[str]
```

- *Type:* typing.List[str]

Applies the given Compute Engine tags to the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#network_tags GoogleColabRuntimeTemplate#network_tags}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#project GoogleColabRuntimeTemplate#project}.

---

##### `shielded_vm_config`<sup>Optional</sup> <a name="shielded_vm_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.shieldedVmConfig"></a>

```python
shielded_vm_config: GoogleColabRuntimeTemplateShieldedVmConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

shielded_vm_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#shielded_vm_config GoogleColabRuntimeTemplate#shielded_vm_config}

---

##### `software_config`<sup>Optional</sup> <a name="software_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.softwareConfig"></a>

```python
software_config: GoogleColabRuntimeTemplateSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

software_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#software_config GoogleColabRuntimeTemplate#software_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateConfig.property.timeouts"></a>

```python
timeouts: GoogleColabRuntimeTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#timeouts GoogleColabRuntimeTemplate#timeouts}

---

### GoogleColabRuntimeTemplateDataPersistentDiskSpec <a name="GoogleColabRuntimeTemplateDataPersistentDiskSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec(
  disk_size_gb: str = None,
  disk_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | The disk size of the runtime in GB. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskType">disk_type</a></code> | <code>str</code> | The type of the persistent disk. |

---

##### `disk_size_gb`<sup>Optional</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

The disk size of the runtime in GB.

If specified, the diskType must also be specified. The minimum size is 10GB and the maximum is 65536GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#disk_size_gb GoogleColabRuntimeTemplate#disk_size_gb}

---

##### `disk_type`<sup>Optional</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

The type of the persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#disk_type GoogleColabRuntimeTemplate#disk_type}

---

### GoogleColabRuntimeTemplateEncryptionSpec <a name="GoogleColabRuntimeTemplateEncryptionSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec(
  kms_key_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime. |

---

##### `kms_key_name`<sup>Optional</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The Cloud KMS encryption key (customer-managed encryption key) used to protect the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#kms_key_name GoogleColabRuntimeTemplate#kms_key_name}

---

### GoogleColabRuntimeTemplateEucConfig <a name="GoogleColabRuntimeTemplateEucConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig(
  euc_disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.property.eucDisabled">euc_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Disable end user credential access for the runtime. |

---

##### `euc_disabled`<sup>Optional</sup> <a name="euc_disabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig.property.eucDisabled"></a>

```python
euc_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Disable end user credential access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#euc_disabled GoogleColabRuntimeTemplate#euc_disabled}

---

### GoogleColabRuntimeTemplateIdleShutdownConfig <a name="GoogleColabRuntimeTemplateIdleShutdownConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig(
  idle_timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | The duration after which the runtime is automatically shut down. |

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

The duration after which the runtime is automatically shut down.

An input of 0s disables the idle shutdown feature, and a valid range is [10m, 24h].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#idle_timeout GoogleColabRuntimeTemplate#idle_timeout}

---

### GoogleColabRuntimeTemplateMachineSpec <a name="GoogleColabRuntimeTemplateMachineSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec(
  accelerator_count: typing.Union[int, float] = None,
  accelerator_type: str = None,
  machine_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | The number of accelerators used by the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.machineType">machine_type</a></code> | <code>str</code> | The Compute Engine machine type selected for the runtime. |

---

##### `accelerator_count`<sup>Optional</sup> <a name="accelerator_count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of accelerators used by the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#accelerator_count GoogleColabRuntimeTemplate#accelerator_count}

---

##### `accelerator_type`<sup>Optional</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

The type of hardware accelerator used by the runtime. If specified, acceleratorCount must also be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#accelerator_type GoogleColabRuntimeTemplate#accelerator_type}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

The Compute Engine machine type selected for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#machine_type GoogleColabRuntimeTemplate#machine_type}

---

### GoogleColabRuntimeTemplateNetworkSpec <a name="GoogleColabRuntimeTemplateNetworkSpec" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec(
  enable_internet_access: typing.Union[bool, IResolvable] = None,
  network: str = None,
  subnetwork: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.enableInternetAccess">enable_internet_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enable public internet access for the runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.network">network</a></code> | <code>str</code> | The name of the VPC that this runtime is in. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.subnetwork">subnetwork</a></code> | <code>str</code> | The name of the subnetwork that this runtime is in. |

---

##### `enable_internet_access`<sup>Optional</sup> <a name="enable_internet_access" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.enableInternetAccess"></a>

```python
enable_internet_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enable public internet access for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#enable_internet_access GoogleColabRuntimeTemplate#enable_internet_access}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.network"></a>

```python
network: str
```

- *Type:* str

The name of the VPC that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#network GoogleColabRuntimeTemplate#network}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The name of the subnetwork that this runtime is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#subnetwork GoogleColabRuntimeTemplate#subnetwork}

---

### GoogleColabRuntimeTemplateShieldedVmConfig <a name="GoogleColabRuntimeTemplateShieldedVmConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig(
  enable_secure_boot: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables secure boot for the runtime. |

---

##### `enable_secure_boot`<sup>Optional</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables secure boot for the runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#enable_secure_boot GoogleColabRuntimeTemplate#enable_secure_boot}

---

### GoogleColabRuntimeTemplateSoftwareConfig <a name="GoogleColabRuntimeTemplateSoftwareConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig(
  env: typing.Union[IResolvable, typing.List[GoogleColabRuntimeTemplateSoftwareConfigEnv]] = None,
  post_startup_script_config: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.env">env</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>]]</code> | env block. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig">post_startup_script_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | post_startup_script_config block. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.env"></a>

```python
env: typing.Union[IResolvable, typing.List[GoogleColabRuntimeTemplateSoftwareConfigEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>]]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#env GoogleColabRuntimeTemplate#env}

---

##### `post_startup_script_config`<sup>Optional</sup> <a name="post_startup_script_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig.property.postStartupScriptConfig"></a>

```python
post_startup_script_config: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

post_startup_script_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#post_startup_script_config GoogleColabRuntimeTemplate#post_startup_script_config}

---

### GoogleColabRuntimeTemplateSoftwareConfigEnv <a name="GoogleColabRuntimeTemplateSoftwareConfigEnv" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv(
  name: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.name">name</a></code> | <code>str</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.value">value</a></code> | <code>str</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#name GoogleColabRuntimeTemplate#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv.property.value"></a>

```python
value: str
```

- *Type:* str

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables.

If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#value GoogleColabRuntimeTemplate#value}

---

### GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig <a name="GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig(
  post_startup_script: str = None,
  post_startup_script_behavior: str = None,
  post_startup_script_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | Post startup script to run after runtime is started. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior">post_startup_script_behavior</a></code> | <code>str</code> | Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl">post_startup_script_url</a></code> | <code>str</code> | Post startup script url to download. Example: https://bucket/script.sh. |

---

##### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

Post startup script to run after runtime is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#post_startup_script GoogleColabRuntimeTemplate#post_startup_script}

---

##### `post_startup_script_behavior`<sup>Optional</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptBehavior"></a>

```python
post_startup_script_behavior: str
```

- *Type:* str

Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#post_startup_script_behavior GoogleColabRuntimeTemplate#post_startup_script_behavior}

---

##### `post_startup_script_url`<sup>Optional</sup> <a name="post_startup_script_url" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig.property.postStartupScriptUrl"></a>

```python
post_startup_script_url: str
```

- *Type:* str

Post startup script url to download. Example: https://bucket/script.sh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#post_startup_script_url GoogleColabRuntimeTemplate#post_startup_script_url}

---

### GoogleColabRuntimeTemplateTimeouts <a name="GoogleColabRuntimeTemplateTimeouts" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#create GoogleColabRuntimeTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#delete GoogleColabRuntimeTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#update GoogleColabRuntimeTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#create GoogleColabRuntimeTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#delete GoogleColabRuntimeTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#update GoogleColabRuntimeTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference <a name="GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb">reset_disk_size_gb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType">reset_disk_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disk_size_gb` <a name="reset_disk_size_gb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskSizeGb"></a>

```python
def reset_disk_size_gb() -> None
```

##### `reset_disk_type` <a name="reset_disk_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.resetDiskType"></a>

```python
def reset_disk_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput">disk_size_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput">disk_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb">disk_size_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType">disk_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_size_gb_input`<sup>Optional</sup> <a name="disk_size_gb_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGbInput"></a>

```python
disk_size_gb_input: str
```

- *Type:* str

---

##### `disk_type_input`<sup>Optional</sup> <a name="disk_type_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskTypeInput"></a>

```python
disk_type_input: str
```

- *Type:* str

---

##### `disk_size_gb`<sup>Required</sup> <a name="disk_size_gb" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskSizeGb"></a>

```python
disk_size_gb: str
```

- *Type:* str

---

##### `disk_type`<sup>Required</sup> <a name="disk_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.diskType"></a>

```python
disk_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleColabRuntimeTemplateDataPersistentDiskSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateDataPersistentDiskSpec">GoogleColabRuntimeTemplateDataPersistentDiskSpec</a>

---


### GoogleColabRuntimeTemplateEncryptionSpecOutputReference <a name="GoogleColabRuntimeTemplateEncryptionSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName">reset_kms_key_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_name` <a name="reset_kms_key_name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.resetKmsKeyName"></a>

```python
def reset_kms_key_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleColabRuntimeTemplateEncryptionSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEncryptionSpec">GoogleColabRuntimeTemplateEncryptionSpec</a>

---


### GoogleColabRuntimeTemplateEucConfigOutputReference <a name="GoogleColabRuntimeTemplateEucConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled">reset_euc_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_euc_disabled` <a name="reset_euc_disabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.resetEucDisabled"></a>

```python
def reset_euc_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput">euc_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled">euc_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `euc_disabled_input`<sup>Optional</sup> <a name="euc_disabled_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabledInput"></a>

```python
euc_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `euc_disabled`<sup>Required</sup> <a name="euc_disabled" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.eucDisabled"></a>

```python
euc_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleColabRuntimeTemplateEucConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateEucConfig">GoogleColabRuntimeTemplateEucConfig</a>

---


### GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference <a name="GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout">idle_timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeoutInput"></a>

```python
idle_timeout_input: str
```

- *Type:* str

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.idleTimeout"></a>

```python
idle_timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleColabRuntimeTemplateIdleShutdownConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateIdleShutdownConfig">GoogleColabRuntimeTemplateIdleShutdownConfig</a>

---


### GoogleColabRuntimeTemplateMachineSpecOutputReference <a name="GoogleColabRuntimeTemplateMachineSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount">reset_accelerator_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType">reset_accelerator_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetMachineType">reset_machine_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accelerator_count` <a name="reset_accelerator_count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorCount"></a>

```python
def reset_accelerator_count() -> None
```

##### `reset_accelerator_type` <a name="reset_accelerator_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetAcceleratorType"></a>

```python
def reset_accelerator_type() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.resetMachineType"></a>

```python
def reset_machine_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput">accelerator_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput">accelerator_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType">accelerator_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count_input`<sup>Optional</sup> <a name="accelerator_count_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCountInput"></a>

```python
accelerator_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type_input`<sup>Optional</sup> <a name="accelerator_type_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```python
accelerator_type_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accelerator_type`<sup>Required</sup> <a name="accelerator_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.acceleratorType"></a>

```python
accelerator_type: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleColabRuntimeTemplateMachineSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateMachineSpec">GoogleColabRuntimeTemplateMachineSpec</a>

---


### GoogleColabRuntimeTemplateNetworkSpecOutputReference <a name="GoogleColabRuntimeTemplateNetworkSpecOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess">reset_enable_internet_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_internet_access` <a name="reset_enable_internet_access" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetEnableInternetAccess"></a>

```python
def reset_enable_internet_access() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput">enable_internet_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess">enable_internet_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_internet_access_input`<sup>Optional</sup> <a name="enable_internet_access_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccessInput"></a>

```python
enable_internet_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `enable_internet_access`<sup>Required</sup> <a name="enable_internet_access" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.enableInternetAccess"></a>

```python
enable_internet_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpecOutputReference.property.internalValue"></a>

```python
internal_value: GoogleColabRuntimeTemplateNetworkSpec
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateNetworkSpec">GoogleColabRuntimeTemplateNetworkSpec</a>

---


### GoogleColabRuntimeTemplateShieldedVmConfigOutputReference <a name="GoogleColabRuntimeTemplateShieldedVmConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot">reset_enable_secure_boot</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_secure_boot` <a name="reset_enable_secure_boot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.resetEnableSecureBoot"></a>

```python
def reset_enable_secure_boot() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput">enable_secure_boot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot">enable_secure_boot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_secure_boot_input`<sup>Optional</sup> <a name="enable_secure_boot_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBootInput"></a>

```python
enable_secure_boot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_secure_boot`<sup>Required</sup> <a name="enable_secure_boot" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.enableSecureBoot"></a>

```python
enable_secure_boot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleColabRuntimeTemplateShieldedVmConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateShieldedVmConfig">GoogleColabRuntimeTemplateShieldedVmConfig</a>

---


### GoogleColabRuntimeTemplateSoftwareConfigEnvList <a name="GoogleColabRuntimeTemplateSoftwareConfigEnvList" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleColabRuntimeTemplateSoftwareConfigEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>]]

---


### GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleColabRuntimeTemplateSoftwareConfigEnv]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>]

---


### GoogleColabRuntimeTemplateSoftwareConfigOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv">put_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig">put_post_startup_script_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv">reset_env</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig">reset_post_startup_script_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_env` <a name="put_env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv"></a>

```python
def put_env(
  value: typing.Union[IResolvable, typing.List[GoogleColabRuntimeTemplateSoftwareConfigEnv]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putEnv.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>]]

---

##### `put_post_startup_script_config` <a name="put_post_startup_script_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig"></a>

```python
def put_post_startup_script_config(
  post_startup_script: str = None,
  post_startup_script_behavior: str = None,
  post_startup_script_url: str = None
) -> None
```

###### `post_startup_script`<sup>Optional</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.postStartupScript"></a>

- *Type:* str

Post startup script to run after runtime is started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#post_startup_script GoogleColabRuntimeTemplate#post_startup_script}

---

###### `post_startup_script_behavior`<sup>Optional</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.postStartupScriptBehavior"></a>

- *Type:* str

Post startup script behavior that defines download and execution behavior. Possible values: ["RUN_ONCE", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#post_startup_script_behavior GoogleColabRuntimeTemplate#post_startup_script_behavior}

---

###### `post_startup_script_url`<sup>Optional</sup> <a name="post_startup_script_url" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.putPostStartupScriptConfig.parameter.postStartupScriptUrl"></a>

- *Type:* str

Post startup script url to download. Example: https://bucket/script.sh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_colab_runtime_template#post_startup_script_url GoogleColabRuntimeTemplate#post_startup_script_url}

---

##### `reset_env` <a name="reset_env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetEnv"></a>

```python
def reset_env() -> None
```

##### `reset_post_startup_script_config` <a name="reset_post_startup_script_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.resetPostStartupScriptConfig"></a>

```python
def reset_post_startup_script_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList">GoogleColabRuntimeTemplateSoftwareConfigEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig">post_startup_script_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput">env_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput">post_startup_script_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.env"></a>

```python
env: GoogleColabRuntimeTemplateSoftwareConfigEnvList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnvList">GoogleColabRuntimeTemplateSoftwareConfigEnvList</a>

---

##### `post_startup_script_config`<sup>Required</sup> <a name="post_startup_script_config" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfig"></a>

```python
post_startup_script_config: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference</a>

---

##### `env_input`<sup>Optional</sup> <a name="env_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.envInput"></a>

```python
env_input: typing.Union[IResolvable, typing.List[GoogleColabRuntimeTemplateSoftwareConfigEnv]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigEnv">GoogleColabRuntimeTemplateSoftwareConfigEnv</a>]]

---

##### `post_startup_script_config_input`<sup>Optional</sup> <a name="post_startup_script_config_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.postStartupScriptConfigInput"></a>

```python
post_startup_script_config_input: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleColabRuntimeTemplateSoftwareConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfig">GoogleColabRuntimeTemplateSoftwareConfig</a>

---


### GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference <a name="GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript">reset_post_startup_script</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior">reset_post_startup_script_behavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl">reset_post_startup_script_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_post_startup_script` <a name="reset_post_startup_script" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScript"></a>

```python
def reset_post_startup_script() -> None
```

##### `reset_post_startup_script_behavior` <a name="reset_post_startup_script_behavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptBehavior"></a>

```python
def reset_post_startup_script_behavior() -> None
```

##### `reset_post_startup_script_url` <a name="reset_post_startup_script_url" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.resetPostStartupScriptUrl"></a>

```python
def reset_post_startup_script_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput">post_startup_script_behavior_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput">post_startup_script_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput">post_startup_script_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript">post_startup_script</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior">post_startup_script_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl">post_startup_script_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `post_startup_script_behavior_input`<sup>Optional</sup> <a name="post_startup_script_behavior_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehaviorInput"></a>

```python
post_startup_script_behavior_input: str
```

- *Type:* str

---

##### `post_startup_script_input`<sup>Optional</sup> <a name="post_startup_script_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptInput"></a>

```python
post_startup_script_input: str
```

- *Type:* str

---

##### `post_startup_script_url_input`<sup>Optional</sup> <a name="post_startup_script_url_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrlInput"></a>

```python
post_startup_script_url_input: str
```

- *Type:* str

---

##### `post_startup_script`<sup>Required</sup> <a name="post_startup_script" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScript"></a>

```python
post_startup_script: str
```

- *Type:* str

---

##### `post_startup_script_behavior`<sup>Required</sup> <a name="post_startup_script_behavior" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptBehavior"></a>

```python
post_startup_script_behavior: str
```

- *Type:* str

---

##### `post_startup_script_url`<sup>Required</sup> <a name="post_startup_script_url" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.postStartupScriptUrl"></a>

```python
post_startup_script_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig">GoogleColabRuntimeTemplateSoftwareConfigPostStartupScriptConfig</a>

---


### GoogleColabRuntimeTemplateTimeoutsOutputReference <a name="GoogleColabRuntimeTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_colab_runtime_template

googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleColabRuntimeTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleColabRuntimeTemplate.GoogleColabRuntimeTemplateTimeouts">GoogleColabRuntimeTemplateTimeouts</a>]

---



