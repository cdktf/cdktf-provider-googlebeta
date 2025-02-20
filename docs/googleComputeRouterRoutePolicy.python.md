# `googleComputeRouterRoutePolicy` Submodule <a name="`googleComputeRouterRoutePolicy` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterRoutePolicy <a name="GoogleComputeRouterRoutePolicy" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy google_compute_router_route_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  router: str,
  terms: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTerms]],
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleComputeRouterRoutePolicyTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the route policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.router">router</a></code> | <code>str</code> | The name of the Cloud Router in which this route policy will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.terms">terms</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]]</code> | terms block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#id GoogleComputeRouterRoutePolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#project GoogleComputeRouterRoutePolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts">GoogleComputeRouterRoutePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.type">type</a></code> | <code>str</code> | This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.name"></a>

- *Type:* str

Name of the route policy.

This policy's name, which must be a resource ID segment and unique within all policies owned by the Router

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#name GoogleComputeRouterRoutePolicy#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.router"></a>

- *Type:* str

The name of the Cloud Router in which this route policy will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#router GoogleComputeRouterRoutePolicy#router}

---

##### `terms`<sup>Required</sup> <a name="terms" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.terms"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]]

terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#terms GoogleComputeRouterRoutePolicy#terms}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#id GoogleComputeRouterRoutePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#project GoogleComputeRouterRoutePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.region"></a>

- *Type:* str

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#region GoogleComputeRouterRoutePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts">GoogleComputeRouterRoutePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#timeouts GoogleComputeRouterRoutePolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.Initializer.parameter.type"></a>

- *Type:* str

This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#type GoogleComputeRouterRoutePolicy#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.putTerms">put_terms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_terms` <a name="put_terms" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.putTerms"></a>

```python
def put_terms(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTerms]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.putTerms.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#create GoogleComputeRouterRoutePolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#delete GoogleComputeRouterRoutePolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#update GoogleComputeRouterRoutePolicy#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleComputeRouterRoutePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleComputeRouterRoutePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleComputeRouterRoutePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleComputeRouterRoutePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterRoutePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.terms">terms</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList">GoogleComputeRouterRoutePolicyTermsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference">GoogleComputeRouterRoutePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.routerInput">router_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.termsInput">terms_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts">GoogleComputeRouterRoutePolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.router">router</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `terms`<sup>Required</sup> <a name="terms" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.terms"></a>

```python
terms: GoogleComputeRouterRoutePolicyTermsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList">GoogleComputeRouterRoutePolicyTermsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.timeouts"></a>

```python
timeouts: GoogleComputeRouterRoutePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference">GoogleComputeRouterRoutePolicyTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `router_input`<sup>Optional</sup> <a name="router_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.routerInput"></a>

```python
router_input: str
```

- *Type:* str

---

##### `terms_input`<sup>Optional</sup> <a name="terms_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.termsInput"></a>

```python
terms_input: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTerms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleComputeRouterRoutePolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts">GoogleComputeRouterRoutePolicyTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.router"></a>

```python
router: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterRoutePolicyConfig <a name="GoogleComputeRouterRoutePolicyConfig" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  router: str,
  terms: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTerms]],
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: GoogleComputeRouterRoutePolicyTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.name">name</a></code> | <code>str</code> | Name of the route policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.router">router</a></code> | <code>str</code> | The name of the Cloud Router in which this route policy will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.terms">terms</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]]</code> | terms block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#id GoogleComputeRouterRoutePolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#project GoogleComputeRouterRoutePolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.region">region</a></code> | <code>str</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts">GoogleComputeRouterRoutePolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.type">type</a></code> | <code>str</code> | This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the route policy.

This policy's name, which must be a resource ID segment and unique within all policies owned by the Router

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#name GoogleComputeRouterRoutePolicy#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.router"></a>

```python
router: str
```

- *Type:* str

The name of the Cloud Router in which this route policy will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#router GoogleComputeRouterRoutePolicy#router}

---

##### `terms`<sup>Required</sup> <a name="terms" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.terms"></a>

```python
terms: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTerms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]]

terms block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#terms GoogleComputeRouterRoutePolicy#terms}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#id GoogleComputeRouterRoutePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#project GoogleComputeRouterRoutePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#region GoogleComputeRouterRoutePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.timeouts"></a>

```python
timeouts: GoogleComputeRouterRoutePolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts">GoogleComputeRouterRoutePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#timeouts GoogleComputeRouterRoutePolicy#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyConfig.property.type"></a>

```python
type: str
```

- *Type:* str

This is policy's type, which is one of IMPORT or EXPORT Possible values: ["ROUTE_POLICY_TYPE_IMPORT", "ROUTE_POLICY_TYPE_EXPORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#type GoogleComputeRouterRoutePolicy#type}

---

### GoogleComputeRouterRoutePolicyTerms <a name="GoogleComputeRouterRoutePolicyTerms" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms(
  priority: typing.Union[int, float],
  actions: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTermsActions]] = None,
  match: GoogleComputeRouterRoutePolicyTermsMatch = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | The evaluation priority for this term, which must be between 0 (inclusive) and 231 (exclusive), and unique within the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms.property.actions">actions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions">GoogleComputeRouterRoutePolicyTermsActions</a>]]</code> | actions block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch">GoogleComputeRouterRoutePolicyTermsMatch</a></code> | match block. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The evaluation priority for this term, which must be between 0 (inclusive) and 231 (exclusive), and unique within the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#priority GoogleComputeRouterRoutePolicy#priority}

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms.property.actions"></a>

```python
actions: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTermsActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions">GoogleComputeRouterRoutePolicyTermsActions</a>]]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#actions GoogleComputeRouterRoutePolicy#actions}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms.property.match"></a>

```python
match: GoogleComputeRouterRoutePolicyTermsMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch">GoogleComputeRouterRoutePolicyTermsMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#match GoogleComputeRouterRoutePolicy#match}

---

### GoogleComputeRouterRoutePolicyTermsActions <a name="GoogleComputeRouterRoutePolicyTermsActions" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#expression GoogleComputeRouterRoutePolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#description GoogleComputeRouterRoutePolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#location GoogleComputeRouterRoutePolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#title GoogleComputeRouterRoutePolicy#title}

---

### GoogleComputeRouterRoutePolicyTermsMatch <a name="GoogleComputeRouterRoutePolicyTermsMatch" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#expression GoogleComputeRouterRoutePolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#description GoogleComputeRouterRoutePolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#location GoogleComputeRouterRoutePolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#title GoogleComputeRouterRoutePolicy#title}

---

### GoogleComputeRouterRoutePolicyTimeouts <a name="GoogleComputeRouterRoutePolicyTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#create GoogleComputeRouterRoutePolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#delete GoogleComputeRouterRoutePolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#update GoogleComputeRouterRoutePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#create GoogleComputeRouterRoutePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#delete GoogleComputeRouterRoutePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#update GoogleComputeRouterRoutePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterRoutePolicyTermsActionsList <a name="GoogleComputeRouterRoutePolicyTermsActionsList" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRouterRoutePolicyTermsActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions">GoogleComputeRouterRoutePolicyTermsActions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTermsActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions">GoogleComputeRouterRoutePolicyTermsActions</a>]]

---


### GoogleComputeRouterRoutePolicyTermsActionsOutputReference <a name="GoogleComputeRouterRoutePolicyTermsActionsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions">GoogleComputeRouterRoutePolicyTermsActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRouterRoutePolicyTermsActions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions">GoogleComputeRouterRoutePolicyTermsActions</a>]

---


### GoogleComputeRouterRoutePolicyTermsList <a name="GoogleComputeRouterRoutePolicyTermsList" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleComputeRouterRoutePolicyTermsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTerms]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]]

---


### GoogleComputeRouterRoutePolicyTermsMatchOutputReference <a name="GoogleComputeRouterRoutePolicyTermsMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch">GoogleComputeRouterRoutePolicyTermsMatch</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference.property.internalValue"></a>

```python
internal_value: GoogleComputeRouterRoutePolicyTermsMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch">GoogleComputeRouterRoutePolicyTermsMatch</a>

---


### GoogleComputeRouterRoutePolicyTermsOutputReference <a name="GoogleComputeRouterRoutePolicyTermsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.putActions">put_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.putMatch">put_match</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.resetActions">reset_actions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.resetMatch">reset_match</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_actions` <a name="put_actions" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.putActions"></a>

```python
def put_actions(
  value: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTermsActions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.putActions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions">GoogleComputeRouterRoutePolicyTermsActions</a>]]

---

##### `put_match` <a name="put_match" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.putMatch"></a>

```python
def put_match(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.putMatch.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#expression GoogleComputeRouterRoutePolicy#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.putMatch.parameter.description"></a>

- *Type:* str

Description of the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#description GoogleComputeRouterRoutePolicy#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.putMatch.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#location GoogleComputeRouterRoutePolicy#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.putMatch.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_compute_router_route_policy#title GoogleComputeRouterRoutePolicy#title}

---

##### `reset_actions` <a name="reset_actions" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.resetActions"></a>

```python
def reset_actions() -> None
```

##### `reset_match` <a name="reset_match" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.resetMatch"></a>

```python
def reset_match() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList">GoogleComputeRouterRoutePolicyTermsActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference">GoogleComputeRouterRoutePolicyTermsMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.actionsInput">actions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions">GoogleComputeRouterRoutePolicyTermsActions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.matchInput">match_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch">GoogleComputeRouterRoutePolicyTermsMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.actions"></a>

```python
actions: GoogleComputeRouterRoutePolicyTermsActionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActionsList">GoogleComputeRouterRoutePolicyTermsActionsList</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.match"></a>

```python
match: GoogleComputeRouterRoutePolicyTermsMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatchOutputReference">GoogleComputeRouterRoutePolicyTermsMatchOutputReference</a>

---

##### `actions_input`<sup>Optional</sup> <a name="actions_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.actionsInput"></a>

```python
actions_input: typing.Union[IResolvable, typing.List[GoogleComputeRouterRoutePolicyTermsActions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsActions">GoogleComputeRouterRoutePolicyTermsActions</a>]]

---

##### `match_input`<sup>Optional</sup> <a name="match_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.matchInput"></a>

```python
match_input: GoogleComputeRouterRoutePolicyTermsMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsMatch">GoogleComputeRouterRoutePolicyTermsMatch</a>

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTermsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRouterRoutePolicyTerms]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTerms">GoogleComputeRouterRoutePolicyTerms</a>]

---


### GoogleComputeRouterRoutePolicyTimeoutsOutputReference <a name="GoogleComputeRouterRoutePolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_compute_router_route_policy

googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts">GoogleComputeRouterRoutePolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleComputeRouterRoutePolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleComputeRouterRoutePolicy.GoogleComputeRouterRoutePolicyTimeouts">GoogleComputeRouterRoutePolicyTimeouts</a>]

---



