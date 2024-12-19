# `googleFirebaseAppleApp` Submodule <a name="`googleFirebaseAppleApp` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppleApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppleApp <a name="GoogleFirebaseAppleApp" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app google_firebase_apple_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_apple_app

googleFirebaseAppleApp.GoogleFirebaseAppleApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bundle_id: str,
  display_name: str,
  api_key_id: str = None,
  app_store_id: str = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  team_id: str = None,
  timeouts: GoogleFirebaseAppleAppTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.bundleId">bundle_id</a></code> | <code>str</code> | The canonical bundle ID of the Apple app as it would appear in the Apple AppStore. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The user-assigned display name of the App. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.apiKeyId">api_key_id</a></code> | <code>str</code> | The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.appStoreId">app_store_id</a></code> | <code>str</code> | The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | (Optional) Set to 'ABANDON' to allow the Apple to be untracked from terraform state rather than deleted upon 'terraform destroy'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#id GoogleFirebaseAppleApp#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#project GoogleFirebaseAppleApp#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.teamId">team_id</a></code> | <code>str</code> | The Apple Developer Team ID associated with the App in the App Store. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.bundleId"></a>

- *Type:* str

The canonical bundle ID of the Apple app as it would appear in the Apple AppStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#bundle_id GoogleFirebaseAppleApp#bundle_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.displayName"></a>

- *Type:* str

The user-assigned display name of the App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#display_name GoogleFirebaseAppleApp#display_name}

---

##### `api_key_id`<sup>Optional</sup> <a name="api_key_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.apiKeyId"></a>

- *Type:* str

The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp.

If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AppleApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#api_key_id GoogleFirebaseAppleApp#api_key_id}

---

##### `app_store_id`<sup>Optional</sup> <a name="app_store_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.appStoreId"></a>

- *Type:* str

The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#app_store_id GoogleFirebaseAppleApp#app_store_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

(Optional) Set to 'ABANDON' to allow the Apple to be untracked from terraform state rather than deleted upon 'terraform destroy'.

This is useful because the Apple may be
serving traffic. Set to 'DELETE' to delete the Apple. Defaults to 'DELETE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#deletion_policy GoogleFirebaseAppleApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#id GoogleFirebaseAppleApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#project GoogleFirebaseAppleApp#project}.

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.teamId"></a>

- *Type:* str

The Apple Developer Team ID associated with the App in the App Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#team_id GoogleFirebaseAppleApp#team_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#timeouts GoogleFirebaseAppleApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetApiKeyId">reset_api_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetAppStoreId">reset_app_store_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetTeamId">reset_team_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#create GoogleFirebaseAppleApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#delete GoogleFirebaseAppleApp#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#update GoogleFirebaseAppleApp#update}.

---

##### `reset_api_key_id` <a name="reset_api_key_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetApiKeyId"></a>

```python
def reset_api_key_id() -> None
```

##### `reset_app_store_id` <a name="reset_app_store_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetAppStoreId"></a>

```python
def reset_app_store_id() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_team_id` <a name="reset_team_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetTeamId"></a>

```python
def reset_team_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppleApp resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_apple_app

googleFirebaseAppleApp.GoogleFirebaseAppleApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_apple_app

googleFirebaseAppleApp.GoogleFirebaseAppleApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_apple_app

googleFirebaseAppleApp.GoogleFirebaseAppleApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_apple_app

googleFirebaseAppleApp.GoogleFirebaseAppleApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleFirebaseAppleApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaseAppleApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaseAppleApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppleApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference">GoogleFirebaseAppleAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.apiKeyIdInput">api_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appStoreIdInput">app_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.apiKeyId">api_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appStoreId">app_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.timeouts"></a>

```python
timeouts: GoogleFirebaseAppleAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference">GoogleFirebaseAppleAppTimeoutsOutputReference</a>

---

##### `api_key_id_input`<sup>Optional</sup> <a name="api_key_id_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.apiKeyIdInput"></a>

```python
api_key_id_input: str
```

- *Type:* str

---

##### `app_store_id_input`<sup>Optional</sup> <a name="app_store_id_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appStoreIdInput"></a>

```python
app_store_id_input: str
```

- *Type:* str

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleFirebaseAppleAppTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>]

---

##### `api_key_id`<sup>Required</sup> <a name="api_key_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.apiKeyId"></a>

```python
api_key_id: str
```

- *Type:* str

---

##### `app_store_id`<sup>Required</sup> <a name="app_store_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.appStoreId"></a>

```python
app_store_id: str
```

- *Type:* str

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppleAppConfig <a name="GoogleFirebaseAppleAppConfig" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_apple_app

googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bundle_id: str,
  display_name: str,
  api_key_id: str = None,
  app_store_id: str = None,
  deletion_policy: str = None,
  id: str = None,
  project: str = None,
  team_id: str = None,
  timeouts: GoogleFirebaseAppleAppTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.bundleId">bundle_id</a></code> | <code>str</code> | The canonical bundle ID of the Apple app as it would appear in the Apple AppStore. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.displayName">display_name</a></code> | <code>str</code> | The user-assigned display name of the App. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.apiKeyId">api_key_id</a></code> | <code>str</code> | The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.appStoreId">app_store_id</a></code> | <code>str</code> | The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | (Optional) Set to 'ABANDON' to allow the Apple to be untracked from terraform state rather than deleted upon 'terraform destroy'. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#id GoogleFirebaseAppleApp#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#project GoogleFirebaseAppleApp#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.teamId">team_id</a></code> | <code>str</code> | The Apple Developer Team ID associated with the App in the App Store. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

The canonical bundle ID of the Apple app as it would appear in the Apple AppStore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#bundle_id GoogleFirebaseAppleApp#bundle_id}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The user-assigned display name of the App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#display_name GoogleFirebaseAppleApp#display_name}

---

##### `api_key_id`<sup>Optional</sup> <a name="api_key_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.apiKeyId"></a>

```python
api_key_id: str
```

- *Type:* str

The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp.

If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AppleApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#api_key_id GoogleFirebaseAppleApp#api_key_id}

---

##### `app_store_id`<sup>Optional</sup> <a name="app_store_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.appStoreId"></a>

```python
app_store_id: str
```

- *Type:* str

The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#app_store_id GoogleFirebaseAppleApp#app_store_id}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

(Optional) Set to 'ABANDON' to allow the Apple to be untracked from terraform state rather than deleted upon 'terraform destroy'.

This is useful because the Apple may be
serving traffic. Set to 'DELETE' to delete the Apple. Defaults to 'DELETE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#deletion_policy GoogleFirebaseAppleApp#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#id GoogleFirebaseAppleApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#project GoogleFirebaseAppleApp#project}.

---

##### `team_id`<sup>Optional</sup> <a name="team_id" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

The Apple Developer Team ID associated with the App in the App Store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#team_id GoogleFirebaseAppleApp#team_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseAppleAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#timeouts GoogleFirebaseAppleApp#timeouts}

---

### GoogleFirebaseAppleAppTimeouts <a name="GoogleFirebaseAppleAppTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_apple_app

googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#create GoogleFirebaseAppleApp#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#delete GoogleFirebaseAppleApp#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#update GoogleFirebaseAppleApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#create GoogleFirebaseAppleApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#delete GoogleFirebaseAppleApp#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_firebase_apple_app#update GoogleFirebaseAppleApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppleAppTimeoutsOutputReference <a name="GoogleFirebaseAppleAppTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_apple_app

googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleFirebaseAppleAppTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseAppleApp.GoogleFirebaseAppleAppTimeouts">GoogleFirebaseAppleAppTimeouts</a>]

---



