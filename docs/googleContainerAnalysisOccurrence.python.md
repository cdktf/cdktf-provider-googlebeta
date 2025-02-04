# `googleContainerAnalysisOccurrence` Submodule <a name="`googleContainerAnalysisOccurrence` Submodule" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAnalysisOccurrence <a name="GoogleContainerAnalysisOccurrence" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence google_container_analysis_occurrence}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestation: GoogleContainerAnalysisOccurrenceAttestation,
  note_name: str,
  resource_uri: str,
  id: str = None,
  project: str = None,
  remediation: str = None,
  timeouts: GoogleContainerAnalysisOccurrenceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a></code> | attestation block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.noteName">note_name</a></code> | <code>str</code> | The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID]. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.resourceUri">resource_uri</a></code> | <code>str</code> | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#id GoogleContainerAnalysisOccurrence#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#project GoogleContainerAnalysisOccurrence#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.remediation">remediation</a></code> | <code>str</code> | A description of actions that can be taken to remedy the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.attestation"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

attestation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#attestation GoogleContainerAnalysisOccurrence#attestation}

---

##### `note_name`<sup>Required</sup> <a name="note_name" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.noteName"></a>

- *Type:* str

The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID].

This field can be used as a
filter in list requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#note_name GoogleContainerAnalysisOccurrence#note_name}

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.resourceUri"></a>

- *Type:* str

Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#resource_uri GoogleContainerAnalysisOccurrence#resource_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#id GoogleContainerAnalysisOccurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#project GoogleContainerAnalysisOccurrence#project}.

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.remediation"></a>

- *Type:* str

A description of actions that can be taken to remedy the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#remediation GoogleContainerAnalysisOccurrence#remediation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#timeouts GoogleContainerAnalysisOccurrence#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putAttestation">put_attestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetRemediation">reset_remediation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attestation` <a name="put_attestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putAttestation"></a>

```python
def put_attestation(
  serialized_payload: str,
  signatures: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisOccurrenceAttestationSignatures]]
) -> None
```

###### `serialized_payload`<sup>Required</sup> <a name="serialized_payload" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putAttestation.parameter.serializedPayload"></a>

- *Type:* str

The serialized payload that is verified by one or more signatures. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#serialized_payload GoogleContainerAnalysisOccurrence#serialized_payload}

---

###### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putAttestation.parameter.signatures"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>]]

signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#signatures GoogleContainerAnalysisOccurrence#signatures}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#create GoogleContainerAnalysisOccurrence#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#delete GoogleContainerAnalysisOccurrence#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#update GoogleContainerAnalysisOccurrence#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_remediation` <a name="reset_remediation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetRemediation"></a>

```python
def reset_remediation() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleContainerAnalysisOccurrence resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleContainerAnalysisOccurrence resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleContainerAnalysisOccurrence to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleContainerAnalysisOccurrence that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAnalysisOccurrence to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference">GoogleContainerAnalysisOccurrenceAttestationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference">GoogleContainerAnalysisOccurrenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestationInput">attestation_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteNameInput">note_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediationInput">remediation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUriInput">resource_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteName">note_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediation">remediation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUri">resource_uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestation"></a>

```python
attestation: GoogleContainerAnalysisOccurrenceAttestationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference">GoogleContainerAnalysisOccurrenceAttestationOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeouts"></a>

```python
timeouts: GoogleContainerAnalysisOccurrenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference">GoogleContainerAnalysisOccurrenceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `attestation_input`<sup>Optional</sup> <a name="attestation_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.attestationInput"></a>

```python
attestation_input: GoogleContainerAnalysisOccurrenceAttestation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `note_name_input`<sup>Optional</sup> <a name="note_name_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteNameInput"></a>

```python
note_name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `remediation_input`<sup>Optional</sup> <a name="remediation_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediationInput"></a>

```python
remediation_input: str
```

- *Type:* str

---

##### `resource_uri_input`<sup>Optional</sup> <a name="resource_uri_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUriInput"></a>

```python
resource_uri_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleContainerAnalysisOccurrenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `note_name`<sup>Required</sup> <a name="note_name" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.noteName"></a>

```python
note_name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrence.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAnalysisOccurrenceAttestation <a name="GoogleContainerAnalysisOccurrenceAttestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation(
  serialized_payload: str,
  signatures: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisOccurrenceAttestationSignatures]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.serializedPayload">serialized_payload</a></code> | <code>str</code> | The serialized payload that is verified by one or more signatures. A base64-encoded string. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.signatures">signatures</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>]]</code> | signatures block. |

---

##### `serialized_payload`<sup>Required</sup> <a name="serialized_payload" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.serializedPayload"></a>

```python
serialized_payload: str
```

- *Type:* str

The serialized payload that is verified by one or more signatures. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#serialized_payload GoogleContainerAnalysisOccurrence#serialized_payload}

---

##### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation.property.signatures"></a>

```python
signatures: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisOccurrenceAttestationSignatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>]]

signatures block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#signatures GoogleContainerAnalysisOccurrence#signatures}

---

### GoogleContainerAnalysisOccurrenceAttestationSignatures <a name="GoogleContainerAnalysisOccurrenceAttestationSignatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures(
  public_key_id: str,
  signature: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId">public_key_id</a></code> | <code>str</code> | The identifier for the public key that verifies this signature. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.signature">signature</a></code> | <code>str</code> | The content of the signature, an opaque bytestring. |

---

##### `public_key_id`<sup>Required</sup> <a name="public_key_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.publicKeyId"></a>

```python
public_key_id: str
```

- *Type:* str

The identifier for the public key that verifies this signature.

MUST be an RFC3986 conformant
URI. * When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:

* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
  for more details on this scheme.

  * 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):

  * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#public_key_id GoogleContainerAnalysisOccurrence#public_key_id}

---

##### `signature`<sup>Optional</sup> <a name="signature" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures.property.signature"></a>

```python
signature: str
```

- *Type:* str

The content of the signature, an opaque bytestring.

The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#signature GoogleContainerAnalysisOccurrence#signature}

---

### GoogleContainerAnalysisOccurrenceConfig <a name="GoogleContainerAnalysisOccurrenceConfig" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestation: GoogleContainerAnalysisOccurrenceAttestation,
  note_name: str,
  resource_uri: str,
  id: str = None,
  project: str = None,
  remediation: str = None,
  timeouts: GoogleContainerAnalysisOccurrenceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.attestation">attestation</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a></code> | attestation block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.noteName">note_name</a></code> | <code>str</code> | The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID]. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.resourceUri">resource_uri</a></code> | <code>str</code> | Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#id GoogleContainerAnalysisOccurrence#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#project GoogleContainerAnalysisOccurrence#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.remediation">remediation</a></code> | <code>str</code> | A description of actions that can be taken to remedy the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation`<sup>Required</sup> <a name="attestation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.attestation"></a>

```python
attestation: GoogleContainerAnalysisOccurrenceAttestation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

attestation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#attestation GoogleContainerAnalysisOccurrence#attestation}

---

##### `note_name`<sup>Required</sup> <a name="note_name" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.noteName"></a>

```python
note_name: str
```

- *Type:* str

The analysis note associated with this occurrence, in the form of projects/[PROJECT]/notes/[NOTE_ID].

This field can be used as a
filter in list requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#note_name GoogleContainerAnalysisOccurrence#note_name}

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

Required. Immutable. A URI that represents the resource for which the occurrence applies. For example, https://gcr.io/project/image@sha256:123abc for a Docker image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#resource_uri GoogleContainerAnalysisOccurrence#resource_uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#id GoogleContainerAnalysisOccurrence#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#project GoogleContainerAnalysisOccurrence#project}.

---

##### `remediation`<sup>Optional</sup> <a name="remediation" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

A description of actions that can be taken to remedy the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#remediation GoogleContainerAnalysisOccurrence#remediation}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceConfig.property.timeouts"></a>

```python
timeouts: GoogleContainerAnalysisOccurrenceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#timeouts GoogleContainerAnalysisOccurrence#timeouts}

---

### GoogleContainerAnalysisOccurrenceTimeouts <a name="GoogleContainerAnalysisOccurrenceTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#create GoogleContainerAnalysisOccurrence#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#delete GoogleContainerAnalysisOccurrence#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#update GoogleContainerAnalysisOccurrence#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#create GoogleContainerAnalysisOccurrence#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#delete GoogleContainerAnalysisOccurrence#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_container_analysis_occurrence#update GoogleContainerAnalysisOccurrence#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAnalysisOccurrenceAttestationOutputReference <a name="GoogleContainerAnalysisOccurrenceAttestationOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.putSignatures">put_signatures</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_signatures` <a name="put_signatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.putSignatures"></a>

```python
def put_signatures(
  value: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisOccurrenceAttestationSignatures]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.putSignatures.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signatures">signatures</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList">GoogleContainerAnalysisOccurrenceAttestationSignaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput">serialized_payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput">signatures_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload">serialized_payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `signatures`<sup>Required</sup> <a name="signatures" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signatures"></a>

```python
signatures: GoogleContainerAnalysisOccurrenceAttestationSignaturesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList">GoogleContainerAnalysisOccurrenceAttestationSignaturesList</a>

---

##### `serialized_payload_input`<sup>Optional</sup> <a name="serialized_payload_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayloadInput"></a>

```python
serialized_payload_input: str
```

- *Type:* str

---

##### `signatures_input`<sup>Optional</sup> <a name="signatures_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.signaturesInput"></a>

```python
signatures_input: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisOccurrenceAttestationSignatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>]]

---

##### `serialized_payload`<sup>Required</sup> <a name="serialized_payload" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.serializedPayload"></a>

```python
serialized_payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAnalysisOccurrenceAttestation
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestation">GoogleContainerAnalysisOccurrenceAttestation</a>

---


### GoogleContainerAnalysisOccurrenceAttestationSignaturesList <a name="GoogleContainerAnalysisOccurrenceAttestationSignaturesList" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisOccurrenceAttestationSignatures]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>]]

---


### GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference <a name="GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature">reset_signature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_signature` <a name="reset_signature" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.resetSignature"></a>

```python
def reset_signature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput">public_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput">signature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId">public_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature">signature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `public_key_id_input`<sup>Optional</sup> <a name="public_key_id_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyIdInput"></a>

```python
public_key_id_input: str
```

- *Type:* str

---

##### `signature_input`<sup>Optional</sup> <a name="signature_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signatureInput"></a>

```python
signature_input: str
```

- *Type:* str

---

##### `public_key_id`<sup>Required</sup> <a name="public_key_id" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.publicKeyId"></a>

```python
public_key_id: str
```

- *Type:* str

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.signature"></a>

```python
signature: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignaturesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerAnalysisOccurrenceAttestationSignatures]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceAttestationSignatures">GoogleContainerAnalysisOccurrenceAttestationSignatures</a>]

---


### GoogleContainerAnalysisOccurrenceTimeoutsOutputReference <a name="GoogleContainerAnalysisOccurrenceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_occurrence

googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerAnalysisOccurrenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisOccurrence.GoogleContainerAnalysisOccurrenceTimeouts">GoogleContainerAnalysisOccurrenceTimeouts</a>]

---



