# `googleSecurityposturePostureDeployment` Submodule <a name="`googleSecurityposturePostureDeployment` Submodule" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecurityposturePostureDeployment <a name="GoogleSecurityposturePostureDeployment" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment google_securityposture_posture_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_securityposture_posture_deployment

googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment(
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
  posture_deployment_id: str,
  posture_id: str,
  posture_revision_id: str,
  target_resource: str,
  description: str = None,
  id: str = None,
  timeouts: GoogleSecurityposturePostureDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource, eg. global'. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureDeploymentId">posture_deployment_id</a></code> | <code>str</code> | ID of the posture deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureId">posture_id</a></code> | <code>str</code> | Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureRevisionId">posture_revision_id</a></code> | <code>str</code> | Revision_id the posture which needs to be deployed. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.targetResource">target_resource</a></code> | <code>str</code> | The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the posture deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#id GoogleSecurityposturePostureDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource, eg. global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#location GoogleSecurityposturePostureDeployment#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#parent GoogleSecurityposturePostureDeployment#parent}

---

##### `posture_deployment_id`<sup>Required</sup> <a name="posture_deployment_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureDeploymentId"></a>

- *Type:* str

ID of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#posture_deployment_id GoogleSecurityposturePostureDeployment#posture_deployment_id}

---

##### `posture_id`<sup>Required</sup> <a name="posture_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureId"></a>

- *Type:* str

Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#posture_id GoogleSecurityposturePostureDeployment#posture_id}

---

##### `posture_revision_id`<sup>Required</sup> <a name="posture_revision_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.postureRevisionId"></a>

- *Type:* str

Revision_id the posture which needs to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#posture_revision_id GoogleSecurityposturePostureDeployment#posture_revision_id}

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.targetResource"></a>

- *Type:* str

The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#target_resource GoogleSecurityposturePostureDeployment#target_resource}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.description"></a>

- *Type:* str

Description of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#description GoogleSecurityposturePostureDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#id GoogleSecurityposturePostureDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#timeouts GoogleSecurityposturePostureDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#create GoogleSecurityposturePostureDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#delete GoogleSecurityposturePostureDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#update GoogleSecurityposturePostureDeployment#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleSecurityposturePostureDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_securityposture_posture_deployment

googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_securityposture_posture_deployment

googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_securityposture_posture_deployment

googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_securityposture_posture_deployment

googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleSecurityposturePostureDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleSecurityposturePostureDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleSecurityposturePostureDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecurityposturePostureDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureId">desired_posture_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureRevisionId">desired_posture_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.failureMessage">failure_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference">GoogleSecurityposturePostureDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentIdInput">posture_deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureIdInput">posture_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionIdInput">posture_revision_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResourceInput">target_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentId">posture_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureId">posture_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionId">posture_revision_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResource">target_resource</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `desired_posture_id`<sup>Required</sup> <a name="desired_posture_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureId"></a>

```python
desired_posture_id: str
```

- *Type:* str

---

##### `desired_posture_revision_id`<sup>Required</sup> <a name="desired_posture_revision_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureRevisionId"></a>

```python
desired_posture_revision_id: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `failure_message`<sup>Required</sup> <a name="failure_message" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.failureMessage"></a>

```python
failure_message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeouts"></a>

```python
timeouts: GoogleSecurityposturePostureDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference">GoogleSecurityposturePostureDeploymentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `posture_deployment_id_input`<sup>Optional</sup> <a name="posture_deployment_id_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentIdInput"></a>

```python
posture_deployment_id_input: str
```

- *Type:* str

---

##### `posture_id_input`<sup>Optional</sup> <a name="posture_id_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureIdInput"></a>

```python
posture_id_input: str
```

- *Type:* str

---

##### `posture_revision_id_input`<sup>Optional</sup> <a name="posture_revision_id_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionIdInput"></a>

```python
posture_revision_id_input: str
```

- *Type:* str

---

##### `target_resource_input`<sup>Optional</sup> <a name="target_resource_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResourceInput"></a>

```python
target_resource_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleSecurityposturePostureDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `posture_deployment_id`<sup>Required</sup> <a name="posture_deployment_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentId"></a>

```python
posture_deployment_id: str
```

- *Type:* str

---

##### `posture_id`<sup>Required</sup> <a name="posture_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureId"></a>

```python
posture_id: str
```

- *Type:* str

---

##### `posture_revision_id`<sup>Required</sup> <a name="posture_revision_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionId"></a>

```python
posture_revision_id: str
```

- *Type:* str

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecurityposturePostureDeploymentConfig <a name="GoogleSecurityposturePostureDeploymentConfig" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_securityposture_posture_deployment

googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  parent: str,
  posture_deployment_id: str,
  posture_id: str,
  posture_revision_id: str,
  target_resource: str,
  description: str = None,
  id: str = None,
  timeouts: GoogleSecurityposturePostureDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.location">location</a></code> | <code>str</code> | The location of the resource, eg. global'. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureDeploymentId">posture_deployment_id</a></code> | <code>str</code> | ID of the posture deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureId">posture_id</a></code> | <code>str</code> | Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureRevisionId">posture_revision_id</a></code> | <code>str</code> | Revision_id the posture which needs to be deployed. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.targetResource">target_resource</a></code> | <code>str</code> | The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.description">description</a></code> | <code>str</code> | Description of the posture deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#id GoogleSecurityposturePostureDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource, eg. global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#location GoogleSecurityposturePostureDeployment#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#parent GoogleSecurityposturePostureDeployment#parent}

---

##### `posture_deployment_id`<sup>Required</sup> <a name="posture_deployment_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureDeploymentId"></a>

```python
posture_deployment_id: str
```

- *Type:* str

ID of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#posture_deployment_id GoogleSecurityposturePostureDeployment#posture_deployment_id}

---

##### `posture_id`<sup>Required</sup> <a name="posture_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureId"></a>

```python
posture_id: str
```

- *Type:* str

Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#posture_id GoogleSecurityposturePostureDeployment#posture_id}

---

##### `posture_revision_id`<sup>Required</sup> <a name="posture_revision_id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureRevisionId"></a>

```python
posture_revision_id: str
```

- *Type:* str

Revision_id the posture which needs to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#posture_revision_id GoogleSecurityposturePostureDeployment#posture_revision_id}

---

##### `target_resource`<sup>Required</sup> <a name="target_resource" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.targetResource"></a>

```python
target_resource: str
```

- *Type:* str

The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#target_resource GoogleSecurityposturePostureDeployment#target_resource}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#description GoogleSecurityposturePostureDeployment#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#id GoogleSecurityposturePostureDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.timeouts"></a>

```python
timeouts: GoogleSecurityposturePostureDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#timeouts GoogleSecurityposturePostureDeployment#timeouts}

---

### GoogleSecurityposturePostureDeploymentTimeouts <a name="GoogleSecurityposturePostureDeploymentTimeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_securityposture_posture_deployment

googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#create GoogleSecurityposturePostureDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#delete GoogleSecurityposturePostureDeployment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#update GoogleSecurityposturePostureDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#create GoogleSecurityposturePostureDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#delete GoogleSecurityposturePostureDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_securityposture_posture_deployment#update GoogleSecurityposturePostureDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecurityposturePostureDeploymentTimeoutsOutputReference <a name="GoogleSecurityposturePostureDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_securityposture_posture_deployment

googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleSecurityposturePostureDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>]

---



