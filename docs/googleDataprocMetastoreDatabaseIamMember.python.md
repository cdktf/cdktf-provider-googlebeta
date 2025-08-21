# `googleDataprocMetastoreDatabaseIamMember` Submodule <a name="`googleDataprocMetastoreDatabaseIamMember` Submodule" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreDatabaseIamMember <a name="GoogleDataprocMetastoreDatabaseIamMember" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member google_dataproc_metastore_database_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_database_iam_member

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  member: str,
  role: str,
  service_id: str,
  condition: GoogleDataprocMetastoreDatabaseIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#database GoogleDataprocMetastoreDatabaseIamMember#database}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#member GoogleDataprocMetastoreDatabaseIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#role GoogleDataprocMetastoreDatabaseIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#service_id GoogleDataprocMetastoreDatabaseIamMember#service_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#id GoogleDataprocMetastoreDatabaseIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#location GoogleDataprocMetastoreDatabaseIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#project GoogleDataprocMetastoreDatabaseIamMember#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.database"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#database GoogleDataprocMetastoreDatabaseIamMember#database}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.member"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#member GoogleDataprocMetastoreDatabaseIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#role GoogleDataprocMetastoreDatabaseIamMember#role}.

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.serviceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#service_id GoogleDataprocMetastoreDatabaseIamMember#service_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#condition GoogleDataprocMetastoreDatabaseIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#id GoogleDataprocMetastoreDatabaseIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#location GoogleDataprocMetastoreDatabaseIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#project GoogleDataprocMetastoreDatabaseIamMember#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetProject">reset_project</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition"></a>

```python
def put_condition(
  expression: str,
  title: str,
  description: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition.parameter.expression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#expression GoogleDataprocMetastoreDatabaseIamMember#expression}.

---

###### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition.parameter.title"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#title GoogleDataprocMetastoreDatabaseIamMember#title}.

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.putCondition.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#description GoogleDataprocMetastoreDatabaseIamMember#description}.

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.resetProject"></a>

```python
def reset_project() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDataprocMetastoreDatabaseIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_database_iam_member

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_database_iam_member

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_database_iam_member

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_database_iam_member

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDataprocMetastoreDatabaseIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDataprocMetastoreDatabaseIamMember to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDataprocMetastoreDatabaseIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocMetastoreDatabaseIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference">GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.memberInput">member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.member">member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.condition"></a>

```python
condition: GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference">GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.conditionInput"></a>

```python
condition_input: GoogleDataprocMetastoreDatabaseIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `member_input`<sup>Optional</sup> <a name="member_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.memberInput"></a>

```python
member_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.member"></a>

```python
member: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMember.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreDatabaseIamMemberCondition <a name="GoogleDataprocMetastoreDatabaseIamMemberCondition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_database_iam_member

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition(
  expression: str,
  title: str,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.expression">expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#expression GoogleDataprocMetastoreDatabaseIamMember#expression}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.title">title</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#title GoogleDataprocMetastoreDatabaseIamMember#title}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#description GoogleDataprocMetastoreDatabaseIamMember#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#expression GoogleDataprocMetastoreDatabaseIamMember#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#title GoogleDataprocMetastoreDatabaseIamMember#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#description GoogleDataprocMetastoreDatabaseIamMember#description}.

---

### GoogleDataprocMetastoreDatabaseIamMemberConfig <a name="GoogleDataprocMetastoreDatabaseIamMemberConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_database_iam_member

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: str,
  member: str,
  role: str,
  service_id: str,
  condition: GoogleDataprocMetastoreDatabaseIamMemberCondition = None,
  id: str = None,
  location: str = None,
  project: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.database">database</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#database GoogleDataprocMetastoreDatabaseIamMember#database}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.member">member</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#member GoogleDataprocMetastoreDatabaseIamMember#member}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#role GoogleDataprocMetastoreDatabaseIamMember#role}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.serviceId">service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#service_id GoogleDataprocMetastoreDatabaseIamMember#service_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#id GoogleDataprocMetastoreDatabaseIamMember#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#location GoogleDataprocMetastoreDatabaseIamMember#location}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#project GoogleDataprocMetastoreDatabaseIamMember#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.database"></a>

```python
database: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#database GoogleDataprocMetastoreDatabaseIamMember#database}.

---

##### `member`<sup>Required</sup> <a name="member" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.member"></a>

```python
member: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#member GoogleDataprocMetastoreDatabaseIamMember#member}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#role GoogleDataprocMetastoreDatabaseIamMember#role}.

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#service_id GoogleDataprocMetastoreDatabaseIamMember#service_id}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.condition"></a>

```python
condition: GoogleDataprocMetastoreDatabaseIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#condition GoogleDataprocMetastoreDatabaseIamMember#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#id GoogleDataprocMetastoreDatabaseIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#location GoogleDataprocMetastoreDatabaseIamMember#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_dataproc_metastore_database_iam_member#project GoogleDataprocMetastoreDatabaseIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference <a name="GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_dataproc_metastore_database_iam_member

googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleDataprocMetastoreDatabaseIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreDatabaseIamMember.GoogleDataprocMetastoreDatabaseIamMemberCondition">GoogleDataprocMetastoreDatabaseIamMemberCondition</a>

---



