# `googleFirebaseAppCheckServiceConfig` Submodule <a name="`googleFirebaseAppCheckServiceConfig` Submodule" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAppCheckServiceConfig <a name="GoogleFirebaseAppCheckServiceConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config google_firebase_app_check_service_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_app_check_service_config

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_id: str,
  enforcement_mode: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseAppCheckServiceConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.serviceId">service_id</a></code> | <code>str</code> | The identifier of the service to configure enforcement. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.enforcementMode">enforcement_mode</a></code> | <code>str</code> | The App Check enforcement mode for a service supported by App Check. Valid values are. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#id GoogleFirebaseAppCheckServiceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#project GoogleFirebaseAppCheckServiceConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.serviceId"></a>

- *Type:* str

The identifier of the service to configure enforcement.

Currently, the following service IDs are supported:
firebasestorage.googleapis.com (Cloud Storage for Firebase)
firebasedatabase.googleapis.com (Firebase Realtime Database)
firestore.googleapis.com (Cloud Firestore)
identitytoolkit.googleapis.com (Authentication)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#service_id GoogleFirebaseAppCheckServiceConfig#service_id}

---

##### `enforcement_mode`<sup>Optional</sup> <a name="enforcement_mode" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.enforcementMode"></a>

- *Type:* str

The App Check enforcement mode for a service supported by App Check. Valid values are.

(Unset)
Firebase App Check is not enforced for the service, nor are App Check metrics collected.
Though the service is not protected by App Check in this mode, other applicable protections,
such as user authorization, are still enforced. An unconfigured service is in this mode by default.
This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the
enforcement to OFF for this service.

UNENFORCED
Firebase App Check is not enforced for the service. App Check metrics are collected to help you
decide when to turn on enforcement for the service. Though the service is not protected by App Check
in this mode, other applicable protections, such as user authorization, are still enforced.

ENFORCED
Firebase App Check is enforced for the service. The service will reject any request that attempts to
access your project's resources if it does not have valid App Check token attached, with some exceptions
depending on the service; for example, some services will still allow requests bearing the developer's
privileged service account credentials without an App Check token. App Check metrics continue to be
collected to help you detect issues with your App Check integration and monitor the composition of your
callers. While the service is protected by App Check, other applicable protections, such as user
authorization, continue to be enforced at the same time.

Use caution when choosing to enforce App Check on a Firebase service. If your users have not updated
to an App Check capable version of your app, their apps will no longer be able to use your Firebase
services that are enforcing App Check. App Check metrics can help you decide whether to enforce App
Check on your Firebase services.

If your app has not launched yet, you should enable enforcement immediately, since there are no outdated
clients in use. Possible values: ["UNENFORCED", "ENFORCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#enforcement_mode GoogleFirebaseAppCheckServiceConfig#enforcement_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#id GoogleFirebaseAppCheckServiceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#project GoogleFirebaseAppCheckServiceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#timeouts GoogleFirebaseAppCheckServiceConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetEnforcementMode">reset_enforcement_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#create GoogleFirebaseAppCheckServiceConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#delete GoogleFirebaseAppCheckServiceConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#update GoogleFirebaseAppCheckServiceConfig#update}.

---

##### `reset_enforcement_mode` <a name="reset_enforcement_mode" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetEnforcementMode"></a>

```python
def reset_enforcement_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleFirebaseAppCheckServiceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_app_check_service_config

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_app_check_service_config

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_app_check_service_config

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_app_check_service_config

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleFirebaseAppCheckServiceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaseAppCheckServiceConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaseAppCheckServiceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAppCheckServiceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference">GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.serviceIdInput">service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.serviceId">service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference">GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference</a>

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_id_input`<sup>Optional</sup> <a name="service_id_input" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.serviceIdInput"></a>

```python
service_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleFirebaseAppCheckServiceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a>]

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAppCheckServiceConfigConfig <a name="GoogleFirebaseAppCheckServiceConfigConfig" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_app_check_service_config

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_id: str,
  enforcement_mode: str = None,
  id: str = None,
  project: str = None,
  timeouts: GoogleFirebaseAppCheckServiceConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.serviceId">service_id</a></code> | <code>str</code> | The identifier of the service to configure enforcement. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | The App Check enforcement mode for a service supported by App Check. Valid values are. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#id GoogleFirebaseAppCheckServiceConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#project GoogleFirebaseAppCheckServiceConfig#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_id`<sup>Required</sup> <a name="service_id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.serviceId"></a>

```python
service_id: str
```

- *Type:* str

The identifier of the service to configure enforcement.

Currently, the following service IDs are supported:
firebasestorage.googleapis.com (Cloud Storage for Firebase)
firebasedatabase.googleapis.com (Firebase Realtime Database)
firestore.googleapis.com (Cloud Firestore)
identitytoolkit.googleapis.com (Authentication)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#service_id GoogleFirebaseAppCheckServiceConfig#service_id}

---

##### `enforcement_mode`<sup>Optional</sup> <a name="enforcement_mode" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

The App Check enforcement mode for a service supported by App Check. Valid values are.

(Unset)
Firebase App Check is not enforced for the service, nor are App Check metrics collected.
Though the service is not protected by App Check in this mode, other applicable protections,
such as user authorization, are still enforced. An unconfigured service is in this mode by default.
This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the
enforcement to OFF for this service.

UNENFORCED
Firebase App Check is not enforced for the service. App Check metrics are collected to help you
decide when to turn on enforcement for the service. Though the service is not protected by App Check
in this mode, other applicable protections, such as user authorization, are still enforced.

ENFORCED
Firebase App Check is enforced for the service. The service will reject any request that attempts to
access your project's resources if it does not have valid App Check token attached, with some exceptions
depending on the service; for example, some services will still allow requests bearing the developer's
privileged service account credentials without an App Check token. App Check metrics continue to be
collected to help you detect issues with your App Check integration and monitor the composition of your
callers. While the service is protected by App Check, other applicable protections, such as user
authorization, continue to be enforced at the same time.

Use caution when choosing to enforce App Check on a Firebase service. If your users have not updated
to an App Check capable version of your app, their apps will no longer be able to use your Firebase
services that are enforcing App Check. App Check metrics can help you decide whether to enforce App
Check on your Firebase services.

If your app has not launched yet, you should enable enforcement immediately, since there are no outdated
clients in use. Possible values: ["UNENFORCED", "ENFORCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#enforcement_mode GoogleFirebaseAppCheckServiceConfig#enforcement_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#id GoogleFirebaseAppCheckServiceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#project GoogleFirebaseAppCheckServiceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseAppCheckServiceConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#timeouts GoogleFirebaseAppCheckServiceConfig#timeouts}

---

### GoogleFirebaseAppCheckServiceConfigTimeouts <a name="GoogleFirebaseAppCheckServiceConfigTimeouts" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_app_check_service_config

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#create GoogleFirebaseAppCheckServiceConfig#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#delete GoogleFirebaseAppCheckServiceConfig#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#update GoogleFirebaseAppCheckServiceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#create GoogleFirebaseAppCheckServiceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#delete GoogleFirebaseAppCheckServiceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_firebase_app_check_service_config#update GoogleFirebaseAppCheckServiceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference <a name="GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_app_check_service_config

googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleFirebaseAppCheckServiceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseAppCheckServiceConfig.GoogleFirebaseAppCheckServiceConfigTimeouts">GoogleFirebaseAppCheckServiceConfigTimeouts</a>]

---



