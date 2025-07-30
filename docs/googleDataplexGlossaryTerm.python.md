# `googleDataplexGlossaryTerm` Submodule <a name="`googleDataplexGlossaryTerm` Submodule" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexGlossaryTerm <a name="GoogleDataplexGlossaryTerm" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term google_dataplex_glossary_term}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_glossary_term

googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm(
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
  parent: str,
  description: str = None,
  display_name: str = None,
  glossary_id: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  term_id: str = None,
  timeouts: GoogleDataplexGlossaryTermTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where the glossary term should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The immediate parent of the GlossaryTerm in the resource-hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.description">description</a></code> | <code>str</code> | The user-mutable description of the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly display name of the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.glossaryId">glossary_id</a></code> | <code>str</code> | The glossary id for creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#id GoogleDataplexGlossaryTerm#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#project GoogleDataplexGlossaryTerm#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.termId">term_id</a></code> | <code>str</code> | The term id for creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.location"></a>

- *Type:* str

The location where the glossary term should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#location GoogleDataplexGlossaryTerm#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.parent"></a>

- *Type:* str

The immediate parent of the GlossaryTerm in the resource-hierarchy.

It can either be a Glossary or a Term. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/terms/{termId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#parent GoogleDataplexGlossaryTerm#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.description"></a>

- *Type:* str

The user-mutable description of the GlossaryTerm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#description GoogleDataplexGlossaryTerm#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly display name of the GlossaryTerm.

This is user-mutable. This will be same as the termId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#display_name GoogleDataplexGlossaryTerm#display_name}

---

##### `glossary_id`<sup>Optional</sup> <a name="glossary_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.glossaryId"></a>

- *Type:* str

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#glossary_id GoogleDataplexGlossaryTerm#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#id GoogleDataplexGlossaryTerm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the GlossaryTerm.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#labels GoogleDataplexGlossaryTerm#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#project GoogleDataplexGlossaryTerm#project}.

---

##### `term_id`<sup>Optional</sup> <a name="term_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.termId"></a>

- *Type:* str

The term id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#term_id GoogleDataplexGlossaryTerm#term_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#timeouts GoogleDataplexGlossaryTerm#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetGlossaryId">reset_glossary_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetTermId">reset_term_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#create GoogleDataplexGlossaryTerm#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#delete GoogleDataplexGlossaryTerm#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#update GoogleDataplexGlossaryTerm#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_glossary_id` <a name="reset_glossary_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetGlossaryId"></a>

```python
def reset_glossary_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_term_id` <a name="reset_term_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetTermId"></a>

```python
def reset_term_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataplexGlossaryTerm resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_glossary_term

googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_glossary_term

googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_glossary_term

googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_glossary_term

googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataplexGlossaryTerm resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataplexGlossaryTerm to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataplexGlossaryTerm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexGlossaryTerm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference">GoogleDataplexGlossaryTermTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.glossaryIdInput">glossary_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.termIdInput">term_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.glossaryId">glossary_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.termId">term_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.timeouts"></a>

```python
timeouts: GoogleDataplexGlossaryTermTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference">GoogleDataplexGlossaryTermTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `glossary_id_input`<sup>Optional</sup> <a name="glossary_id_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.glossaryIdInput"></a>

```python
glossary_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `term_id_input`<sup>Optional</sup> <a name="term_id_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.termIdInput"></a>

```python
term_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDataplexGlossaryTermTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `glossary_id`<sup>Required</sup> <a name="glossary_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.glossaryId"></a>

```python
glossary_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `term_id`<sup>Required</sup> <a name="term_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.termId"></a>

```python
term_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTerm.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexGlossaryTermConfig <a name="GoogleDataplexGlossaryTermConfig" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_glossary_term

googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  parent: str,
  description: str = None,
  display_name: str = None,
  glossary_id: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  term_id: str = None,
  timeouts: GoogleDataplexGlossaryTermTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.location">location</a></code> | <code>str</code> | The location where the glossary term should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.parent">parent</a></code> | <code>str</code> | The immediate parent of the GlossaryTerm in the resource-hierarchy. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.description">description</a></code> | <code>str</code> | The user-mutable description of the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly display name of the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.glossaryId">glossary_id</a></code> | <code>str</code> | The glossary id for creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#id GoogleDataplexGlossaryTerm#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the GlossaryTerm. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#project GoogleDataplexGlossaryTerm#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.termId">term_id</a></code> | <code>str</code> | The term id for creation. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where the glossary term should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#location GoogleDataplexGlossaryTerm#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The immediate parent of the GlossaryTerm in the resource-hierarchy.

It can either be a Glossary or a Term. Format: projects/{projectId}/locations/{locationId}/glossaries/{glossaryId} OR projects/{projectId}/locations/{locationId}/glossaries/{glossaryId}/terms/{termId}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#parent GoogleDataplexGlossaryTerm#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The user-mutable description of the GlossaryTerm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#description GoogleDataplexGlossaryTerm#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly display name of the GlossaryTerm.

This is user-mutable. This will be same as the termId, if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#display_name GoogleDataplexGlossaryTerm#display_name}

---

##### `glossary_id`<sup>Optional</sup> <a name="glossary_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.glossaryId"></a>

```python
glossary_id: str
```

- *Type:* str

The glossary id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#glossary_id GoogleDataplexGlossaryTerm#glossary_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#id GoogleDataplexGlossaryTerm#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the GlossaryTerm.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#labels GoogleDataplexGlossaryTerm#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#project GoogleDataplexGlossaryTerm#project}.

---

##### `term_id`<sup>Optional</sup> <a name="term_id" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.termId"></a>

```python
term_id: str
```

- *Type:* str

The term id for creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#term_id GoogleDataplexGlossaryTerm#term_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermConfig.property.timeouts"></a>

```python
timeouts: GoogleDataplexGlossaryTermTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#timeouts GoogleDataplexGlossaryTerm#timeouts}

---

### GoogleDataplexGlossaryTermTimeouts <a name="GoogleDataplexGlossaryTermTimeouts" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_glossary_term

googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#create GoogleDataplexGlossaryTerm#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#delete GoogleDataplexGlossaryTerm#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#update GoogleDataplexGlossaryTerm#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#create GoogleDataplexGlossaryTerm#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#delete GoogleDataplexGlossaryTerm#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.46.0/docs/resources/google_dataplex_glossary_term#update GoogleDataplexGlossaryTerm#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexGlossaryTermTimeoutsOutputReference <a name="GoogleDataplexGlossaryTermTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataplex_glossary_term

googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDataplexGlossaryTermTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDataplexGlossaryTerm.GoogleDataplexGlossaryTermTimeouts">GoogleDataplexGlossaryTermTimeouts</a>]

---



