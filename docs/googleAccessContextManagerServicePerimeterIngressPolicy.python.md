# `googleAccessContextManagerServicePerimeterIngressPolicy` Submodule <a name="`googleAccessContextManagerServicePerimeterIngressPolicy` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeterIngressPolicy <a name="GoogleAccessContextManagerServicePerimeterIngressPolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy google_access_context_manager_service_perimeter_ingress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  perimeter: str,
  id: str = None,
  ingress_from: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom = None,
  ingress_to: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo = None,
  timeouts: GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.perimeter">perimeter</a></code> | <code>str</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#id GoogleAccessContextManagerServicePerimeterIngressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.ingressFrom">ingress_from</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.ingressTo">ingress_to</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a></code> | ingress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.perimeter"></a>

- *Type:* str

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#perimeter GoogleAccessContextManagerServicePerimeterIngressPolicy#perimeter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#id GoogleAccessContextManagerServicePerimeterIngressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_from`<sup>Optional</sup> <a name="ingress_from" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.ingressFrom"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#ingress_from GoogleAccessContextManagerServicePerimeterIngressPolicy#ingress_from}

---

##### `ingress_to`<sup>Optional</sup> <a name="ingress_to" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.ingressTo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#ingress_to GoogleAccessContextManagerServicePerimeterIngressPolicy#ingress_to}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#timeouts GoogleAccessContextManagerServicePerimeterIngressPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressFrom">put_ingress_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressTo">put_ingress_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetIngressFrom">reset_ingress_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetIngressTo">reset_ingress_to</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ingress_from` <a name="put_ingress_from" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressFrom"></a>

```python
def put_ingress_from(
  identities: typing.List[str] = None,
  identity_type: str = None,
  sources: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources]] = None
) -> None
```

###### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressFrom.parameter.identities"></a>

- *Type:* typing.List[str]

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#identities GoogleAccessContextManagerServicePerimeterIngressPolicy#identities}

---

###### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressFrom.parameter.identityType"></a>

- *Type:* str

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#identity_type GoogleAccessContextManagerServicePerimeterIngressPolicy#identity_type}

---

###### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressFrom.parameter.sources"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>]]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#sources GoogleAccessContextManagerServicePerimeterIngressPolicy#sources}

---

##### `put_ingress_to` <a name="put_ingress_to" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressTo"></a>

```python
def put_ingress_to(
  operations: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations]] = None,
  resources: typing.List[str] = None
) -> None
```

###### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressTo.parameter.operations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#operations GoogleAccessContextManagerServicePerimeterIngressPolicy#operations}

---

###### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressTo.parameter.resources"></a>

- *Type:* typing.List[str]

A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#resources GoogleAccessContextManagerServicePerimeterIngressPolicy#resources}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#create GoogleAccessContextManagerServicePerimeterIngressPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#delete GoogleAccessContextManagerServicePerimeterIngressPolicy#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ingress_from` <a name="reset_ingress_from" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetIngressFrom"></a>

```python
def reset_ingress_from() -> None
```

##### `reset_ingress_to` <a name="reset_ingress_to" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetIngressTo"></a>

```python
def reset_ingress_to() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterIngressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterIngressPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeterIngressPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleAccessContextManagerServicePerimeterIngressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeterIngressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.accessPolicyId">access_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressFrom">ingress_from</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressTo">ingress_to</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressFromInput">ingress_from_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressToInput">ingress_to_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.perimeterInput">perimeter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.perimeter">perimeter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_policy_id`<sup>Required</sup> <a name="access_policy_id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.accessPolicyId"></a>

```python
access_policy_id: str
```

- *Type:* str

---

##### `ingress_from`<sup>Required</sup> <a name="ingress_from" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressFrom"></a>

```python
ingress_from: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference</a>

---

##### `ingress_to`<sup>Required</sup> <a name="ingress_to" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressTo"></a>

```python
ingress_to: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.timeouts"></a>

```python
timeouts: GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ingress_from_input`<sup>Optional</sup> <a name="ingress_from_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressFromInput"></a>

```python
ingress_from_input: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

---

##### `ingress_to_input`<sup>Optional</sup> <a name="ingress_to_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressToInput"></a>

```python
ingress_to_input: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

---

##### `perimeter_input`<sup>Optional</sup> <a name="perimeter_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.perimeterInput"></a>

```python
perimeter_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.perimeter"></a>

```python
perimeter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterIngressPolicyConfig <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  perimeter: str,
  id: str = None,
  ingress_from: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom = None,
  ingress_to: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo = None,
  timeouts: GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.perimeter">perimeter</a></code> | <code>str</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#id GoogleAccessContextManagerServicePerimeterIngressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressFrom">ingress_from</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressTo">ingress_to</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a></code> | ingress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.perimeter"></a>

```python
perimeter: str
```

- *Type:* str

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#perimeter GoogleAccessContextManagerServicePerimeterIngressPolicy#perimeter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#id GoogleAccessContextManagerServicePerimeterIngressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress_from`<sup>Optional</sup> <a name="ingress_from" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressFrom"></a>

```python
ingress_from: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#ingress_from GoogleAccessContextManagerServicePerimeterIngressPolicy#ingress_from}

---

##### `ingress_to`<sup>Optional</sup> <a name="ingress_to" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressTo"></a>

```python
ingress_to: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#ingress_to GoogleAccessContextManagerServicePerimeterIngressPolicy#ingress_to}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#timeouts GoogleAccessContextManagerServicePerimeterIngressPolicy#timeouts}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom(
  identities: typing.List[str] = None,
  identity_type: str = None,
  sources: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identities">identities</a></code> | <code>typing.List[str]</code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identityType">identity_type</a></code> | <code>str</code> | Specifies the type of identities that are allowed access from outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.sources">sources</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>]]</code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identities"></a>

```python
identities: typing.List[str]
```

- *Type:* typing.List[str]

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#identities GoogleAccessContextManagerServicePerimeterIngressPolicy#identities}

---

##### `identity_type`<sup>Optional</sup> <a name="identity_type" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#identity_type GoogleAccessContextManagerServicePerimeterIngressPolicy#identity_type}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.sources"></a>

```python
sources: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>]]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#sources GoogleAccessContextManagerServicePerimeterIngressPolicy#sources}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources(
  access_level: str = None,
  resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.accessLevel">access_level</a></code> | <code>str</code> | An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.resource">resource</a></code> | <code>str</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#access_level GoogleAccessContextManagerServicePerimeterIngressPolicy#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.resource"></a>

```python
resource: str
```

- *Type:* str

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects and VPCs are allowed.
Project format: 'projects/{projectNumber}'
VPC network format:
'//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}'.
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#resource GoogleAccessContextManagerServicePerimeterIngressPolicy#resource}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo(
  operations: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations]] = None,
  resources: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo.property.operations">operations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>]]</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo.property.operations"></a>

```python
operations: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>]]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#operations GoogleAccessContextManagerServicePerimeterIngressPolicy#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#resources GoogleAccessContextManagerServicePerimeterIngressPolicy#resources}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations(
  method_selectors: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors]] = None,
  service_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.methodSelectors">method_selectors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>]]</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.serviceName">service_name</a></code> | <code>str</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `method_selectors`<sup>Optional</sup> <a name="method_selectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.methodSelectors"></a>

```python
method_selectors: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>]]

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#method_selectors GoogleAccessContextManagerServicePerimeterIngressPolicy#method_selectors}

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#service_name GoogleAccessContextManagerServicePerimeterIngressPolicy#service_name}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors(
  method: str = None,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.method">method</a></code> | <code>str</code> | Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>str</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.method"></a>

```python
method: str
```

- *Type:* str

Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#method GoogleAccessContextManagerServicePerimeterIngressPolicy#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.permission"></a>

```python
permission: str
```

- *Type:* str

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#permission GoogleAccessContextManagerServicePerimeterIngressPolicy#permission}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#create GoogleAccessContextManagerServicePerimeterIngressPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#delete GoogleAccessContextManagerServicePerimeterIngressPolicy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#create GoogleAccessContextManagerServicePerimeterIngressPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#delete GoogleAccessContextManagerServicePerimeterIngressPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.putSources">put_sources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentities">reset_identities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentityType">reset_identity_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetSources">reset_sources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_sources` <a name="put_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.putSources"></a>

```python
def put_sources(
  value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>]]

---

##### `reset_identities` <a name="reset_identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentities"></a>

```python
def reset_identities() -> None
```

##### `reset_identity_type` <a name="reset_identity_type" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentityType"></a>

```python
def reset_identity_type() -> None
```

##### `reset_sources` <a name="reset_sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetSources"></a>

```python
def reset_sources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identitiesInput">identities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityTypeInput">identity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sourcesInput">sources_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identities">identities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityType">identity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sources"></a>

```python
sources: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList</a>

---

##### `identities_input`<sup>Optional</sup> <a name="identities_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identitiesInput"></a>

```python
identities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_type_input`<sup>Optional</sup> <a name="identity_type_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityTypeInput"></a>

```python
identity_type_input: str
```

- *Type:* str

---

##### `sources_input`<sup>Optional</sup> <a name="sources_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sourcesInput"></a>

```python
sources_input: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>]]

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identities"></a>

```python
identities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `identity_type`<sup>Required</sup> <a name="identity_type" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityType"></a>

```python
identity_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>]]

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetResource">reset_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_level` <a name="reset_access_level" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>]

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>]]

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>]]

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod">reset_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_method` <a name="reset_method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```python
def reset_method() -> None
```

##### `reset_permission` <a name="reset_permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput">method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_input`<sup>Optional</sup> <a name="method_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```python
method_input: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```python
method: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>]

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.putMethodSelectors">put_method_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors">reset_method_selectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetServiceName">reset_service_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_method_selectors` <a name="put_method_selectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.putMethodSelectors"></a>

```python
def put_method_selectors(
  value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>]]

---

##### `reset_method_selectors` <a name="reset_method_selectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors"></a>

```python
def reset_method_selectors() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetServiceName"></a>

```python
def reset_service_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectors">method_selectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput">method_selectors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `method_selectors`<sup>Required</sup> <a name="method_selectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectors"></a>

```python
method_selectors: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList</a>

---

##### `method_selectors_input`<sup>Optional</sup> <a name="method_selectors_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```python
method_selectors_input: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>]]

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>]

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.putOperations">put_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetResources">reset_resources</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_operations` <a name="put_operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.putOperations"></a>

```python
def put_operations(
  value: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>]]

---

##### `reset_operations` <a name="reset_operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_resources` <a name="reset_resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetResources"></a>

```python
def reset_resources() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operationsInput">operations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operations"></a>

```python
operations: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList</a>

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operationsInput"></a>

```python
operations_input: typing.Union[IResolvable, typing.List[GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>]]

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.internalValue"></a>

```python
internal_value: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_access_context_manager_service_perimeter_ingress_policy

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a>]

---



