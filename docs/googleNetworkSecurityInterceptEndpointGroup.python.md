# `googleNetworkSecurityInterceptEndpointGroup` Submodule <a name="`googleNetworkSecurityInterceptEndpointGroup` Submodule" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityInterceptEndpointGroup <a name="GoogleNetworkSecurityInterceptEndpointGroup" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group google_network_security_intercept_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_intercept_endpoint_group

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  intercept_deployment_group: str,
  intercept_endpoint_group_id: str,
  location: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkSecurityInterceptEndpointGroupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.interceptDeploymentGroup">intercept_deployment_group</a></code> | <code>str</code> | Immutable. The Intercept Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/interceptDeploymentGroups/{interceptDeploymentGroup}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.interceptEndpointGroupId">intercept_endpoint_group_id</a></code> | <code>str</code> | ID of the Intercept Endpoint Group. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Intercept Endpoint Group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#id GoogleNetworkSecurityInterceptEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#project GoogleNetworkSecurityInterceptEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `intercept_deployment_group`<sup>Required</sup> <a name="intercept_deployment_group" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.interceptDeploymentGroup"></a>

- *Type:* str

Immutable. The Intercept Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/interceptDeploymentGroups/{interceptDeploymentGroup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#intercept_deployment_group GoogleNetworkSecurityInterceptEndpointGroup#intercept_deployment_group}

---

##### `intercept_endpoint_group_id`<sup>Required</sup> <a name="intercept_endpoint_group_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.interceptEndpointGroupId"></a>

- *Type:* str

ID of the Intercept Endpoint Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#intercept_endpoint_group_id GoogleNetworkSecurityInterceptEndpointGroup#intercept_endpoint_group_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.location"></a>

- *Type:* str

The location of the Intercept Endpoint Group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#location GoogleNetworkSecurityInterceptEndpointGroup#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#id GoogleNetworkSecurityInterceptEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#labels GoogleNetworkSecurityInterceptEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#project GoogleNetworkSecurityInterceptEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#timeouts GoogleNetworkSecurityInterceptEndpointGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#create GoogleNetworkSecurityInterceptEndpointGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#delete GoogleNetworkSecurityInterceptEndpointGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#update GoogleNetworkSecurityInterceptEndpointGroup#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkSecurityInterceptEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_intercept_endpoint_group

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_intercept_endpoint_group

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_intercept_endpoint_group

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_intercept_endpoint_group

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkSecurityInterceptEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkSecurityInterceptEndpointGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkSecurityInterceptEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityInterceptEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroupInput">intercept_deployment_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupIdInput">intercept_endpoint_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroup">intercept_deployment_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupId">intercept_endpoint_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference">GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `intercept_deployment_group_input`<sup>Optional</sup> <a name="intercept_deployment_group_input" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroupInput"></a>

```python
intercept_deployment_group_input: str
```

- *Type:* str

---

##### `intercept_endpoint_group_id_input`<sup>Optional</sup> <a name="intercept_endpoint_group_id_input" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupIdInput"></a>

```python
intercept_endpoint_group_id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkSecurityInterceptEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `intercept_deployment_group`<sup>Required</sup> <a name="intercept_deployment_group" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptDeploymentGroup"></a>

```python
intercept_deployment_group: str
```

- *Type:* str

---

##### `intercept_endpoint_group_id`<sup>Required</sup> <a name="intercept_endpoint_group_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.interceptEndpointGroupId"></a>

```python
intercept_endpoint_group_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityInterceptEndpointGroupConfig <a name="GoogleNetworkSecurityInterceptEndpointGroupConfig" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_intercept_endpoint_group

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  intercept_deployment_group: str,
  intercept_endpoint_group_id: str,
  location: str,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GoogleNetworkSecurityInterceptEndpointGroupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptDeploymentGroup">intercept_deployment_group</a></code> | <code>str</code> | Immutable. The Intercept Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/interceptDeploymentGroups/{interceptDeploymentGroup}'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptEndpointGroupId">intercept_endpoint_group_id</a></code> | <code>str</code> | ID of the Intercept Endpoint Group. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.location">location</a></code> | <code>str</code> | The location of the Intercept Endpoint Group, currently restricted to 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#id GoogleNetworkSecurityInterceptEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#project GoogleNetworkSecurityInterceptEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `intercept_deployment_group`<sup>Required</sup> <a name="intercept_deployment_group" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptDeploymentGroup"></a>

```python
intercept_deployment_group: str
```

- *Type:* str

Immutable. The Intercept Deployment Group that this resource is connected to. Format is: 'projects/{project}/locations/global/interceptDeploymentGroups/{interceptDeploymentGroup}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#intercept_deployment_group GoogleNetworkSecurityInterceptEndpointGroup#intercept_deployment_group}

---

##### `intercept_endpoint_group_id`<sup>Required</sup> <a name="intercept_endpoint_group_id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.interceptEndpointGroupId"></a>

```python
intercept_endpoint_group_id: str
```

- *Type:* str

ID of the Intercept Endpoint Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#intercept_endpoint_group_id GoogleNetworkSecurityInterceptEndpointGroup#intercept_endpoint_group_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Intercept Endpoint Group, currently restricted to 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#location GoogleNetworkSecurityInterceptEndpointGroup#location}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#id GoogleNetworkSecurityInterceptEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#labels GoogleNetworkSecurityInterceptEndpointGroup#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#project GoogleNetworkSecurityInterceptEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkSecurityInterceptEndpointGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#timeouts GoogleNetworkSecurityInterceptEndpointGroup#timeouts}

---

### GoogleNetworkSecurityInterceptEndpointGroupTimeouts <a name="GoogleNetworkSecurityInterceptEndpointGroupTimeouts" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_intercept_endpoint_group

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#create GoogleNetworkSecurityInterceptEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#delete GoogleNetworkSecurityInterceptEndpointGroup#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#update GoogleNetworkSecurityInterceptEndpointGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#create GoogleNetworkSecurityInterceptEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#delete GoogleNetworkSecurityInterceptEndpointGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_network_security_intercept_endpoint_group#update GoogleNetworkSecurityInterceptEndpointGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference <a name="GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_security_intercept_endpoint_group

googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkSecurityInterceptEndpointGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkSecurityInterceptEndpointGroup.GoogleNetworkSecurityInterceptEndpointGroupTimeouts">GoogleNetworkSecurityInterceptEndpointGroupTimeouts</a>]

---



