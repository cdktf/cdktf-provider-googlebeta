# `googleContainerAnalysisNote` Submodule <a name="`googleContainerAnalysisNote` Submodule" id="@cdktf/provider-google-beta.googleContainerAnalysisNote"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAnalysisNote <a name="GoogleContainerAnalysisNote" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note google_container_analysis_note}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNote(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestation_authority: GoogleContainerAnalysisNoteAttestationAuthority,
  name: str,
  expiration_time: str = None,
  id: str = None,
  long_description: str = None,
  project: str = None,
  related_note_names: typing.List[str] = None,
  related_url: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisNoteRelatedUrl]] = None,
  short_description: str = None,
  timeouts: GoogleContainerAnalysisNoteTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.attestationAuthority">attestation_authority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.expirationTime">expiration_time</a></code> | <code>str</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#id GoogleContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.longDescription">long_description</a></code> | <code>str</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#project GoogleContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.relatedNoteNames">related_note_names</a></code> | <code>typing.List[str]</code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.relatedUrl">related_url</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]]</code> | related_url block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.shortDescription">short_description</a></code> | <code>str</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation_authority`<sup>Required</sup> <a name="attestation_authority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.attestationAuthority"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#attestation_authority GoogleContainerAnalysisNote#attestation_authority}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.name"></a>

- *Type:* str

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#name GoogleContainerAnalysisNote#name}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.expirationTime"></a>

- *Type:* str

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#expiration_time GoogleContainerAnalysisNote#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#id GoogleContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `long_description`<sup>Optional</sup> <a name="long_description" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.longDescription"></a>

- *Type:* str

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#long_description GoogleContainerAnalysisNote#long_description}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#project GoogleContainerAnalysisNote#project}.

---

##### `related_note_names`<sup>Optional</sup> <a name="related_note_names" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.relatedNoteNames"></a>

- *Type:* typing.List[str]

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#related_note_names GoogleContainerAnalysisNote#related_note_names}

---

##### `related_url`<sup>Optional</sup> <a name="related_url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.relatedUrl"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]]

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#related_url GoogleContainerAnalysisNote#related_url}

---

##### `short_description`<sup>Optional</sup> <a name="short_description" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.shortDescription"></a>

- *Type:* str

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#short_description GoogleContainerAnalysisNote#short_description}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#timeouts GoogleContainerAnalysisNote#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putAttestationAuthority">put_attestation_authority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putRelatedUrl">put_related_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetExpirationTime">reset_expiration_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetLongDescription">reset_long_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedNoteNames">reset_related_note_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedUrl">reset_related_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetShortDescription">reset_short_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attestation_authority` <a name="put_attestation_authority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putAttestationAuthority"></a>

```python
def put_attestation_authority(
  hint: GoogleContainerAnalysisNoteAttestationAuthorityHint
) -> None
```

###### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putAttestationAuthority.parameter.hint"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

hint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#hint GoogleContainerAnalysisNote#hint}

---

##### `put_related_url` <a name="put_related_url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putRelatedUrl"></a>

```python
def put_related_url(
  value: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisNoteRelatedUrl]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putRelatedUrl.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#create GoogleContainerAnalysisNote#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#delete GoogleContainerAnalysisNote#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#update GoogleContainerAnalysisNote#update}.

---

##### `reset_expiration_time` <a name="reset_expiration_time" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetExpirationTime"></a>

```python
def reset_expiration_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_long_description` <a name="reset_long_description" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetLongDescription"></a>

```python
def reset_long_description() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_related_note_names` <a name="reset_related_note_names" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedNoteNames"></a>

```python
def reset_related_note_names() -> None
```

##### `reset_related_url` <a name="reset_related_url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetRelatedUrl"></a>

```python
def reset_related_url() -> None
```

##### `reset_short_description` <a name="reset_short_description" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetShortDescription"></a>

```python
def reset_short_description() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleContainerAnalysisNote resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNote.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNote.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNote.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNote.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleContainerAnalysisNote resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleContainerAnalysisNote to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleContainerAnalysisNote that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAnalysisNote to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthority">attestation_authority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrl">related_url</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList">GoogleContainerAnalysisNoteRelatedUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference">GoogleContainerAnalysisNoteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthorityInput">attestation_authority_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTimeInput">expiration_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescriptionInput">long_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNamesInput">related_note_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrlInput">related_url_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescriptionInput">short_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescription">long_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNames">related_note_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescription">short_description</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation_authority`<sup>Required</sup> <a name="attestation_authority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthority"></a>

```python
attestation_authority: GoogleContainerAnalysisNoteAttestationAuthorityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `related_url`<sup>Required</sup> <a name="related_url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrl"></a>

```python
related_url: GoogleContainerAnalysisNoteRelatedUrlList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList">GoogleContainerAnalysisNoteRelatedUrlList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeouts"></a>

```python
timeouts: GoogleContainerAnalysisNoteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference">GoogleContainerAnalysisNoteTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `attestation_authority_input`<sup>Optional</sup> <a name="attestation_authority_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.attestationAuthorityInput"></a>

```python
attestation_authority_input: GoogleContainerAnalysisNoteAttestationAuthority
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

---

##### `expiration_time_input`<sup>Optional</sup> <a name="expiration_time_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTimeInput"></a>

```python
expiration_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `long_description_input`<sup>Optional</sup> <a name="long_description_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescriptionInput"></a>

```python
long_description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `related_note_names_input`<sup>Optional</sup> <a name="related_note_names_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNamesInput"></a>

```python
related_note_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `related_url_input`<sup>Optional</sup> <a name="related_url_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedUrlInput"></a>

```python
related_url_input: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisNoteRelatedUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]]

---

##### `short_description_input`<sup>Optional</sup> <a name="short_description_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescriptionInput"></a>

```python
short_description_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleContainerAnalysisNoteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>]

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `long_description`<sup>Required</sup> <a name="long_description" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `related_note_names`<sup>Required</sup> <a name="related_note_names" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.relatedNoteNames"></a>

```python
related_note_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `short_description`<sup>Required</sup> <a name="short_description" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNote.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAnalysisNoteAttestationAuthority <a name="GoogleContainerAnalysisNoteAttestationAuthority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority(
  hint: GoogleContainerAnalysisNoteAttestationAuthorityHint
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority.property.hint">hint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a></code> | hint block. |

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority.property.hint"></a>

```python
hint: GoogleContainerAnalysisNoteAttestationAuthorityHint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

hint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#hint GoogleContainerAnalysisNote#hint}

---

### GoogleContainerAnalysisNoteAttestationAuthorityHint <a name="GoogleContainerAnalysisNoteAttestationAuthorityHint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint(
  human_readable_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName">human_readable_name</a></code> | <code>str</code> | The human readable name of this Attestation Authority, for example "qa". |

---

##### `human_readable_name`<sup>Required</sup> <a name="human_readable_name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint.property.humanReadableName"></a>

```python
human_readable_name: str
```

- *Type:* str

The human readable name of this Attestation Authority, for example "qa".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#human_readable_name GoogleContainerAnalysisNote#human_readable_name}

---

### GoogleContainerAnalysisNoteConfig <a name="GoogleContainerAnalysisNoteConfig" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  attestation_authority: GoogleContainerAnalysisNoteAttestationAuthority,
  name: str,
  expiration_time: str = None,
  id: str = None,
  long_description: str = None,
  project: str = None,
  related_note_names: typing.List[str] = None,
  related_url: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisNoteRelatedUrl]] = None,
  short_description: str = None,
  timeouts: GoogleContainerAnalysisNoteTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.attestationAuthority">attestation_authority</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | attestation_authority block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.name">name</a></code> | <code>str</code> | The name of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.expirationTime">expiration_time</a></code> | <code>str</code> | Time of expiration for this note. Leave empty if note does not expire. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#id GoogleContainerAnalysisNote#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.longDescription">long_description</a></code> | <code>str</code> | A detailed description of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#project GoogleContainerAnalysisNote#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedNoteNames">related_note_names</a></code> | <code>typing.List[str]</code> | Names of other notes related to this note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedUrl">related_url</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]]</code> | related_url block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.shortDescription">short_description</a></code> | <code>str</code> | A one sentence description of the note. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attestation_authority`<sup>Required</sup> <a name="attestation_authority" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.attestationAuthority"></a>

```python
attestation_authority: GoogleContainerAnalysisNoteAttestationAuthority
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

attestation_authority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#attestation_authority GoogleContainerAnalysisNote#attestation_authority}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#name GoogleContainerAnalysisNote#name}

---

##### `expiration_time`<sup>Optional</sup> <a name="expiration_time" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

Time of expiration for this note. Leave empty if note does not expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#expiration_time GoogleContainerAnalysisNote#expiration_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#id GoogleContainerAnalysisNote#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `long_description`<sup>Optional</sup> <a name="long_description" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.longDescription"></a>

```python
long_description: str
```

- *Type:* str

A detailed description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#long_description GoogleContainerAnalysisNote#long_description}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#project GoogleContainerAnalysisNote#project}.

---

##### `related_note_names`<sup>Optional</sup> <a name="related_note_names" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedNoteNames"></a>

```python
related_note_names: typing.List[str]
```

- *Type:* typing.List[str]

Names of other notes related to this note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#related_note_names GoogleContainerAnalysisNote#related_note_names}

---

##### `related_url`<sup>Optional</sup> <a name="related_url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.relatedUrl"></a>

```python
related_url: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisNoteRelatedUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]]

related_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#related_url GoogleContainerAnalysisNote#related_url}

---

##### `short_description`<sup>Optional</sup> <a name="short_description" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.shortDescription"></a>

```python
short_description: str
```

- *Type:* str

A one sentence description of the note.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#short_description GoogleContainerAnalysisNote#short_description}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteConfig.property.timeouts"></a>

```python
timeouts: GoogleContainerAnalysisNoteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#timeouts GoogleContainerAnalysisNote#timeouts}

---

### GoogleContainerAnalysisNoteRelatedUrl <a name="GoogleContainerAnalysisNoteRelatedUrl" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl(
  url: str,
  label: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.url">url</a></code> | <code>str</code> | Specific URL associated with the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.label">label</a></code> | <code>str</code> | Label to describe usage of the URL. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.url"></a>

```python
url: str
```

- *Type:* str

Specific URL associated with the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#url GoogleContainerAnalysisNote#url}

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl.property.label"></a>

```python
label: str
```

- *Type:* str

Label to describe usage of the URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#label GoogleContainerAnalysisNote#label}

---

### GoogleContainerAnalysisNoteTimeouts <a name="GoogleContainerAnalysisNoteTimeouts" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#create GoogleContainerAnalysisNote#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#delete GoogleContainerAnalysisNote#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#update GoogleContainerAnalysisNote#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#create GoogleContainerAnalysisNote#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#delete GoogleContainerAnalysisNote#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#update GoogleContainerAnalysisNote#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference <a name="GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput">human_readable_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName">human_readable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `human_readable_name_input`<sup>Optional</sup> <a name="human_readable_name_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableNameInput"></a>

```python
human_readable_name_input: str
```

- *Type:* str

---

##### `human_readable_name`<sup>Required</sup> <a name="human_readable_name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.humanReadableName"></a>

```python
human_readable_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAnalysisNoteAttestationAuthorityHint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

---


### GoogleContainerAnalysisNoteAttestationAuthorityOutputReference <a name="GoogleContainerAnalysisNoteAttestationAuthorityOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.putHint">put_hint</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_hint` <a name="put_hint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.putHint"></a>

```python
def put_hint(
  human_readable_name: str
) -> None
```

###### `human_readable_name`<sup>Required</sup> <a name="human_readable_name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.putHint.parameter.humanReadableName"></a>

- *Type:* str

The human readable name of this Attestation Authority, for example "qa".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_container_analysis_note#human_readable_name GoogleContainerAnalysisNote#human_readable_name}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint">hint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput">hint_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hint`<sup>Required</sup> <a name="hint" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hint"></a>

```python
hint: GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference">GoogleContainerAnalysisNoteAttestationAuthorityHintOutputReference</a>

---

##### `hint_input`<sup>Optional</sup> <a name="hint_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.hintInput"></a>

```python
hint_input: GoogleContainerAnalysisNoteAttestationAuthorityHint
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityHint">GoogleContainerAnalysisNoteAttestationAuthorityHint</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthorityOutputReference.property.internalValue"></a>

```python
internal_value: GoogleContainerAnalysisNoteAttestationAuthority
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteAttestationAuthority">GoogleContainerAnalysisNoteAttestationAuthority</a>

---


### GoogleContainerAnalysisNoteRelatedUrlList <a name="GoogleContainerAnalysisNoteRelatedUrlList" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleContainerAnalysisNoteRelatedUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleContainerAnalysisNoteRelatedUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]]

---


### GoogleContainerAnalysisNoteRelatedUrlOutputReference <a name="GoogleContainerAnalysisNoteRelatedUrlOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resetLabel">reset_label</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_label` <a name="reset_label" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerAnalysisNoteRelatedUrl]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteRelatedUrl">GoogleContainerAnalysisNoteRelatedUrl</a>]

---


### GoogleContainerAnalysisNoteTimeoutsOutputReference <a name="GoogleContainerAnalysisNoteTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_container_analysis_note

googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleContainerAnalysisNoteTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleContainerAnalysisNote.GoogleContainerAnalysisNoteTimeouts">GoogleContainerAnalysisNoteTimeouts</a>]

---



