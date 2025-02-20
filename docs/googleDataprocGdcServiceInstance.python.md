# `googleDataprocGdcServiceInstance` Submodule <a name="`googleDataprocGdcServiceInstance` Submodule" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocGdcServiceInstance <a name="GoogleDataprocGdcServiceInstance" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance google_dataproc_gdc_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  service_instance_id: str,
  display_name: str = None,
  gdce_cluster: GoogleDataprocGdcServiceInstanceGdceCluster = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  service_account: str = None,
  spark_service_instance_config: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig = None,
  timeouts: GoogleDataprocGdcServiceInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Id of the service instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.gdceCluster">gdce_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | gdce_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#id GoogleDataprocGdcServiceInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this service instance. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#project GoogleDataprocGdcServiceInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Requested service account to associate with ServiceInstance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.sparkServiceInstanceConfig">spark_service_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | spark_service_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.location"></a>

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#location GoogleDataprocGdcServiceInstance#location}

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.serviceInstanceId"></a>

- *Type:* str

Id of the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#service_instance_id GoogleDataprocGdcServiceInstance#service_instance_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.displayName"></a>

- *Type:* str

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#display_name GoogleDataprocGdcServiceInstance#display_name}

---

##### `gdce_cluster`<sup>Optional</sup> <a name="gdce_cluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.gdceCluster"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

gdce_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#gdce_cluster GoogleDataprocGdcServiceInstance#gdce_cluster}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#id GoogleDataprocGdcServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels to associate with this service instance. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#labels GoogleDataprocGdcServiceInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#project GoogleDataprocGdcServiceInstance#project}.

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Requested service account to associate with ServiceInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#service_account GoogleDataprocGdcServiceInstance#service_account}

---

##### `spark_service_instance_config`<sup>Optional</sup> <a name="spark_service_instance_config" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.sparkServiceInstanceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

spark_service_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#spark_service_instance_config GoogleDataprocGdcServiceInstance#spark_service_instance_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#timeouts GoogleDataprocGdcServiceInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster">put_gdce_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig">put_spark_service_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetGdceCluster">reset_gdce_cluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetServiceAccount">reset_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetSparkServiceInstanceConfig">reset_spark_service_instance_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gdce_cluster` <a name="put_gdce_cluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster"></a>

```python
def put_gdce_cluster(
  gdce_cluster: str
) -> None
```

###### `gdce_cluster`<sup>Required</sup> <a name="gdce_cluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster.parameter.gdceCluster"></a>

- *Type:* str

Gdce cluster resource id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#gdce_cluster GoogleDataprocGdcServiceInstance#gdce_cluster}

---

##### `put_spark_service_instance_config` <a name="put_spark_service_instance_config" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig"></a>

```python
def put_spark_service_instance_config() -> None
```

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#create GoogleDataprocGdcServiceInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#delete GoogleDataprocGdcServiceInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#update GoogleDataprocGdcServiceInstance#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gdce_cluster` <a name="reset_gdce_cluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetGdceCluster"></a>

```python
def reset_gdce_cluster() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_service_account` <a name="reset_service_account" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetServiceAccount"></a>

```python
def reset_service_account() -> None
```

##### `reset_spark_service_instance_config` <a name="reset_spark_service_instance_config" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetSparkServiceInstanceConfig"></a>

```python
def reset_spark_service_instance_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataprocGdcServiceInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataprocGdcServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocGdcServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveServiceAccount">effective_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceCluster">gdce_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference">GoogleDataprocGdcServiceInstanceGdceClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.requestedState">requested_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfig">spark_service_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference">GoogleDataprocGdcServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceClusterInput">gdce_cluster_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceIdInput">service_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput">spark_service_instance_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_service_account`<sup>Required</sup> <a name="effective_service_account" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveServiceAccount"></a>

```python
effective_service_account: str
```

- *Type:* str

---

##### `gdce_cluster`<sup>Required</sup> <a name="gdce_cluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceCluster"></a>

```python
gdce_cluster: GoogleDataprocGdcServiceInstanceGdceClusterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference">GoogleDataprocGdcServiceInstanceGdceClusterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `requested_state`<sup>Required</sup> <a name="requested_state" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.requestedState"></a>

```python
requested_state: str
```

- *Type:* str

---

##### `spark_service_instance_config`<sup>Required</sup> <a name="spark_service_instance_config" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfig"></a>

```python
spark_service_instance_config: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeouts"></a>

```python
timeouts: GoogleDataprocGdcServiceInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference">GoogleDataprocGdcServiceInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `gdce_cluster_input`<sup>Optional</sup> <a name="gdce_cluster_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceClusterInput"></a>

```python
gdce_cluster_input: GoogleDataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `service_instance_id_input`<sup>Optional</sup> <a name="service_instance_id_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceIdInput"></a>

```python
service_instance_id_input: str
```

- *Type:* str

---

##### `spark_service_instance_config_input`<sup>Optional</sup> <a name="spark_service_instance_config_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput"></a>

```python
spark_service_instance_config_input: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataprocGdcServiceInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocGdcServiceInstanceConfig <a name="GoogleDataprocGdcServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  service_instance_id: str,
  display_name: str = None,
  gdce_cluster: GoogleDataprocGdcServiceInstanceGdceCluster = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  service_account: str = None,
  spark_service_instance_config: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig = None,
  timeouts: GoogleDataprocGdcServiceInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.location">location</a></code> | <code>str</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceInstanceId">service_instance_id</a></code> | <code>str</code> | Id of the service instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.displayName">display_name</a></code> | <code>str</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.gdceCluster">gdce_cluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | gdce_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#id GoogleDataprocGdcServiceInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this service instance. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#project GoogleDataprocGdcServiceInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Requested service account to associate with ServiceInstance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig">spark_service_instance_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | spark_service_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#location GoogleDataprocGdcServiceInstance#location}

---

##### `service_instance_id`<sup>Required</sup> <a name="service_instance_id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceInstanceId"></a>

```python
service_instance_id: str
```

- *Type:* str

Id of the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#service_instance_id GoogleDataprocGdcServiceInstance#service_instance_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#display_name GoogleDataprocGdcServiceInstance#display_name}

---

##### `gdce_cluster`<sup>Optional</sup> <a name="gdce_cluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.gdceCluster"></a>

```python
gdce_cluster: GoogleDataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

gdce_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#gdce_cluster GoogleDataprocGdcServiceInstance#gdce_cluster}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#id GoogleDataprocGdcServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels to associate with this service instance. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#labels GoogleDataprocGdcServiceInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#project GoogleDataprocGdcServiceInstance#project}.

---

##### `service_account`<sup>Optional</sup> <a name="service_account" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Requested service account to associate with ServiceInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#service_account GoogleDataprocGdcServiceInstance#service_account}

---

##### `spark_service_instance_config`<sup>Optional</sup> <a name="spark_service_instance_config" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig"></a>

```python
spark_service_instance_config: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

spark_service_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#spark_service_instance_config GoogleDataprocGdcServiceInstance#spark_service_instance_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.timeouts"></a>

```python
timeouts: GoogleDataprocGdcServiceInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#timeouts GoogleDataprocGdcServiceInstance#timeouts}

---

### GoogleDataprocGdcServiceInstanceGdceCluster <a name="GoogleDataprocGdcServiceInstanceGdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster(
  gdce_cluster: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.property.gdceCluster">gdce_cluster</a></code> | <code>str</code> | Gdce cluster resource id. |

---

##### `gdce_cluster`<sup>Required</sup> <a name="gdce_cluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.property.gdceCluster"></a>

```python
gdce_cluster: str
```

- *Type:* str

Gdce cluster resource id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#gdce_cluster GoogleDataprocGdcServiceInstance#gdce_cluster}

---

### GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig <a name="GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig()
```


### GoogleDataprocGdcServiceInstanceTimeouts <a name="GoogleDataprocGdcServiceInstanceTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#create GoogleDataprocGdcServiceInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#delete GoogleDataprocGdcServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#update GoogleDataprocGdcServiceInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#create GoogleDataprocGdcServiceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#delete GoogleDataprocGdcServiceInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#update GoogleDataprocGdcServiceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocGdcServiceInstanceGdceClusterOutputReference <a name="GoogleDataprocGdcServiceInstanceGdceClusterOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput">gdce_cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster">gdce_cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gdce_cluster_input`<sup>Optional</sup> <a name="gdce_cluster_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput"></a>

```python
gdce_cluster_input: str
```

- *Type:* str

---

##### `gdce_cluster`<sup>Required</sup> <a name="gdce_cluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster"></a>

```python
gdce_cluster: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocGdcServiceInstanceGdceCluster
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---


### GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference <a name="GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---


### GoogleDataprocGdcServiceInstanceTimeoutsOutputReference <a name="GoogleDataprocGdcServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_service_instance

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocGdcServiceInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>]

---



