# `googleDataprocGdcApplicationEnvironment` Submodule <a name="`googleDataprocGdcApplicationEnvironment` Submodule" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocGdcApplicationEnvironment <a name="GoogleDataprocGdcApplicationEnvironment" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment google_dataproc_gdc_application_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_application_environment

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment(
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
  serviceinstance: str,
  annotations: typing.Mapping[str] = None,
  application_environment_id: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  namespace: str = None,
  project: str = None,
  spark_application_environment_config: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig = None,
  timeouts: GoogleDataprocGdcApplicationEnvironmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.serviceinstance">serviceinstance</a></code> | <code>str</code> | The id of the service instance to which this application environment belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | The annotations to associate with this application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.applicationEnvironmentId">application_environment_id</a></code> | <code>str</code> | The id of the application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#id GoogleDataprocGdcApplicationEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this application environment. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#project GoogleDataprocGdcApplicationEnvironment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.sparkApplicationEnvironmentConfig">spark_application_environment_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | spark_application_environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.location"></a>

- *Type:* str

The location of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#location GoogleDataprocGdcApplicationEnvironment#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.serviceinstance"></a>

- *Type:* str

The id of the service instance to which this application environment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#serviceinstance GoogleDataprocGdcApplicationEnvironment#serviceinstance}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

The annotations to associate with this application environment.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#annotations GoogleDataprocGdcApplicationEnvironment#annotations}

---

##### `application_environment_id`<sup>Optional</sup> <a name="application_environment_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.applicationEnvironmentId"></a>

- *Type:* str

The id of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#application_environment_id GoogleDataprocGdcApplicationEnvironment#application_environment_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.displayName"></a>

- *Type:* str

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#display_name GoogleDataprocGdcApplicationEnvironment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#id GoogleDataprocGdcApplicationEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels to associate with this application environment. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#labels GoogleDataprocGdcApplicationEnvironment#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.namespace"></a>

- *Type:* str

The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#namespace GoogleDataprocGdcApplicationEnvironment#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#project GoogleDataprocGdcApplicationEnvironment#project}.

---

##### `spark_application_environment_config`<sup>Optional</sup> <a name="spark_application_environment_config" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.sparkApplicationEnvironmentConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

spark_application_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#spark_application_environment_config GoogleDataprocGdcApplicationEnvironment#spark_application_environment_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#timeouts GoogleDataprocGdcApplicationEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig">put_spark_application_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetApplicationEnvironmentId">reset_application_environment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig">reset_spark_application_environment_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_spark_application_environment_config` <a name="put_spark_application_environment_config" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig"></a>

```python
def put_spark_application_environment_config(
  default_properties: typing.Mapping[str] = None,
  default_version: str = None
) -> None
```

###### `default_properties`<sup>Optional</sup> <a name="default_properties" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig.parameter.defaultProperties"></a>

- *Type:* typing.Mapping[str]

A map of default Spark properties to apply to workloads in this application environment.

These defaults may be overridden by per-application properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#default_properties GoogleDataprocGdcApplicationEnvironment#default_properties}

---

###### `default_version`<sup>Optional</sup> <a name="default_version" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig.parameter.defaultVersion"></a>

- *Type:* str

The default Dataproc version to use for applications submitted to this application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#default_version GoogleDataprocGdcApplicationEnvironment#default_version}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#create GoogleDataprocGdcApplicationEnvironment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#delete GoogleDataprocGdcApplicationEnvironment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#update GoogleDataprocGdcApplicationEnvironment#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_application_environment_id` <a name="reset_application_environment_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetApplicationEnvironmentId"></a>

```python
def reset_application_environment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_spark_application_environment_config` <a name="reset_spark_application_environment_config" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig"></a>

```python
def reset_spark_application_environment_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_application_environment

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_application_environment

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_application_environment

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_application_environment

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataprocGdcApplicationEnvironment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataprocGdcApplicationEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocGdcApplicationEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig">spark_application_environment_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference">GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput">application_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstanceInput">serviceinstance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput">spark_application_environment_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentId">application_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstance">serviceinstance</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spark_application_environment_config`<sup>Required</sup> <a name="spark_application_environment_config" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig"></a>

```python
spark_application_environment_config: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeouts"></a>

```python
timeouts: GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference">GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_environment_id_input`<sup>Optional</sup> <a name="application_environment_id_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput"></a>

```python
application_environment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `serviceinstance_input`<sup>Optional</sup> <a name="serviceinstance_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstanceInput"></a>

```python
serviceinstance_input: str
```

- *Type:* str

---

##### `spark_application_environment_config_input`<sup>Optional</sup> <a name="spark_application_environment_config_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput"></a>

```python
spark_application_environment_config_input: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataprocGdcApplicationEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `application_environment_id`<sup>Required</sup> <a name="application_environment_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentId"></a>

```python
application_environment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstance"></a>

```python
serviceinstance: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocGdcApplicationEnvironmentConfig <a name="GoogleDataprocGdcApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_application_environment

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  serviceinstance: str,
  annotations: typing.Mapping[str] = None,
  application_environment_id: str = None,
  display_name: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  namespace: str = None,
  project: str = None,
  spark_application_environment_config: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig = None,
  timeouts: GoogleDataprocGdcApplicationEnvironmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.location">location</a></code> | <code>str</code> | The location of the application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.serviceinstance">serviceinstance</a></code> | <code>str</code> | The id of the service instance to which this application environment belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | The annotations to associate with this application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId">application_environment_id</a></code> | <code>str</code> | The id of the application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.displayName">display_name</a></code> | <code>str</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#id GoogleDataprocGdcApplicationEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels to associate with this application environment. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.namespace">namespace</a></code> | <code>str</code> | The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#project GoogleDataprocGdcApplicationEnvironment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig">spark_application_environment_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | spark_application_environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#location GoogleDataprocGdcApplicationEnvironment#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.serviceinstance"></a>

```python
serviceinstance: str
```

- *Type:* str

The id of the service instance to which this application environment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#serviceinstance GoogleDataprocGdcApplicationEnvironment#serviceinstance}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The annotations to associate with this application environment.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#annotations GoogleDataprocGdcApplicationEnvironment#annotations}

---

##### `application_environment_id`<sup>Optional</sup> <a name="application_environment_id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId"></a>

```python
application_environment_id: str
```

- *Type:* str

The id of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#application_environment_id GoogleDataprocGdcApplicationEnvironment#application_environment_id}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#display_name GoogleDataprocGdcApplicationEnvironment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#id GoogleDataprocGdcApplicationEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels to associate with this application environment. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#labels GoogleDataprocGdcApplicationEnvironment#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#namespace GoogleDataprocGdcApplicationEnvironment#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#project GoogleDataprocGdcApplicationEnvironment#project}.

---

##### `spark_application_environment_config`<sup>Optional</sup> <a name="spark_application_environment_config" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig"></a>

```python
spark_application_environment_config: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

spark_application_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#spark_application_environment_config GoogleDataprocGdcApplicationEnvironment#spark_application_environment_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.timeouts"></a>

```python
timeouts: GoogleDataprocGdcApplicationEnvironmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#timeouts GoogleDataprocGdcApplicationEnvironment#timeouts}

---

### GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig <a name="GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_application_environment

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig(
  default_properties: typing.Mapping[str] = None,
  default_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties">default_properties</a></code> | <code>typing.Mapping[str]</code> | A map of default Spark properties to apply to workloads in this application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion">default_version</a></code> | <code>str</code> | The default Dataproc version to use for applications submitted to this application environment. |

---

##### `default_properties`<sup>Optional</sup> <a name="default_properties" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties"></a>

```python
default_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A map of default Spark properties to apply to workloads in this application environment.

These defaults may be overridden by per-application properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#default_properties GoogleDataprocGdcApplicationEnvironment#default_properties}

---

##### `default_version`<sup>Optional</sup> <a name="default_version" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion"></a>

```python
default_version: str
```

- *Type:* str

The default Dataproc version to use for applications submitted to this application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#default_version GoogleDataprocGdcApplicationEnvironment#default_version}

---

### GoogleDataprocGdcApplicationEnvironmentTimeouts <a name="GoogleDataprocGdcApplicationEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_application_environment

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#create GoogleDataprocGdcApplicationEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#delete GoogleDataprocGdcApplicationEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#update GoogleDataprocGdcApplicationEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#create GoogleDataprocGdcApplicationEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#delete GoogleDataprocGdcApplicationEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.23.0/docs/resources/google_dataproc_gdc_application_environment#update GoogleDataprocGdcApplicationEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference <a name="GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_application_environment

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties">reset_default_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion">reset_default_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_default_properties` <a name="reset_default_properties" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties"></a>

```python
def reset_default_properties() -> None
```

##### `reset_default_version` <a name="reset_default_version" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion"></a>

```python
def reset_default_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput">default_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput">default_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties">default_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion">default_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_properties_input`<sup>Optional</sup> <a name="default_properties_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput"></a>

```python
default_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_version_input`<sup>Optional</sup> <a name="default_version_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput"></a>

```python
default_version_input: str
```

- *Type:* str

---

##### `default_properties`<sup>Required</sup> <a name="default_properties" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties"></a>

```python
default_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `default_version`<sup>Required</sup> <a name="default_version" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion"></a>

```python
default_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---


### GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference <a name="GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_gdc_application_environment

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataprocGdcApplicationEnvironmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>]

---



