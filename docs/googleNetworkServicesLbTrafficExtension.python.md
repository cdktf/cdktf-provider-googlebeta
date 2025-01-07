# `googleNetworkServicesLbTrafficExtension` Submodule <a name="`googleNetworkServicesLbTrafficExtension` Submodule" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesLbTrafficExtension <a name="GoogleNetworkServicesLbTrafficExtension" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension google_network_services_lb_traffic_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  extension_chains: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChains]],
  forwarding_rules: typing.List[str],
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  load_balancing_scheme: str = None,
  project: str = None,
  timeouts: GoogleNetworkServicesLbTrafficExtensionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.extensionChains">extension_chains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]]</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the traffic extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#id GoogleNetworkServicesLbTrafficExtension#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the LbTrafficExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#project GoogleNetworkServicesLbTrafficExtension#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.extensionChains"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#extension_chains GoogleNetworkServicesLbTrafficExtension#extension_chains}

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.forwardingRules"></a>

- *Type:* typing.List[str]

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LBTrafficExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#forwarding_rules GoogleNetworkServicesLbTrafficExtension#forwarding_rules}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.location"></a>

- *Type:* str

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#location GoogleNetworkServicesLbTrafficExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.name"></a>

- *Type:* str

Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#name GoogleNetworkServicesLbTrafficExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#description GoogleNetworkServicesLbTrafficExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#id GoogleNetworkServicesLbTrafficExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of labels associated with the LbTrafficExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#labels GoogleNetworkServicesLbTrafficExtension#labels}

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* str

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#load_balancing_scheme GoogleNetworkServicesLbTrafficExtension#load_balancing_scheme}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#project GoogleNetworkServicesLbTrafficExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#timeouts GoogleNetworkServicesLbTrafficExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putExtensionChains">put_extension_chains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLoadBalancingScheme">reset_load_balancing_scheme</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_extension_chains` <a name="put_extension_chains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putExtensionChains"></a>

```python
def put_extension_chains(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChains]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putExtensionChains.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#create GoogleNetworkServicesLbTrafficExtension#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#delete GoogleNetworkServicesLbTrafficExtension#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#update GoogleNetworkServicesLbTrafficExtension#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_load_balancing_scheme` <a name="reset_load_balancing_scheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetLoadBalancingScheme"></a>

```python
def reset_load_balancing_scheme() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleNetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleNetworkServicesLbTrafficExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleNetworkServicesLbTrafficExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleNetworkServicesLbTrafficExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesLbTrafficExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChains">extension_chains</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference">GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChainsInput">extension_chains_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRulesInput">forwarding_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingSchemeInput">load_balancing_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChains"></a>

```python
extension_chains: GoogleNetworkServicesLbTrafficExtensionExtensionChainsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference">GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `extension_chains_input`<sup>Optional</sup> <a name="extension_chains_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.extensionChainsInput"></a>

```python
extension_chains_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]]

---

##### `forwarding_rules_input`<sup>Optional</sup> <a name="forwarding_rules_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRulesInput"></a>

```python
forwarding_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme_input`<sup>Optional</sup> <a name="load_balancing_scheme_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingSchemeInput"></a>

```python
load_balancing_scheme_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleNetworkServicesLbTrafficExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.forwardingRules"></a>

```python
forwarding_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesLbTrafficExtensionConfig <a name="GoogleNetworkServicesLbTrafficExtensionConfig" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  extension_chains: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChains]],
  forwarding_rules: typing.List[str],
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  load_balancing_scheme: str = None,
  project: str = None,
  timeouts: GoogleNetworkServicesLbTrafficExtensionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.extensionChains">extension_chains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]]</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.location">location</a></code> | <code>str</code> | The location of the traffic extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.name">name</a></code> | <code>str</code> | Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#id GoogleNetworkServicesLbTrafficExtension#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the LbTrafficExtension resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#project GoogleNetworkServicesLbTrafficExtension#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.extensionChains"></a>

```python
extension_chains: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#extension_chains GoogleNetworkServicesLbTrafficExtension#extension_chains}

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.forwardingRules"></a>

```python
forwarding_rules: typing.List[str]
```

- *Type:* typing.List[str]

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LBTrafficExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#forwarding_rules GoogleNetworkServicesLbTrafficExtension#forwarding_rules}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#location GoogleNetworkServicesLbTrafficExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the LbTrafficExtension resource in the following format: projects/{project}/locations/{location}/lbTrafficExtensions/{lbTrafficExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#name GoogleNetworkServicesLbTrafficExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#description GoogleNetworkServicesLbTrafficExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#id GoogleNetworkServicesLbTrafficExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels associated with the LbTrafficExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#labels GoogleNetworkServicesLbTrafficExtension#labels}

---

##### `load_balancing_scheme`<sup>Optional</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#load_balancing_scheme GoogleNetworkServicesLbTrafficExtension#load_balancing_scheme}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#project GoogleNetworkServicesLbTrafficExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionConfig.property.timeouts"></a>

```python
timeouts: GoogleNetworkServicesLbTrafficExtensionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#timeouts GoogleNetworkServicesLbTrafficExtension#timeouts}

---

### GoogleNetworkServicesLbTrafficExtensionExtensionChains <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChains" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains(
  extensions: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions]],
  match_condition: GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.extensions">extensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]</code> | extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.name">name</a></code> | <code>str</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.extensions"></a>

```python
extensions: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#extensions GoogleNetworkServicesLbTrafficExtension#extensions}

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.matchCondition"></a>

```python
match_condition: GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#match_condition GoogleNetworkServicesLbTrafficExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#name GoogleNetworkServicesLbTrafficExtension#name}

---

### GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions(
  name: str,
  service: str,
  authority: str = None,
  fail_open: typing.Union[bool, IResolvable] = None,
  forward_headers: typing.List[str] = None,
  supported_events: typing.List[str] = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>str</code> | The name for this extension. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>str</code> | The reference to the service that runs the extension. Must be a reference to a backend service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.authority">authority</a></code> | <code>str</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.supportedEvents">supported_events</a></code> | <code>typing.List[str]</code> | A set of events during request or response processing for which this extension is called. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.timeout">timeout</a></code> | <code>str</code> | Specifies the timeout for each individual message on the stream. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#name GoogleNetworkServicesLbTrafficExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.service"></a>

```python
service: str
```

- *Type:* str

The reference to the service that runs the extension. Must be a reference to a backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#service GoogleNetworkServicesLbTrafficExtension#service}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.authority"></a>

```python
authority: str
```

- *Type:* str

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#authority GoogleNetworkServicesLbTrafficExtension#authority}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#fail_open GoogleNetworkServicesLbTrafficExtension#fail_open}

---

##### `forward_headers`<sup>Optional</sup> <a name="forward_headers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#forward_headers GoogleNetworkServicesLbTrafficExtension#forward_headers}

---

##### `supported_events`<sup>Optional</sup> <a name="supported_events" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```python
supported_events: typing.List[str]
```

- *Type:* typing.List[str]

A set of events during request or response processing for which this extension is called.

This field is required for the LbTrafficExtension resource. It's not relevant for the LbRouteExtension
resource. Possible values:'EVENT_TYPE_UNSPECIFIED', 'REQUEST_HEADERS', 'REQUEST_BODY', 'RESPONSE_HEADERS',
'RESPONSE_BODY', 'RESPONSE_BODY' and 'RESPONSE_BODY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#supported_events GoogleNetworkServicesLbTrafficExtension#supported_events}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#timeout GoogleNetworkServicesLbTrafficExtension#timeout}

---

### GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition(
  cel_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.property.celExpression">cel_expression</a></code> | <code>str</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```python
cel_expression: str
```

- *Type:* str

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#cel_expression GoogleNetworkServicesLbTrafficExtension#cel_expression}

---

### GoogleNetworkServicesLbTrafficExtensionTimeouts <a name="GoogleNetworkServicesLbTrafficExtensionTimeouts" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#create GoogleNetworkServicesLbTrafficExtension#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#delete GoogleNetworkServicesLbTrafficExtension#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#update GoogleNetworkServicesLbTrafficExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#create GoogleNetworkServicesLbTrafficExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#delete GoogleNetworkServicesLbTrafficExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#update GoogleNetworkServicesLbTrafficExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetAuthority">reset_authority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">reset_forward_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">reset_supported_events</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authority` <a name="reset_authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```python
def reset_authority() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_forward_headers` <a name="reset_forward_headers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```python
def reset_forward_headers() -> None
```

##### `reset_supported_events` <a name="reset_supported_events" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```python
def reset_supported_events() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">authority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forward_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">supported_events_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authority">authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">supported_events</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authority_input`<sup>Optional</sup> <a name="authority_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```python
authority_input: str
```

- *Type:* str

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```python
fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_headers_input`<sup>Optional</sup> <a name="forward_headers_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```python
forward_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `supported_events_input`<sup>Optional</sup> <a name="supported_events_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```python
supported_events_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```python
authority: str
```

- *Type:* str

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_headers`<sup>Required</sup> <a name="forward_headers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `supported_events`<sup>Required</sup> <a name="supported_events" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```python
supported_events: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsList <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsList" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]]

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">cel_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">cel_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cel_expression_input`<sup>Optional</sup> <a name="cel_expression_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```python
cel_expression_input: str
```

- *Type:* str

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```python
cel_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```python
internal_value: GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions">put_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition">put_match_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extensions` <a name="put_extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions"></a>

```python
def put_extensions(
  value: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]

---

##### `put_match_condition` <a name="put_match_condition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```python
def put_match_condition(
  cel_expression: str
) -> None
```

###### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.putMatchCondition.parameter.celExpression"></a>

- *Type:* str

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_network_services_lb_traffic_extension#cel_expression GoogleNetworkServicesLbTrafficExtension#cel_expression}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensionsInput">extensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchConditionInput">match_condition_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensions"></a>

```python
extensions: GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensionsList</a>

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```python
match_condition: GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensions_input`<sup>Optional</sup> <a name="extensions_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```python
extensions_input: typing.Union[IResolvable, typing.List[GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions">GoogleNetworkServicesLbTrafficExtensionExtensionChainsExtensions</a>]]

---

##### `match_condition_input`<sup>Optional</sup> <a name="match_condition_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```python
match_condition_input: GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbTrafficExtensionExtensionChainsMatchCondition</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChainsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesLbTrafficExtensionExtensionChains]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionExtensionChains">GoogleNetworkServicesLbTrafficExtensionExtensionChains</a>]

---


### GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_network_services_lb_traffic_extension

googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleNetworkServicesLbTrafficExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleNetworkServicesLbTrafficExtension.GoogleNetworkServicesLbTrafficExtensionTimeouts">GoogleNetworkServicesLbTrafficExtensionTimeouts</a>]

---



