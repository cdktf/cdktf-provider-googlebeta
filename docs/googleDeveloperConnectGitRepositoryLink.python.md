# `googleDeveloperConnectGitRepositoryLink` Submodule <a name="`googleDeveloperConnectGitRepositoryLink` Submodule" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDeveloperConnectGitRepositoryLink <a name="GoogleDeveloperConnectGitRepositoryLink" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link google_developer_connect_git_repository_link}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_git_repository_link

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  clone_uri: str,
  git_repository_link_id: str,
  location: str,
  parent_connection: str,
  annotations: typing.Mapping[str] = None,
  etag: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDeveloperConnectGitRepositoryLinkTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.cloneUri">clone_uri</a></code> | <code>str</code> | Required. Git Clone URI. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.gitRepositoryLinkId">git_repository_link_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.parentConnection">parent_connection</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.etag">etag</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#id GoogleDeveloperConnectGitRepositoryLink#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#project GoogleDeveloperConnectGitRepositoryLink#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `clone_uri`<sup>Required</sup> <a name="clone_uri" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.cloneUri"></a>

- *Type:* str

Required. Git Clone URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#clone_uri GoogleDeveloperConnectGitRepositoryLink#clone_uri}

---

##### `git_repository_link_id`<sup>Required</sup> <a name="git_repository_link_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.gitRepositoryLinkId"></a>

- *Type:* str

Required.

The ID to use for the repository, which will become the final component of
the repository's resource name. This ID should be unique in the connection.
Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#git_repository_link_id GoogleDeveloperConnectGitRepositoryLink#git_repository_link_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#location GoogleDeveloperConnectGitRepositoryLink#location}

---

##### `parent_connection`<sup>Required</sup> <a name="parent_connection" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.parentConnection"></a>

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#parent_connection GoogleDeveloperConnectGitRepositoryLink#parent_connection}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#annotations GoogleDeveloperConnectGitRepositoryLink#annotations}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.etag"></a>

- *Type:* str

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#etag GoogleDeveloperConnectGitRepositoryLink#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#id GoogleDeveloperConnectGitRepositoryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#labels GoogleDeveloperConnectGitRepositoryLink#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#project GoogleDeveloperConnectGitRepositoryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#timeouts GoogleDeveloperConnectGitRepositoryLink#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#create GoogleDeveloperConnectGitRepositoryLink#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#delete GoogleDeveloperConnectGitRepositoryLink#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#update GoogleDeveloperConnectGitRepositoryLink#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleDeveloperConnectGitRepositoryLink resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_git_repository_link

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_git_repository_link

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_git_repository_link

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_git_repository_link

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleDeveloperConnectGitRepositoryLink resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleDeveloperConnectGitRepositoryLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleDeveloperConnectGitRepositoryLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDeveloperConnectGitRepositoryLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference">GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cloneUriInput">clone_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.gitRepositoryLinkIdInput">git_repository_link_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.parentConnectionInput">parent_connection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cloneUri">clone_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.gitRepositoryLinkId">git_repository_link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.parentConnection">parent_connection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.timeouts"></a>

```python
timeouts: GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference">GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `clone_uri_input`<sup>Optional</sup> <a name="clone_uri_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cloneUriInput"></a>

```python
clone_uri_input: str
```

- *Type:* str

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `git_repository_link_id_input`<sup>Optional</sup> <a name="git_repository_link_id_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.gitRepositoryLinkIdInput"></a>

```python
git_repository_link_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_connection_input`<sup>Optional</sup> <a name="parent_connection_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.parentConnectionInput"></a>

```python
parent_connection_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleDeveloperConnectGitRepositoryLinkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `clone_uri`<sup>Required</sup> <a name="clone_uri" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.cloneUri"></a>

```python
clone_uri: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `git_repository_link_id`<sup>Required</sup> <a name="git_repository_link_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.gitRepositoryLinkId"></a>

```python
git_repository_link_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent_connection`<sup>Required</sup> <a name="parent_connection" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.parentConnection"></a>

```python
parent_connection: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDeveloperConnectGitRepositoryLinkConfig <a name="GoogleDeveloperConnectGitRepositoryLinkConfig" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_git_repository_link

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  clone_uri: str,
  git_repository_link_id: str,
  location: str,
  parent_connection: str,
  annotations: typing.Mapping[str] = None,
  etag: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleDeveloperConnectGitRepositoryLinkTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.cloneUri">clone_uri</a></code> | <code>str</code> | Required. Git Clone URI. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.gitRepositoryLinkId">git_repository_link_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.parentConnection">parent_connection</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. Allows clients to store small amounts of arbitrary data. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.etag">etag</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#id GoogleDeveloperConnectGitRepositoryLink#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#project GoogleDeveloperConnectGitRepositoryLink#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `clone_uri`<sup>Required</sup> <a name="clone_uri" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.cloneUri"></a>

```python
clone_uri: str
```

- *Type:* str

Required. Git Clone URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#clone_uri GoogleDeveloperConnectGitRepositoryLink#clone_uri}

---

##### `git_repository_link_id`<sup>Required</sup> <a name="git_repository_link_id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.gitRepositoryLinkId"></a>

```python
git_repository_link_id: str
```

- *Type:* str

Required.

The ID to use for the repository, which will become the final component of
the repository's resource name. This ID should be unique in the connection.
Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#git_repository_link_id GoogleDeveloperConnectGitRepositoryLink#git_repository_link_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#location GoogleDeveloperConnectGitRepositoryLink#location}

---

##### `parent_connection`<sup>Required</sup> <a name="parent_connection" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.parentConnection"></a>

```python
parent_connection: str
```

- *Type:* str

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'developerconnect.googleapis.com/GitRepositoryLink'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#parent_connection GoogleDeveloperConnectGitRepositoryLink#parent_connection}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Allows clients to store small amounts of arbitrary data.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#annotations GoogleDeveloperConnectGitRepositoryLink#annotations}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

Optional.

This checksum is computed by the server based on the value of other
fields, and may be sent on update and delete requests to ensure the
client has an up-to-date value before proceeding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#etag GoogleDeveloperConnectGitRepositoryLink#etag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#id GoogleDeveloperConnectGitRepositoryLink#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#labels GoogleDeveloperConnectGitRepositoryLink#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#project GoogleDeveloperConnectGitRepositoryLink#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkConfig.property.timeouts"></a>

```python
timeouts: GoogleDeveloperConnectGitRepositoryLinkTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#timeouts GoogleDeveloperConnectGitRepositoryLink#timeouts}

---

### GoogleDeveloperConnectGitRepositoryLinkTimeouts <a name="GoogleDeveloperConnectGitRepositoryLinkTimeouts" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_git_repository_link

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#create GoogleDeveloperConnectGitRepositoryLink#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#delete GoogleDeveloperConnectGitRepositoryLink#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#update GoogleDeveloperConnectGitRepositoryLink#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#create GoogleDeveloperConnectGitRepositoryLink#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#delete GoogleDeveloperConnectGitRepositoryLink#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_developer_connect_git_repository_link#update GoogleDeveloperConnectGitRepositoryLink#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference <a name="GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_developer_connect_git_repository_link

googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleDeveloperConnectGitRepositoryLinkTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleDeveloperConnectGitRepositoryLink.GoogleDeveloperConnectGitRepositoryLinkTimeouts">GoogleDeveloperConnectGitRepositoryLinkTimeouts</a>]

---



