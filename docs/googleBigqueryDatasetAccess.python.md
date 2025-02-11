# `googleBigqueryDatasetAccess` Submodule <a name="`googleBigqueryDatasetAccess` Submodule" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDatasetAccessA <a name="GoogleBigqueryDatasetAccessA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access google_bigquery_dataset_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  condition: GoogleBigqueryDatasetAccessConditionA = None,
  dataset: GoogleBigqueryDatasetAccessDatasetA = None,
  domain: str = None,
  group_by_email: str = None,
  iam_member: str = None,
  id: str = None,
  project: str = None,
  role: str = None,
  routine: GoogleBigqueryDatasetAccessRoutineA = None,
  special_group: str = None,
  timeouts: GoogleBigqueryDatasetAccessTimeouts = None,
  user_by_email: str = None,
  view: GoogleBigqueryDatasetAccessViewA = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.datasetId">dataset_id</a></code> | <code>str</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA">GoogleBigqueryDatasetAccessConditionA</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.domain">domain</a></code> | <code>str</code> | A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.groupByEmail">group_by_email</a></code> | <code>str</code> | An email address of a Google Group to grant access to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.iamMember">iam_member</a></code> | <code>str</code> | Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#id GoogleBigqueryDatasetAccessA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#project GoogleBigqueryDatasetAccessA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.role">role</a></code> | <code>str</code> | Describes the rights granted to the user specified by the other member of the access object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.routine">routine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a></code> | routine block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.specialGroup">special_group</a></code> | <code>str</code> | A special group to grant access to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.userByEmail">user_by_email</a></code> | <code>str</code> | An email address of a user to grant access to. For example: fred@example.com. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.view">view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a></code> | view block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.datasetId"></a>

- *Type:* str

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA">GoogleBigqueryDatasetAccessConditionA</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#condition GoogleBigqueryDatasetAccessA#condition}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.dataset"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset GoogleBigqueryDatasetAccessA#dataset}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.domain"></a>

- *Type:* str

A domain to grant access to. Any users signed in with the domain specified will be granted the specified access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#domain GoogleBigqueryDatasetAccessA#domain}

---

##### `group_by_email`<sup>Optional</sup> <a name="group_by_email" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.groupByEmail"></a>

- *Type:* str

An email address of a Google Group to grant access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#group_by_email GoogleBigqueryDatasetAccessA#group_by_email}

---

##### `iam_member`<sup>Optional</sup> <a name="iam_member" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.iamMember"></a>

- *Type:* str

Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.

For example: 'allUsers'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#iam_member GoogleBigqueryDatasetAccessA#iam_member}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#id GoogleBigqueryDatasetAccessA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#project GoogleBigqueryDatasetAccessA#project}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.role"></a>

- *Type:* str

Describes the rights granted to the user specified by the other member of the access object.

Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#role GoogleBigqueryDatasetAccessA#role}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.routine"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#routine GoogleBigqueryDatasetAccessA#routine}

---

##### `special_group`<sup>Optional</sup> <a name="special_group" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.specialGroup"></a>

- *Type:* str

A special group to grant access to.

Possible values include:

* 'projectOwners': Owners of the enclosing project.
* 'projectReaders': Readers of the enclosing project.
* 'projectWriters': Writers of the enclosing project.
* 'allAuthenticatedUsers': All authenticated BigQuery users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#special_group GoogleBigqueryDatasetAccessA#special_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#timeouts GoogleBigqueryDatasetAccessA#timeouts}

---

##### `user_by_email`<sup>Optional</sup> <a name="user_by_email" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.userByEmail"></a>

- *Type:* str

An email address of a user to grant access to. For example: fred@example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#user_by_email GoogleBigqueryDatasetAccessA#user_by_email}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.Initializer.parameter.view"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#view GoogleBigqueryDatasetAccessA#view}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putDataset">put_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putRoutine">put_routine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putView">put_view</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetDataset">reset_dataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetDomain">reset_domain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetGroupByEmail">reset_group_by_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetIamMember">reset_iam_member</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetRoutine">reset_routine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetSpecialGroup">reset_special_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetUserByEmail">reset_user_by_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetView">reset_view</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putCondition"></a>

```python
def put_condition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#expression GoogleBigqueryDatasetAccessA#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putCondition.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#description GoogleBigqueryDatasetAccessA#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putCondition.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#location GoogleBigqueryDatasetAccessA#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putCondition.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#title GoogleBigqueryDatasetAccessA#title}

---

##### `put_dataset` <a name="put_dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putDataset"></a>

```python
def put_dataset(
  dataset: GoogleBigqueryDatasetAccessDatasetDatasetA,
  target_types: typing.List[str]
) -> None
```

###### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putDataset.parameter.dataset"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset GoogleBigqueryDatasetAccessA#dataset}

---

###### `target_types`<sup>Required</sup> <a name="target_types" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putDataset.parameter.targetTypes"></a>

- *Type:* typing.List[str]

Which resources in the dataset this entry applies to.

Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#target_types GoogleBigqueryDatasetAccessA#target_types}

---

##### `put_routine` <a name="put_routine" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putRoutine"></a>

```python
def put_routine(
  dataset_id: str,
  project_id: str,
  routine_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putRoutine.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putRoutine.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}

---

###### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putRoutine.parameter.routineId"></a>

- *Type:* str

The ID of the routine.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#routine_id GoogleBigqueryDatasetAccessA#routine_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#create GoogleBigqueryDatasetAccessA#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#delete GoogleBigqueryDatasetAccessA#delete}.

---

##### `put_view` <a name="put_view" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putView"></a>

```python
def put_view(
  dataset_id: str,
  project_id: str,
  table_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putView.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putView.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}

---

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.putView.parameter.tableId"></a>

- *Type:* str

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#table_id GoogleBigqueryDatasetAccessA#table_id}

---

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_dataset` <a name="reset_dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetDataset"></a>

```python
def reset_dataset() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetDomain"></a>

```python
def reset_domain() -> None
```

##### `reset_group_by_email` <a name="reset_group_by_email" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetGroupByEmail"></a>

```python
def reset_group_by_email() -> None
```

##### `reset_iam_member` <a name="reset_iam_member" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetIamMember"></a>

```python
def reset_iam_member() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_role` <a name="reset_role" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_routine` <a name="reset_routine" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetRoutine"></a>

```python
def reset_routine() -> None
```

##### `reset_special_group` <a name="reset_special_group" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetSpecialGroup"></a>

```python
def reset_special_group() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_by_email` <a name="reset_user_by_email" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetUserByEmail"></a>

```python
def reset_user_by_email() -> None
```

##### `reset_view` <a name="reset_view" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.resetView"></a>

```python
def reset_view() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBigqueryDatasetAccessA resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBigqueryDatasetAccessA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBigqueryDatasetAccessA to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBigqueryDatasetAccessA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDatasetAccessA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.apiUpdatedMember">api_updated_member</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference">GoogleBigqueryDatasetAccessConditionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference">GoogleBigqueryDatasetAccessDatasetAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.routine">routine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference">GoogleBigqueryDatasetAccessRoutineAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference">GoogleBigqueryDatasetAccessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.view">view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference">GoogleBigqueryDatasetAccessViewAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA">GoogleBigqueryDatasetAccessConditionA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetInput">dataset_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.groupByEmailInput">group_by_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.iamMemberInput">iam_member_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.routineInput">routine_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.specialGroupInput">special_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.userByEmailInput">user_by_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.viewInput">view_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.groupByEmail">group_by_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.iamMember">iam_member</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.specialGroup">special_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.userByEmail">user_by_email</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_updated_member`<sup>Required</sup> <a name="api_updated_member" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.apiUpdatedMember"></a>

```python
api_updated_member: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.condition"></a>

```python
condition: GoogleBigqueryDatasetAccessConditionAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference">GoogleBigqueryDatasetAccessConditionAOutputReference</a>

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.dataset"></a>

```python
dataset: GoogleBigqueryDatasetAccessDatasetAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference">GoogleBigqueryDatasetAccessDatasetAOutputReference</a>

---

##### `routine`<sup>Required</sup> <a name="routine" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.routine"></a>

```python
routine: GoogleBigqueryDatasetAccessRoutineAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference">GoogleBigqueryDatasetAccessRoutineAOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.timeouts"></a>

```python
timeouts: GoogleBigqueryDatasetAccessTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference">GoogleBigqueryDatasetAccessTimeoutsOutputReference</a>

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.view"></a>

```python
view: GoogleBigqueryDatasetAccessViewAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference">GoogleBigqueryDatasetAccessViewAOutputReference</a>

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.conditionInput"></a>

```python
condition_input: GoogleBigqueryDatasetAccessConditionA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA">GoogleBigqueryDatasetAccessConditionA</a>

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetInput"></a>

```python
dataset_input: GoogleBigqueryDatasetAccessDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a>

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `group_by_email_input`<sup>Optional</sup> <a name="group_by_email_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.groupByEmailInput"></a>

```python
group_by_email_input: str
```

- *Type:* str

---

##### `iam_member_input`<sup>Optional</sup> <a name="iam_member_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.iamMemberInput"></a>

```python
iam_member_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `routine_input`<sup>Optional</sup> <a name="routine_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.routineInput"></a>

```python
routine_input: GoogleBigqueryDatasetAccessRoutineA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a>

---

##### `special_group_input`<sup>Optional</sup> <a name="special_group_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.specialGroupInput"></a>

```python
special_group_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBigqueryDatasetAccessTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a>]

---

##### `user_by_email_input`<sup>Optional</sup> <a name="user_by_email_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.userByEmailInput"></a>

```python
user_by_email_input: str
```

- *Type:* str

---

##### `view_input`<sup>Optional</sup> <a name="view_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.viewInput"></a>

```python
view_input: GoogleBigqueryDatasetAccessViewA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a>

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `group_by_email`<sup>Required</sup> <a name="group_by_email" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.groupByEmail"></a>

```python
group_by_email: str
```

- *Type:* str

---

##### `iam_member`<sup>Required</sup> <a name="iam_member" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.iamMember"></a>

```python
iam_member: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `special_group`<sup>Required</sup> <a name="special_group" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.specialGroup"></a>

```python
special_group: str
```

- *Type:* str

---

##### `user_by_email`<sup>Required</sup> <a name="user_by_email" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.userByEmail"></a>

```python
user_by_email: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessA.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDatasetAccessAConfig <a name="GoogleBigqueryDatasetAccessAConfig" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dataset_id: str,
  condition: GoogleBigqueryDatasetAccessConditionA = None,
  dataset: GoogleBigqueryDatasetAccessDatasetA = None,
  domain: str = None,
  group_by_email: str = None,
  iam_member: str = None,
  id: str = None,
  project: str = None,
  role: str = None,
  routine: GoogleBigqueryDatasetAccessRoutineA = None,
  special_group: str = None,
  timeouts: GoogleBigqueryDatasetAccessTimeouts = None,
  user_by_email: str = None,
  view: GoogleBigqueryDatasetAccessViewA = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.datasetId">dataset_id</a></code> | <code>str</code> | A unique ID for this dataset, without the project name. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA">GoogleBigqueryDatasetAccessConditionA</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.domain">domain</a></code> | <code>str</code> | A domain to grant access to. Any users signed in with the domain specified will be granted the specified access. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.groupByEmail">group_by_email</a></code> | <code>str</code> | An email address of a Google Group to grant access to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.iamMember">iam_member</a></code> | <code>str</code> | Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#id GoogleBigqueryDatasetAccessA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#project GoogleBigqueryDatasetAccessA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.role">role</a></code> | <code>str</code> | Describes the rights granted to the user specified by the other member of the access object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.routine">routine</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a></code> | routine block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.specialGroup">special_group</a></code> | <code>str</code> | A special group to grant access to. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.userByEmail">user_by_email</a></code> | <code>str</code> | An email address of a user to grant access to. For example: fred@example.com. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.view">view</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a></code> | view block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

A unique ID for this dataset, without the project name.

The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.condition"></a>

```python
condition: GoogleBigqueryDatasetAccessConditionA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA">GoogleBigqueryDatasetAccessConditionA</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#condition GoogleBigqueryDatasetAccessA#condition}

---

##### `dataset`<sup>Optional</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.dataset"></a>

```python
dataset: GoogleBigqueryDatasetAccessDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset GoogleBigqueryDatasetAccessA#dataset}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

A domain to grant access to. Any users signed in with the domain specified will be granted the specified access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#domain GoogleBigqueryDatasetAccessA#domain}

---

##### `group_by_email`<sup>Optional</sup> <a name="group_by_email" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.groupByEmail"></a>

```python
group_by_email: str
```

- *Type:* str

An email address of a Google Group to grant access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#group_by_email GoogleBigqueryDatasetAccessA#group_by_email}

---

##### `iam_member`<sup>Optional</sup> <a name="iam_member" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.iamMember"></a>

```python
iam_member: str
```

- *Type:* str

Some other type of member that appears in the IAM Policy but isn't a user, group, domain, or special group.

For example: 'allUsers'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#iam_member GoogleBigqueryDatasetAccessA#iam_member}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#id GoogleBigqueryDatasetAccessA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#project GoogleBigqueryDatasetAccessA#project}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.role"></a>

```python
role: str
```

- *Type:* str

Describes the rights granted to the user specified by the other member of the access object.

Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#role GoogleBigqueryDatasetAccessA#role}

---

##### `routine`<sup>Optional</sup> <a name="routine" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.routine"></a>

```python
routine: GoogleBigqueryDatasetAccessRoutineA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a>

routine block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#routine GoogleBigqueryDatasetAccessA#routine}

---

##### `special_group`<sup>Optional</sup> <a name="special_group" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.specialGroup"></a>

```python
special_group: str
```

- *Type:* str

A special group to grant access to.

Possible values include:

* 'projectOwners': Owners of the enclosing project.
* 'projectReaders': Readers of the enclosing project.
* 'projectWriters': Writers of the enclosing project.
* 'allAuthenticatedUsers': All authenticated BigQuery users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#special_group GoogleBigqueryDatasetAccessA#special_group}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.timeouts"></a>

```python
timeouts: GoogleBigqueryDatasetAccessTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#timeouts GoogleBigqueryDatasetAccessA#timeouts}

---

##### `user_by_email`<sup>Optional</sup> <a name="user_by_email" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.userByEmail"></a>

```python
user_by_email: str
```

- *Type:* str

An email address of a user to grant access to. For example: fred@example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#user_by_email GoogleBigqueryDatasetAccessA#user_by_email}

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessAConfig.property.view"></a>

```python
view: GoogleBigqueryDatasetAccessViewA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a>

view block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#view GoogleBigqueryDatasetAccessA#view}

---

### GoogleBigqueryDatasetAccessConditionA <a name="GoogleBigqueryDatasetAccessConditionA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#expression GoogleBigqueryDatasetAccessA#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#description GoogleBigqueryDatasetAccessA#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#location GoogleBigqueryDatasetAccessA#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#title GoogleBigqueryDatasetAccessA#title}

---

### GoogleBigqueryDatasetAccessDatasetA <a name="GoogleBigqueryDatasetAccessDatasetA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA(
  dataset: GoogleBigqueryDatasetAccessDatasetDatasetA,
  target_types: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a></code> | dataset block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA.property.targetTypes">target_types</a></code> | <code>typing.List[str]</code> | Which resources in the dataset this entry applies to. |

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA.property.dataset"></a>

```python
dataset: GoogleBigqueryDatasetAccessDatasetDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a>

dataset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset GoogleBigqueryDatasetAccessA#dataset}

---

##### `target_types`<sup>Required</sup> <a name="target_types" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA.property.targetTypes"></a>

```python
target_types: typing.List[str]
```

- *Type:* typing.List[str]

Which resources in the dataset this entry applies to.

Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#target_types GoogleBigqueryDatasetAccessA#target_types}

---

### GoogleBigqueryDatasetAccessDatasetDatasetA <a name="GoogleBigqueryDatasetAccessDatasetDatasetA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA(
  dataset_id: str,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}

---

### GoogleBigqueryDatasetAccessRoutineA <a name="GoogleBigqueryDatasetAccessRoutineA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA(
  dataset_id: str,
  project_id: str,
  routine_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.routineId">routine_id</a></code> | <code>str</code> | The ID of the routine. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA.property.routineId"></a>

```python
routine_id: str
```

- *Type:* str

The ID of the routine.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#routine_id GoogleBigqueryDatasetAccessA#routine_id}

---

### GoogleBigqueryDatasetAccessTimeouts <a name="GoogleBigqueryDatasetAccessTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#create GoogleBigqueryDatasetAccessA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#delete GoogleBigqueryDatasetAccessA#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#create GoogleBigqueryDatasetAccessA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#delete GoogleBigqueryDatasetAccessA#delete}.

---

### GoogleBigqueryDatasetAccessViewA <a name="GoogleBigqueryDatasetAccessViewA" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA(
  dataset_id: str,
  project_id: str,
  table_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.datasetId">dataset_id</a></code> | <code>str</code> | The ID of the dataset containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.projectId">project_id</a></code> | <code>str</code> | The ID of the project containing this table. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.tableId">table_id</a></code> | <code>str</code> | The ID of the table. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The ID of the table.

The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#table_id GoogleBigqueryDatasetAccessA#table_id}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDatasetAccessConditionAOutputReference <a name="GoogleBigqueryDatasetAccessConditionAOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA">GoogleBigqueryDatasetAccessConditionA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetAccessConditionA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessConditionA">GoogleBigqueryDatasetAccessConditionA</a>

---


### GoogleBigqueryDatasetAccessDatasetAOutputReference <a name="GoogleBigqueryDatasetAccessDatasetAOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.putDataset">put_dataset</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dataset` <a name="put_dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.putDataset"></a>

```python
def put_dataset(
  dataset_id: str,
  project_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.putDataset.parameter.datasetId"></a>

- *Type:* str

The ID of the dataset containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#dataset_id GoogleBigqueryDatasetAccessA#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.putDataset.parameter.projectId"></a>

- *Type:* str

The ID of the project containing this table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_bigquery_dataset_access#project_id GoogleBigqueryDatasetAccessA#project_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.dataset">dataset</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference">GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.datasetInput">dataset_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.targetTypesInput">target_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.targetTypes">target_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.dataset"></a>

```python
dataset: GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference">GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference</a>

---

##### `dataset_input`<sup>Optional</sup> <a name="dataset_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.datasetInput"></a>

```python
dataset_input: GoogleBigqueryDatasetAccessDatasetDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a>

---

##### `target_types_input`<sup>Optional</sup> <a name="target_types_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.targetTypesInput"></a>

```python
target_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_types`<sup>Required</sup> <a name="target_types" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.targetTypes"></a>

```python
target_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetAccessDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetA">GoogleBigqueryDatasetAccessDatasetA</a>

---


### GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference <a name="GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetAccessDatasetDatasetA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessDatasetDatasetA">GoogleBigqueryDatasetAccessDatasetDatasetA</a>

---


### GoogleBigqueryDatasetAccessRoutineAOutputReference <a name="GoogleBigqueryDatasetAccessRoutineAOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.routineIdInput">routine_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.routineId">routine_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `routine_id_input`<sup>Optional</sup> <a name="routine_id_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.routineIdInput"></a>

```python
routine_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `routine_id`<sup>Required</sup> <a name="routine_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.routineId"></a>

```python
routine_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetAccessRoutineA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessRoutineA">GoogleBigqueryDatasetAccessRoutineA</a>

---


### GoogleBigqueryDatasetAccessTimeoutsOutputReference <a name="GoogleBigqueryDatasetAccessTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBigqueryDatasetAccessTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessTimeouts">GoogleBigqueryDatasetAccessTimeouts</a>]

---


### GoogleBigqueryDatasetAccessViewAOutputReference <a name="GoogleBigqueryDatasetAccessViewAOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_bigquery_dataset_access

googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewAOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBigqueryDatasetAccessViewA
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatasetAccess.GoogleBigqueryDatasetAccessViewA">GoogleBigqueryDatasetAccessViewA</a>

---



