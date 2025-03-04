# `googleVmwareengineExternalAccessRule` Submodule <a name="`googleVmwareengineExternalAccessRule` Submodule" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVmwareengineExternalAccessRule <a name="GoogleVmwareengineExternalAccessRule" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule google_vmwareengine_external_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  destination_ip_ranges: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleDestinationIpRanges]],
  destination_ports: typing.List[str],
  ip_protocol: str,
  name: str,
  parent: str,
  priority: typing.Union[int, float],
  source_ip_ranges: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleSourceIpRanges]],
  source_ports: typing.List[str],
  description: str = None,
  id: str = None,
  timeouts: GoogleVmwareengineExternalAccessRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.action">action</a></code> | <code>str</code> | The action that the external access rule performs. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.destinationIpRanges">destination_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]]</code> | destination_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.destinationPorts">destination_ports</a></code> | <code>typing.List[str]</code> | A list of destination ports to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The ID of the external access rule. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | External access rule priority, which determines the external access rule to use when multiple rules apply. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.sourceIpRanges">source_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]]</code> | source_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.sourcePorts">source_ports</a></code> | <code>typing.List[str]</code> | A list of source ports to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.description">description</a></code> | <code>str</code> | User-provided description for the external access rule. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#id GoogleVmwareengineExternalAccessRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.action"></a>

- *Type:* str

The action that the external access rule performs. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#action GoogleVmwareengineExternalAccessRule#action}

---

##### `destination_ip_ranges`<sup>Required</sup> <a name="destination_ip_ranges" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.destinationIpRanges"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]]

destination_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#destination_ip_ranges GoogleVmwareengineExternalAccessRule#destination_ip_ranges}

---

##### `destination_ports`<sup>Required</sup> <a name="destination_ports" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.destinationPorts"></a>

- *Type:* typing.List[str]

A list of destination ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#destination_ports GoogleVmwareengineExternalAccessRule#destination_ports}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.ipProtocol"></a>

- *Type:* str

The IP protocol to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#ip_protocol GoogleVmwareengineExternalAccessRule#ip_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.name"></a>

- *Type:* str

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#name GoogleVmwareengineExternalAccessRule#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.parent"></a>

- *Type:* str

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#parent GoogleVmwareengineExternalAccessRule#parent}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

External access rule priority, which determines the external access rule to use when multiple rules apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#priority GoogleVmwareengineExternalAccessRule#priority}

---

##### `source_ip_ranges`<sup>Required</sup> <a name="source_ip_ranges" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.sourceIpRanges"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]]

source_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#source_ip_ranges GoogleVmwareengineExternalAccessRule#source_ip_ranges}

---

##### `source_ports`<sup>Required</sup> <a name="source_ports" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.sourcePorts"></a>

- *Type:* typing.List[str]

A list of source ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#source_ports GoogleVmwareengineExternalAccessRule#source_ports}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.description"></a>

- *Type:* str

User-provided description for the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#description GoogleVmwareengineExternalAccessRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#id GoogleVmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#timeouts GoogleVmwareengineExternalAccessRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putDestinationIpRanges">put_destination_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putSourceIpRanges">put_source_ip_ranges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination_ip_ranges` <a name="put_destination_ip_ranges" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putDestinationIpRanges"></a>

```python
def put_destination_ip_ranges(
  value: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleDestinationIpRanges]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putDestinationIpRanges.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]]

---

##### `put_source_ip_ranges` <a name="put_source_ip_ranges" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putSourceIpRanges"></a>

```python
def put_source_ip_ranges(
  value: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleSourceIpRanges]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putSourceIpRanges.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#create GoogleVmwareengineExternalAccessRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#delete GoogleVmwareengineExternalAccessRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#update GoogleVmwareengineExternalAccessRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleVmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleVmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleVmwareengineExternalAccessRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleVmwareengineExternalAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleVmwareengineExternalAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationIpRanges">destination_ip_ranges</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList">GoogleVmwareengineExternalAccessRuleDestinationIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourceIpRanges">source_ip_ranges</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList">GoogleVmwareengineExternalAccessRuleSourceIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference">GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationIpRangesInput">destination_ip_ranges_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationPortsInput">destination_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourceIpRangesInput">source_ip_ranges_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourcePortsInput">source_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationPorts">destination_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourcePorts">source_ports</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `destination_ip_ranges`<sup>Required</sup> <a name="destination_ip_ranges" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationIpRanges"></a>

```python
destination_ip_ranges: GoogleVmwareengineExternalAccessRuleDestinationIpRangesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList">GoogleVmwareengineExternalAccessRuleDestinationIpRangesList</a>

---

##### `source_ip_ranges`<sup>Required</sup> <a name="source_ip_ranges" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourceIpRanges"></a>

```python
source_ip_ranges: GoogleVmwareengineExternalAccessRuleSourceIpRangesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList">GoogleVmwareengineExternalAccessRuleSourceIpRangesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.timeouts"></a>

```python
timeouts: GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference">GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_ip_ranges_input`<sup>Optional</sup> <a name="destination_ip_ranges_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationIpRangesInput"></a>

```python
destination_ip_ranges_input: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleDestinationIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]]

---

##### `destination_ports_input`<sup>Optional</sup> <a name="destination_ports_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationPortsInput"></a>

```python
destination_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_ip_ranges_input`<sup>Optional</sup> <a name="source_ip_ranges_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourceIpRangesInput"></a>

```python
source_ip_ranges_input: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleSourceIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]]

---

##### `source_ports_input`<sup>Optional</sup> <a name="source_ports_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourcePortsInput"></a>

```python
source_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleVmwareengineExternalAccessRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_ports`<sup>Required</sup> <a name="destination_ports" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.destinationPorts"></a>

```python
destination_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_ports`<sup>Required</sup> <a name="source_ports" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.sourcePorts"></a>

```python
source_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVmwareengineExternalAccessRuleConfig <a name="GoogleVmwareengineExternalAccessRuleConfig" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  destination_ip_ranges: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleDestinationIpRanges]],
  destination_ports: typing.List[str],
  ip_protocol: str,
  name: str,
  parent: str,
  priority: typing.Union[int, float],
  source_ip_ranges: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleSourceIpRanges]],
  source_ports: typing.List[str],
  description: str = None,
  id: str = None,
  timeouts: GoogleVmwareengineExternalAccessRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.action">action</a></code> | <code>str</code> | The action that the external access rule performs. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.destinationIpRanges">destination_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]]</code> | destination_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.destinationPorts">destination_ports</a></code> | <code>typing.List[str]</code> | A list of destination ports to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | The IP protocol to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.name">name</a></code> | <code>str</code> | The ID of the external access rule. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.parent">parent</a></code> | <code>str</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | External access rule priority, which determines the external access rule to use when multiple rules apply. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.sourceIpRanges">source_ip_ranges</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]]</code> | source_ip_ranges block. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.sourcePorts">source_ports</a></code> | <code>typing.List[str]</code> | A list of source ports to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.description">description</a></code> | <code>str</code> | User-provided description for the external access rule. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#id GoogleVmwareengineExternalAccessRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

The action that the external access rule performs. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#action GoogleVmwareengineExternalAccessRule#action}

---

##### `destination_ip_ranges`<sup>Required</sup> <a name="destination_ip_ranges" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.destinationIpRanges"></a>

```python
destination_ip_ranges: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleDestinationIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]]

destination_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#destination_ip_ranges GoogleVmwareengineExternalAccessRule#destination_ip_ranges}

---

##### `destination_ports`<sup>Required</sup> <a name="destination_ports" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.destinationPorts"></a>

```python
destination_ports: typing.List[str]
```

- *Type:* typing.List[str]

A list of destination ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#destination_ports GoogleVmwareengineExternalAccessRule#destination_ports}

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

The IP protocol to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#ip_protocol GoogleVmwareengineExternalAccessRule#ip_protocol}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#name GoogleVmwareengineExternalAccessRule#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#parent GoogleVmwareengineExternalAccessRule#parent}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

External access rule priority, which determines the external access rule to use when multiple rules apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#priority GoogleVmwareengineExternalAccessRule#priority}

---

##### `source_ip_ranges`<sup>Required</sup> <a name="source_ip_ranges" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.sourceIpRanges"></a>

```python
source_ip_ranges: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleSourceIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]]

source_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#source_ip_ranges GoogleVmwareengineExternalAccessRule#source_ip_ranges}

---

##### `source_ports`<sup>Required</sup> <a name="source_ports" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.sourcePorts"></a>

```python
source_ports: typing.List[str]
```

- *Type:* typing.List[str]

A list of source ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#source_ports GoogleVmwareengineExternalAccessRule#source_ports}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

User-provided description for the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#description GoogleVmwareengineExternalAccessRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#id GoogleVmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleConfig.property.timeouts"></a>

```python
timeouts: GoogleVmwareengineExternalAccessRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#timeouts GoogleVmwareengineExternalAccessRule#timeouts}

---

### GoogleVmwareengineExternalAccessRuleDestinationIpRanges <a name="GoogleVmwareengineExternalAccessRuleDestinationIpRanges" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges(
  external_address: str = None,
  ip_address_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges.property.externalAddress">external_address</a></code> | <code>str</code> | The name of an 'ExternalAddress' resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges.property.ipAddressRange">ip_address_range</a></code> | <code>str</code> | An IP address range in the CIDR format. |

---

##### `external_address`<sup>Optional</sup> <a name="external_address" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges.property.externalAddress"></a>

```python
external_address: str
```

- *Type:* str

The name of an 'ExternalAddress' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#external_address GoogleVmwareengineExternalAccessRule#external_address}

---

##### `ip_address_range`<sup>Optional</sup> <a name="ip_address_range" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges.property.ipAddressRange"></a>

```python
ip_address_range: str
```

- *Type:* str

An IP address range in the CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#ip_address_range GoogleVmwareengineExternalAccessRule#ip_address_range}

---

### GoogleVmwareengineExternalAccessRuleSourceIpRanges <a name="GoogleVmwareengineExternalAccessRuleSourceIpRanges" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges(
  ip_address: str = None,
  ip_address_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges.property.ipAddress">ip_address</a></code> | <code>str</code> | A single IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges.property.ipAddressRange">ip_address_range</a></code> | <code>str</code> | An IP address range in the CIDR format. |

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

A single IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#ip_address GoogleVmwareengineExternalAccessRule#ip_address}

---

##### `ip_address_range`<sup>Optional</sup> <a name="ip_address_range" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges.property.ipAddressRange"></a>

```python
ip_address_range: str
```

- *Type:* str

An IP address range in the CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#ip_address_range GoogleVmwareengineExternalAccessRule#ip_address_range}

---

### GoogleVmwareengineExternalAccessRuleTimeouts <a name="GoogleVmwareengineExternalAccessRuleTimeouts" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#create GoogleVmwareengineExternalAccessRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#delete GoogleVmwareengineExternalAccessRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#update GoogleVmwareengineExternalAccessRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#create GoogleVmwareengineExternalAccessRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#delete GoogleVmwareengineExternalAccessRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_vmwareengine_external_access_rule#update GoogleVmwareengineExternalAccessRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVmwareengineExternalAccessRuleDestinationIpRangesList <a name="GoogleVmwareengineExternalAccessRuleDestinationIpRangesList" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleDestinationIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]]

---


### GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference <a name="GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetExternalAddress">reset_external_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetIpAddressRange">reset_ip_address_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_external_address` <a name="reset_external_address" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetExternalAddress"></a>

```python
def reset_external_address() -> None
```

##### `reset_ip_address_range` <a name="reset_ip_address_range" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetIpAddressRange"></a>

```python
def reset_ip_address_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddressInput">external_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRangeInput">ip_address_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress">external_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange">ip_address_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_address_input`<sup>Optional</sup> <a name="external_address_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddressInput"></a>

```python
external_address_input: str
```

- *Type:* str

---

##### `ip_address_range_input`<sup>Optional</sup> <a name="ip_address_range_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRangeInput"></a>

```python
ip_address_range_input: str
```

- *Type:* str

---

##### `external_address`<sup>Required</sup> <a name="external_address" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress"></a>

```python
external_address: str
```

- *Type:* str

---

##### `ip_address_range`<sup>Required</sup> <a name="ip_address_range" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange"></a>

```python
ip_address_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVmwareengineExternalAccessRuleDestinationIpRanges]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleDestinationIpRanges">GoogleVmwareengineExternalAccessRuleDestinationIpRanges</a>]

---


### GoogleVmwareengineExternalAccessRuleSourceIpRangesList <a name="GoogleVmwareengineExternalAccessRuleSourceIpRangesList" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleVmwareengineExternalAccessRuleSourceIpRanges]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]]

---


### GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference <a name="GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddressRange">reset_ip_address_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_ip_address_range` <a name="reset_ip_address_range" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddressRange"></a>

```python
def reset_ip_address_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRangeInput">ip_address_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange">ip_address_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_address_range_input`<sup>Optional</sup> <a name="ip_address_range_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRangeInput"></a>

```python
ip_address_range_input: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_address_range`<sup>Required</sup> <a name="ip_address_range" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange"></a>

```python
ip_address_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVmwareengineExternalAccessRuleSourceIpRanges]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleSourceIpRanges">GoogleVmwareengineExternalAccessRuleSourceIpRanges</a>]

---


### GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference <a name="GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_vmwareengine_external_access_rule

googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleVmwareengineExternalAccessRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleVmwareengineExternalAccessRule.GoogleVmwareengineExternalAccessRuleTimeouts">GoogleVmwareengineExternalAccessRuleTimeouts</a>]

---



