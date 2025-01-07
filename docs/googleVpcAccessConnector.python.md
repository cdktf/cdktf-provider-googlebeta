# `googleVpcAccessConnector` Submodule <a name="`googleVpcAccessConnector` Submodule" id="@cdktf/provider-google-beta.googleVpcAccessConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVpcAccessConnector <a name="GoogleVpcAccessConnector" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector google_vpc_access_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vpc_access_connector

googleVpcAccessConnector.GoogleVpcAccessConnector(
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
  id: str = None,
  ip_cidr_range: str = None,
  machine_type: str = None,
  max_instances: typing.Union[int, float] = None,
  max_throughput: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  min_throughput: typing.Union[int, float] = None,
  network: str = None,
  project: str = None,
  region: str = None,
  subnet: GoogleVpcAccessConnectorSubnet = None,
  timeouts: GoogleVpcAccessConnectorTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#id GoogleVpcAccessConnector#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.machineType">machine_type</a></code> | <code>str</code> | Machine type of VM Instance underlying connector. Default is e2-micro. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.maxThroughput">max_throughput</a></code> | <code>typing.Union[int, float]</code> | Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.minThroughput">min_throughput</a></code> | <code>typing.Union[int, float]</code> | Minimum throughput of the connector in Mbps. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.network">network</a></code> | <code>str</code> | Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#project GoogleVpcAccessConnector#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.name"></a>

- *Type:* str

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#name GoogleVpcAccessConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#id GoogleVpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_cidr_range`<sup>Optional</sup> <a name="ip_cidr_range" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.ipCidrRange"></a>

- *Type:* str

The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#ip_cidr_range GoogleVpcAccessConnector#ip_cidr_range}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.machineType"></a>

- *Type:* str

Machine type of VM Instance underlying connector. Default is e2-micro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#machine_type GoogleVpcAccessConnector#machine_type}

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.maxInstances"></a>

- *Type:* typing.Union[int, float]

Maximum value of instances in autoscaling group underlying the connector.

Value must be between 3 and 10, inclusive. Must be
higher than the value specified by min_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#max_instances GoogleVpcAccessConnector#max_instances}

---

##### `max_throughput`<sup>Optional</sup> <a name="max_throughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.maxThroughput"></a>

- *Type:* typing.Union[int, float]

Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'.

Default is 300. Refers to the expected throughput
when using an e2-micro machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by
min_throughput. Only one of 'max_throughput' and 'max_instances' can be specified. The use of max_throughput is discouraged in favor of max_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#max_throughput GoogleVpcAccessConnector#max_throughput}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.minInstances"></a>

- *Type:* typing.Union[int, float]

Minimum value of instances in autoscaling group underlying the connector.

Value must be between 2 and 9, inclusive. Must be
lower than the value specified by max_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#min_instances GoogleVpcAccessConnector#min_instances}

---

##### `min_throughput`<sup>Optional</sup> <a name="min_throughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.minThroughput"></a>

- *Type:* typing.Union[int, float]

Minimum throughput of the connector in Mbps.

Default and min is 200. Refers to the expected throughput when using an e2-micro machine type.
Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by max_throughput.
Only one of 'min_throughput' and 'min_instances' can be specified. The use of min_throughput is discouraged in favor of min_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#min_throughput GoogleVpcAccessConnector#min_throughput}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.network"></a>

- *Type:* str

Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#network GoogleVpcAccessConnector#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#project GoogleVpcAccessConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.region"></a>

- *Type:* str

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#region GoogleVpcAccessConnector#region}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.subnet"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#subnet GoogleVpcAccessConnector#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#timeouts GoogleVpcAccessConnector#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putSubnet">put_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetIpCidrRange">reset_ip_cidr_range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMachineType">reset_machine_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMaxInstances">reset_max_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMaxThroughput">reset_max_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMinInstances">reset_min_instances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMinThroughput">reset_min_throughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetSubnet">reset_subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_subnet` <a name="put_subnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putSubnet"></a>

```python
def put_subnet(
  name: str = None,
  project_id: str = None
) -> None
```

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putSubnet.parameter.name"></a>

- *Type:* str

Subnet name (relative, not fully qualified).

E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#name GoogleVpcAccessConnector#name}

---

###### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putSubnet.parameter.projectId"></a>

- *Type:* str

Project in which the subnet exists.

If not set, this project is assumed to be the project for which the connector create request was issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#project_id GoogleVpcAccessConnector#project_id}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#create GoogleVpcAccessConnector#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#delete GoogleVpcAccessConnector#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_cidr_range` <a name="reset_ip_cidr_range" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetIpCidrRange"></a>

```python
def reset_ip_cidr_range() -> None
```

##### `reset_machine_type` <a name="reset_machine_type" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMachineType"></a>

```python
def reset_machine_type() -> None
```

##### `reset_max_instances` <a name="reset_max_instances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMaxInstances"></a>

```python
def reset_max_instances() -> None
```

##### `reset_max_throughput` <a name="reset_max_throughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMaxThroughput"></a>

```python
def reset_max_throughput() -> None
```

##### `reset_min_instances` <a name="reset_min_instances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMinInstances"></a>

```python
def reset_min_instances() -> None
```

##### `reset_min_throughput` <a name="reset_min_throughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetMinThroughput"></a>

```python
def reset_min_throughput() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_subnet` <a name="reset_subnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetSubnet"></a>

```python
def reset_subnet() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVpcAccessConnector resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vpc_access_connector

googleVpcAccessConnector.GoogleVpcAccessConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vpc_access_connector

googleVpcAccessConnector.GoogleVpcAccessConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vpc_access_connector

googleVpcAccessConnector.GoogleVpcAccessConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vpc_access_connector

googleVpcAccessConnector.GoogleVpcAccessConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVpcAccessConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVpcAccessConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVpcAccessConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVpcAccessConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.connectedProjects">connected_projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference">GoogleVpcAccessConnectorSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference">GoogleVpcAccessConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.ipCidrRangeInput">ip_cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.machineTypeInput">machine_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxInstancesInput">max_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxThroughputInput">max_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minInstancesInput">min_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minThroughputInput">min_throughput_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.subnetInput">subnet_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.machineType">machine_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxThroughput">max_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minThroughput">min_throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connected_projects`<sup>Required</sup> <a name="connected_projects" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.connectedProjects"></a>

```python
connected_projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet`<sup>Required</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.subnet"></a>

```python
subnet: GoogleVpcAccessConnectorSubnetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference">GoogleVpcAccessConnectorSubnetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.timeouts"></a>

```python
timeouts: GoogleVpcAccessConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference">GoogleVpcAccessConnectorTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_cidr_range_input`<sup>Optional</sup> <a name="ip_cidr_range_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.ipCidrRangeInput"></a>

```python
ip_cidr_range_input: str
```

- *Type:* str

---

##### `machine_type_input`<sup>Optional</sup> <a name="machine_type_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.machineTypeInput"></a>

```python
machine_type_input: str
```

- *Type:* str

---

##### `max_instances_input`<sup>Optional</sup> <a name="max_instances_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxInstancesInput"></a>

```python
max_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_throughput_input`<sup>Optional</sup> <a name="max_throughput_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxThroughputInput"></a>

```python
max_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances_input`<sup>Optional</sup> <a name="min_instances_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minInstancesInput"></a>

```python
min_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_throughput_input`<sup>Optional</sup> <a name="min_throughput_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minThroughputInput"></a>

```python
min_throughput_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `subnet_input`<sup>Optional</sup> <a name="subnet_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.subnetInput"></a>

```python
subnet_input: GoogleVpcAccessConnectorSubnet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleVpcAccessConnectorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_cidr_range`<sup>Required</sup> <a name="ip_cidr_range" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

---

##### `machine_type`<sup>Required</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

---

##### `max_instances`<sup>Required</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_throughput`<sup>Required</sup> <a name="max_throughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.maxThroughput"></a>

```python
max_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_instances`<sup>Required</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_throughput`<sup>Required</sup> <a name="min_throughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.minThroughput"></a>

```python
min_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVpcAccessConnectorConfig <a name="GoogleVpcAccessConnectorConfig" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vpc_access_connector

googleVpcAccessConnector.GoogleVpcAccessConnectorConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  ip_cidr_range: str = None,
  machine_type: str = None,
  max_instances: typing.Union[int, float] = None,
  max_throughput: typing.Union[int, float] = None,
  min_instances: typing.Union[int, float] = None,
  min_throughput: typing.Union[int, float] = None,
  network: str = None,
  project: str = None,
  region: str = None,
  subnet: GoogleVpcAccessConnectorSubnet = None,
  timeouts: GoogleVpcAccessConnectorTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.name">name</a></code> | <code>str</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#id GoogleVpcAccessConnector#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.ipCidrRange">ip_cidr_range</a></code> | <code>str</code> | The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.machineType">machine_type</a></code> | <code>str</code> | Machine type of VM Instance underlying connector. Default is e2-micro. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.maxInstances">max_instances</a></code> | <code>typing.Union[int, float]</code> | Maximum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.maxThroughput">max_throughput</a></code> | <code>typing.Union[int, float]</code> | Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.minInstances">min_instances</a></code> | <code>typing.Union[int, float]</code> | Minimum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.minThroughput">min_throughput</a></code> | <code>typing.Union[int, float]</code> | Minimum throughput of the connector in Mbps. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.network">network</a></code> | <code>str</code> | Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#project GoogleVpcAccessConnector#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.region">region</a></code> | <code>str</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.subnet">subnet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#name GoogleVpcAccessConnector#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#id GoogleVpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_cidr_range`<sup>Optional</sup> <a name="ip_cidr_range" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.ipCidrRange"></a>

```python
ip_cidr_range: str
```

- *Type:* str

The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#ip_cidr_range GoogleVpcAccessConnector#ip_cidr_range}

---

##### `machine_type`<sup>Optional</sup> <a name="machine_type" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.machineType"></a>

```python
machine_type: str
```

- *Type:* str

Machine type of VM Instance underlying connector. Default is e2-micro.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#machine_type GoogleVpcAccessConnector#machine_type}

---

##### `max_instances`<sup>Optional</sup> <a name="max_instances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.maxInstances"></a>

```python
max_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum value of instances in autoscaling group underlying the connector.

Value must be between 3 and 10, inclusive. Must be
higher than the value specified by min_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#max_instances GoogleVpcAccessConnector#max_instances}

---

##### `max_throughput`<sup>Optional</sup> <a name="max_throughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.maxThroughput"></a>

```python
max_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'.

Default is 300. Refers to the expected throughput
when using an e2-micro machine type. Value must be a multiple of 100 from 300 through 1000. Must be higher than the value specified by
min_throughput. Only one of 'max_throughput' and 'max_instances' can be specified. The use of max_throughput is discouraged in favor of max_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#max_throughput GoogleVpcAccessConnector#max_throughput}

---

##### `min_instances`<sup>Optional</sup> <a name="min_instances" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.minInstances"></a>

```python
min_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum value of instances in autoscaling group underlying the connector.

Value must be between 2 and 9, inclusive. Must be
lower than the value specified by max_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#min_instances GoogleVpcAccessConnector#min_instances}

---

##### `min_throughput`<sup>Optional</sup> <a name="min_throughput" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.minThroughput"></a>

```python
min_throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum throughput of the connector in Mbps.

Default and min is 200. Refers to the expected throughput when using an e2-micro machine type.
Value must be a multiple of 100 from 200 through 900. Must be lower than the value specified by max_throughput.
Only one of 'min_throughput' and 'min_instances' can be specified. The use of min_throughput is discouraged in favor of min_instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#min_throughput GoogleVpcAccessConnector#min_throughput}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#network GoogleVpcAccessConnector#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#project GoogleVpcAccessConnector#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#region GoogleVpcAccessConnector#region}

---

##### `subnet`<sup>Optional</sup> <a name="subnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.subnet"></a>

```python
subnet: GoogleVpcAccessConnectorSubnet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#subnet GoogleVpcAccessConnector#subnet}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorConfig.property.timeouts"></a>

```python
timeouts: GoogleVpcAccessConnectorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#timeouts GoogleVpcAccessConnector#timeouts}

---

### GoogleVpcAccessConnectorSubnet <a name="GoogleVpcAccessConnectorSubnet" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vpc_access_connector

googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet(
  name: str = None,
  project_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet.property.name">name</a></code> | <code>str</code> | Subnet name (relative, not fully qualified). |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet.property.projectId">project_id</a></code> | <code>str</code> | Project in which the subnet exists. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet.property.name"></a>

```python
name: str
```

- *Type:* str

Subnet name (relative, not fully qualified).

E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#name GoogleVpcAccessConnector#name}

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Project in which the subnet exists.

If not set, this project is assumed to be the project for which the connector create request was issued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#project_id GoogleVpcAccessConnector#project_id}

---

### GoogleVpcAccessConnectorTimeouts <a name="GoogleVpcAccessConnectorTimeouts" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vpc_access_connector

googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#create GoogleVpcAccessConnector#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#delete GoogleVpcAccessConnector#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#create GoogleVpcAccessConnector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_vpc_access_connector#delete GoogleVpcAccessConnector#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVpcAccessConnectorSubnetOutputReference <a name="GoogleVpcAccessConnectorSubnetOutputReference" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vpc_access_connector

googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resetProjectId">reset_project_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.resetProjectId"></a>

```python
def reset_project_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnetOutputReference.property.internalValue"></a>

```python
internal_value: GoogleVpcAccessConnectorSubnet
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorSubnet">GoogleVpcAccessConnectorSubnet</a>

---


### GoogleVpcAccessConnectorTimeoutsOutputReference <a name="GoogleVpcAccessConnectorTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vpc_access_connector

googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVpcAccessConnectorTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVpcAccessConnector.GoogleVpcAccessConnectorTimeouts">GoogleVpcAccessConnectorTimeouts</a>]

---



