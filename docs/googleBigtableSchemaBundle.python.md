# `googleBigtableSchemaBundle` Submodule <a name="`googleBigtableSchemaBundle` Submodule" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigtableSchemaBundle <a name="GoogleBigtableSchemaBundle" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle google_bigtable_schema_bundle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_schema_bundle

googleBigtableSchemaBundle.GoogleBigtableSchemaBundle(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  proto_schema: GoogleBigtableSchemaBundleProtoSchema,
  schema_bundle_id: str,
  id: str = None,
  ignore_warnings: typing.Union[bool, IResolvable] = None,
  instance: str = None,
  project: str = None,
  table: str = None,
  timeouts: GoogleBigtableSchemaBundleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.protoSchema">proto_schema</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a></code> | proto_schema block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.schemaBundleId">schema_bundle_id</a></code> | <code>str</code> | The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#id GoogleBigtableSchemaBundle#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.ignoreWarnings">ignore_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, allow backwards incompatible changes. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The name of the instance to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#project GoogleBigtableSchemaBundle#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.table">table</a></code> | <code>str</code> | The name of the table to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `proto_schema`<sup>Required</sup> <a name="proto_schema" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.protoSchema"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a>

proto_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#proto_schema GoogleBigtableSchemaBundle#proto_schema}

---

##### `schema_bundle_id`<sup>Required</sup> <a name="schema_bundle_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.schemaBundleId"></a>

- *Type:* str

The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#schema_bundle_id GoogleBigtableSchemaBundle#schema_bundle_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#id GoogleBigtableSchemaBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_warnings`<sup>Optional</sup> <a name="ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.ignoreWarnings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, allow backwards incompatible changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#ignore_warnings GoogleBigtableSchemaBundle#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.instance"></a>

- *Type:* str

The name of the instance to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#instance GoogleBigtableSchemaBundle#instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#project GoogleBigtableSchemaBundle#project}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.table"></a>

- *Type:* str

The name of the table to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#table GoogleBigtableSchemaBundle#table}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#timeouts GoogleBigtableSchemaBundle#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putProtoSchema">put_proto_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetIgnoreWarnings">reset_ignore_warnings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetInstance">reset_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetTable">reset_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_proto_schema` <a name="put_proto_schema" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putProtoSchema"></a>

```python
def put_proto_schema(
  proto_descriptors: str
) -> None
```

###### `proto_descriptors`<sup>Required</sup> <a name="proto_descriptors" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putProtoSchema.parameter.protoDescriptors"></a>

- *Type:* str

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#proto_descriptors GoogleBigtableSchemaBundle#proto_descriptors}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#create GoogleBigtableSchemaBundle#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#delete GoogleBigtableSchemaBundle#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#update GoogleBigtableSchemaBundle#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_warnings` <a name="reset_ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetIgnoreWarnings"></a>

```python
def reset_ignore_warnings() -> None
```

##### `reset_instance` <a name="reset_instance" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetInstance"></a>

```python
def reset_instance() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetTable"></a>

```python
def reset_table() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigtableSchemaBundle resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_schema_bundle

googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_schema_bundle

googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_schema_bundle

googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_schema_bundle

googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigtableSchemaBundle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigtableSchemaBundle to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigtableSchemaBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigtableSchemaBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.protoSchema">proto_schema</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference">GoogleBigtableSchemaBundleProtoSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference">GoogleBigtableSchemaBundleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.ignoreWarningsInput">ignore_warnings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.protoSchemaInput">proto_schema_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.schemaBundleIdInput">schema_bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.ignoreWarnings">ignore_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.schemaBundleId">schema_bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.table">table</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `proto_schema`<sup>Required</sup> <a name="proto_schema" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.protoSchema"></a>

```python
proto_schema: GoogleBigtableSchemaBundleProtoSchemaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference">GoogleBigtableSchemaBundleProtoSchemaOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.timeouts"></a>

```python
timeouts: GoogleBigtableSchemaBundleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference">GoogleBigtableSchemaBundleTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_warnings_input`<sup>Optional</sup> <a name="ignore_warnings_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.ignoreWarningsInput"></a>

```python
ignore_warnings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `proto_schema_input`<sup>Optional</sup> <a name="proto_schema_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.protoSchemaInput"></a>

```python
proto_schema_input: GoogleBigtableSchemaBundleProtoSchema
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a>

---

##### `schema_bundle_id_input`<sup>Optional</sup> <a name="schema_bundle_id_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.schemaBundleIdInput"></a>

```python
schema_bundle_id_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigtableSchemaBundleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_warnings`<sup>Required</sup> <a name="ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.ignoreWarnings"></a>

```python
ignore_warnings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `schema_bundle_id`<sup>Required</sup> <a name="schema_bundle_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.schemaBundleId"></a>

```python
schema_bundle_id: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.table"></a>

```python
table: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundle.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigtableSchemaBundleConfig <a name="GoogleBigtableSchemaBundleConfig" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_schema_bundle

googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  proto_schema: GoogleBigtableSchemaBundleProtoSchema,
  schema_bundle_id: str,
  id: str = None,
  ignore_warnings: typing.Union[bool, IResolvable] = None,
  instance: str = None,
  project: str = None,
  table: str = None,
  timeouts: GoogleBigtableSchemaBundleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.protoSchema">proto_schema</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a></code> | proto_schema block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.schemaBundleId">schema_bundle_id</a></code> | <code>str</code> | The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#id GoogleBigtableSchemaBundle#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.ignoreWarnings">ignore_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, allow backwards incompatible changes. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.instance">instance</a></code> | <code>str</code> | The name of the instance to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#project GoogleBigtableSchemaBundle#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.table">table</a></code> | <code>str</code> | The name of the table to create the schema bundle within. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `proto_schema`<sup>Required</sup> <a name="proto_schema" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.protoSchema"></a>

```python
proto_schema: GoogleBigtableSchemaBundleProtoSchema
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a>

proto_schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#proto_schema GoogleBigtableSchemaBundle#proto_schema}

---

##### `schema_bundle_id`<sup>Required</sup> <a name="schema_bundle_id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.schemaBundleId"></a>

```python
schema_bundle_id: str
```

- *Type:* str

The unique name of the schema bundle in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#schema_bundle_id GoogleBigtableSchemaBundle#schema_bundle_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#id GoogleBigtableSchemaBundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_warnings`<sup>Optional</sup> <a name="ignore_warnings" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.ignoreWarnings"></a>

```python
ignore_warnings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, allow backwards incompatible changes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#ignore_warnings GoogleBigtableSchemaBundle#ignore_warnings}

---

##### `instance`<sup>Optional</sup> <a name="instance" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The name of the instance to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#instance GoogleBigtableSchemaBundle#instance}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#project GoogleBigtableSchemaBundle#project}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.table"></a>

```python
table: str
```

- *Type:* str

The name of the table to create the schema bundle within.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#table GoogleBigtableSchemaBundle#table}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleConfig.property.timeouts"></a>

```python
timeouts: GoogleBigtableSchemaBundleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#timeouts GoogleBigtableSchemaBundle#timeouts}

---

### GoogleBigtableSchemaBundleProtoSchema <a name="GoogleBigtableSchemaBundleProtoSchema" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_schema_bundle

googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema(
  proto_descriptors: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema.property.protoDescriptors">proto_descriptors</a></code> | <code>str</code> | Base64 encoded content of the file. |

---

##### `proto_descriptors`<sup>Required</sup> <a name="proto_descriptors" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema.property.protoDescriptors"></a>

```python
proto_descriptors: str
```

- *Type:* str

Base64 encoded content of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#proto_descriptors GoogleBigtableSchemaBundle#proto_descriptors}

---

### GoogleBigtableSchemaBundleTimeouts <a name="GoogleBigtableSchemaBundleTimeouts" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_schema_bundle

googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#create GoogleBigtableSchemaBundle#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#delete GoogleBigtableSchemaBundle#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#update GoogleBigtableSchemaBundle#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#create GoogleBigtableSchemaBundle#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#delete GoogleBigtableSchemaBundle#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.48.0/docs/resources/google_bigtable_schema_bundle#update GoogleBigtableSchemaBundle#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigtableSchemaBundleProtoSchemaOutputReference <a name="GoogleBigtableSchemaBundleProtoSchemaOutputReference" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_schema_bundle

googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput">proto_descriptors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors">proto_descriptors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `proto_descriptors_input`<sup>Optional</sup> <a name="proto_descriptors_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptorsInput"></a>

```python
proto_descriptors_input: str
```

- *Type:* str

---

##### `proto_descriptors`<sup>Required</sup> <a name="proto_descriptors" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.protoDescriptors"></a>

```python
proto_descriptors: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchemaOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigtableSchemaBundleProtoSchema
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleProtoSchema">GoogleBigtableSchemaBundleProtoSchema</a>

---


### GoogleBigtableSchemaBundleTimeoutsOutputReference <a name="GoogleBigtableSchemaBundleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigtable_schema_bundle

googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigtableSchemaBundleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigtableSchemaBundle.GoogleBigtableSchemaBundleTimeouts">GoogleBigtableSchemaBundleTimeouts</a>]

---



