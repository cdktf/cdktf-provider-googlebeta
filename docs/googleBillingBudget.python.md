# `googleBillingBudget` Submodule <a name="`googleBillingBudget` Submodule" id="@cdktf/provider-google-beta.googleBillingBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBillingBudget <a name="GoogleBillingBudget" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget google_billing_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudget(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amount: GoogleBillingBudgetAmount,
  billing_account: str,
  all_updates_rule: GoogleBillingBudgetAllUpdatesRule = None,
  budget_filter: GoogleBillingBudgetBudgetFilter = None,
  display_name: str = None,
  id: str = None,
  ownership_scope: str = None,
  threshold_rules: typing.Union[IResolvable, typing.List[GoogleBillingBudgetThresholdRules]] = None,
  timeouts: GoogleBillingBudgetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.amount">amount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.billingAccount">billing_account</a></code> | <code>str</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.allUpdatesRule">all_updates_rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.budgetFilter">budget_filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#id GoogleBillingBudget#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.ownershipScope">ownership_scope</a></code> | <code>str</code> | The ownership scope of the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.thresholdRules">threshold_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]]</code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.amount"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#amount GoogleBillingBudget#amount}

---

##### `billing_account`<sup>Required</sup> <a name="billing_account" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.billingAccount"></a>

- *Type:* str

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#billing_account GoogleBillingBudget#billing_account}

---

##### `all_updates_rule`<sup>Optional</sup> <a name="all_updates_rule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.allUpdatesRule"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#all_updates_rule GoogleBillingBudget#all_updates_rule}

---

##### `budget_filter`<sup>Optional</sup> <a name="budget_filter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.budgetFilter"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#budget_filter GoogleBillingBudget#budget_filter}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.displayName"></a>

- *Type:* str

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#display_name GoogleBillingBudget#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#id GoogleBillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownership_scope`<sup>Optional</sup> <a name="ownership_scope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.ownershipScope"></a>

- *Type:* str

The ownership scope of the budget.

The ownership scope and users'
IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#ownership_scope GoogleBillingBudget#ownership_scope}

---

##### `threshold_rules`<sup>Optional</sup> <a name="threshold_rules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.thresholdRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]]

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#threshold_rules GoogleBillingBudget#threshold_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#timeouts GoogleBillingBudget#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule">put_all_updates_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAmount">put_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter">put_budget_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putThresholdRules">put_threshold_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetAllUpdatesRule">reset_all_updates_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetBudgetFilter">reset_budget_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOwnershipScope">reset_ownership_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetThresholdRules">reset_threshold_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_all_updates_rule` <a name="put_all_updates_rule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule"></a>

```python
def put_all_updates_rule(
  disable_default_iam_recipients: typing.Union[bool, IResolvable] = None,
  enable_project_level_recipients: typing.Union[bool, IResolvable] = None,
  monitoring_notification_channels: typing.List[str] = None,
  pubsub_topic: str = None,
  schema_version: str = None
) -> None
```

###### `disable_default_iam_recipients`<sup>Optional</sup> <a name="disable_default_iam_recipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule.parameter.disableDefaultIamRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean.

When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#disable_default_iam_recipients GoogleBillingBudget#disable_default_iam_recipients}

---

###### `enable_project_level_recipients`<sup>Optional</sup> <a name="enable_project_level_recipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule.parameter.enableProjectLevelRecipients"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.

This field will be ignored if the budget has multiple or no project configured.

Currently, project level recipients are the users with Owner role on a cloud project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#enable_project_level_recipients GoogleBillingBudget#enable_project_level_recipients}

---

###### `monitoring_notification_channels`<sup>Optional</sup> <a name="monitoring_notification_channels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule.parameter.monitoringNotificationChannels"></a>

- *Type:* typing.List[str]

The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#monitoring_notification_channels GoogleBillingBudget#monitoring_notification_channels}

---

###### `pubsub_topic`<sup>Optional</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule.parameter.pubsubTopic"></a>

- *Type:* str

The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}.

Updates are sent
at regular intervals to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#pubsub_topic GoogleBillingBudget#pubsub_topic}

---

###### `schema_version`<sup>Optional</sup> <a name="schema_version" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule.parameter.schemaVersion"></a>

- *Type:* str

The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#schema_version GoogleBillingBudget#schema_version}

---

##### `put_amount` <a name="put_amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAmount"></a>

```python
def put_amount(
  last_period_amount: typing.Union[bool, IResolvable] = None,
  specified_amount: GoogleBillingBudgetAmountSpecifiedAmount = None
) -> None
```

###### `last_period_amount`<sup>Optional</sup> <a name="last_period_amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAmount.parameter.lastPeriodAmount"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configures a budget amount that is automatically set to 100% of last period's spend.

Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#last_period_amount GoogleBillingBudget#last_period_amount}

---

###### `specified_amount`<sup>Optional</sup> <a name="specified_amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAmount.parameter.specifiedAmount"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

specified_amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#specified_amount GoogleBillingBudget#specified_amount}

---

##### `put_budget_filter` <a name="put_budget_filter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter"></a>

```python
def put_budget_filter(
  calendar_period: str = None,
  credit_types: typing.List[str] = None,
  credit_types_treatment: str = None,
  custom_period: GoogleBillingBudgetBudgetFilterCustomPeriod = None,
  labels: typing.Mapping[str] = None,
  projects: typing.List[str] = None,
  resource_ancestors: typing.List[str] = None,
  services: typing.List[str] = None,
  subaccounts: typing.List[str] = None
) -> None
```

###### `calendar_period`<sup>Optional</sup> <a name="calendar_period" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.calendarPeriod"></a>

- *Type:* str

A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start.

Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).

Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#calendar_period GoogleBillingBudget#calendar_period}

---

###### `credit_types`<sup>Optional</sup> <a name="credit_types" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.creditTypes"></a>

- *Type:* typing.List[str]

Optional.

If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an empty array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#credit_types GoogleBillingBudget#credit_types}

---

###### `credit_types_treatment`<sup>Optional</sup> <a name="credit_types_treatment" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.creditTypesTreatment"></a>

- *Type:* str

Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#credit_types_treatment GoogleBillingBudget#credit_types_treatment}

---

###### `custom_period`<sup>Optional</sup> <a name="custom_period" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.customPeriod"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

custom_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#custom_period GoogleBillingBudget#custom_period}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.labels"></a>

- *Type:* typing.Mapping[str]

A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#labels GoogleBillingBudget#labels}

---

###### `projects`<sup>Optional</sup> <a name="projects" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.projects"></a>

- *Type:* typing.List[str]

A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget.

If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#projects GoogleBillingBudget#projects}

---

###### `resource_ancestors`<sup>Optional</sup> <a name="resource_ancestors" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.resourceAncestors"></a>

- *Type:* typing.List[str]

A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget.

If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#resource_ancestors GoogleBillingBudget#resource_ancestors}

---

###### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.services"></a>

- *Type:* typing.List[str]

A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget.

If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#services GoogleBillingBudget#services}

---

###### `subaccounts`<sup>Optional</sup> <a name="subaccounts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.subaccounts"></a>

- *Type:* typing.List[str]

A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget.

If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an empty array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#subaccounts GoogleBillingBudget#subaccounts}

---

##### `put_threshold_rules` <a name="put_threshold_rules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putThresholdRules"></a>

```python
def put_threshold_rules(
  value: typing.Union[IResolvable, typing.List[GoogleBillingBudgetThresholdRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putThresholdRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#create GoogleBillingBudget#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#delete GoogleBillingBudget#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#update GoogleBillingBudget#update}.

---

##### `reset_all_updates_rule` <a name="reset_all_updates_rule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetAllUpdatesRule"></a>

```python
def reset_all_updates_rule() -> None
```

##### `reset_budget_filter` <a name="reset_budget_filter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetBudgetFilter"></a>

```python
def reset_budget_filter() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ownership_scope` <a name="reset_ownership_scope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOwnershipScope"></a>

```python
def reset_ownership_scope() -> None
```

##### `reset_threshold_rules` <a name="reset_threshold_rules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetThresholdRules"></a>

```python
def reset_threshold_rules() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleBillingBudget resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleBillingBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleBillingBudget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleBillingBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBillingBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRule">all_updates_rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference">GoogleBillingBudgetAllUpdatesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amount">amount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference">GoogleBillingBudgetAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilter">budget_filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference">GoogleBillingBudgetBudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRules">threshold_rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList">GoogleBillingBudgetThresholdRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference">GoogleBillingBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRuleInput">all_updates_rule_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amountInput">amount_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccountInput">billing_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilterInput">budget_filter_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScopeInput">ownership_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRulesInput">threshold_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccount">billing_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScope">ownership_scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_updates_rule`<sup>Required</sup> <a name="all_updates_rule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRule"></a>

```python
all_updates_rule: GoogleBillingBudgetAllUpdatesRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference">GoogleBillingBudgetAllUpdatesRuleOutputReference</a>

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amount"></a>

```python
amount: GoogleBillingBudgetAmountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference">GoogleBillingBudgetAmountOutputReference</a>

---

##### `budget_filter`<sup>Required</sup> <a name="budget_filter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilter"></a>

```python
budget_filter: GoogleBillingBudgetBudgetFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference">GoogleBillingBudgetBudgetFilterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `threshold_rules`<sup>Required</sup> <a name="threshold_rules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRules"></a>

```python
threshold_rules: GoogleBillingBudgetThresholdRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList">GoogleBillingBudgetThresholdRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeouts"></a>

```python
timeouts: GoogleBillingBudgetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference">GoogleBillingBudgetTimeoutsOutputReference</a>

---

##### `all_updates_rule_input`<sup>Optional</sup> <a name="all_updates_rule_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRuleInput"></a>

```python
all_updates_rule_input: GoogleBillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

---

##### `amount_input`<sup>Optional</sup> <a name="amount_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amountInput"></a>

```python
amount_input: GoogleBillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

---

##### `billing_account_input`<sup>Optional</sup> <a name="billing_account_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccountInput"></a>

```python
billing_account_input: str
```

- *Type:* str

---

##### `budget_filter_input`<sup>Optional</sup> <a name="budget_filter_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilterInput"></a>

```python
budget_filter_input: GoogleBillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ownership_scope_input`<sup>Optional</sup> <a name="ownership_scope_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScopeInput"></a>

```python
ownership_scope_input: str
```

- *Type:* str

---

##### `threshold_rules_input`<sup>Optional</sup> <a name="threshold_rules_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRulesInput"></a>

```python
threshold_rules_input: typing.Union[IResolvable, typing.List[GoogleBillingBudgetThresholdRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleBillingBudgetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>]

---

##### `billing_account`<sup>Required</sup> <a name="billing_account" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccount"></a>

```python
billing_account: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ownership_scope`<sup>Required</sup> <a name="ownership_scope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScope"></a>

```python
ownership_scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBillingBudgetAllUpdatesRule <a name="GoogleBillingBudgetAllUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetAllUpdatesRule(
  disable_default_iam_recipients: typing.Union[bool, IResolvable] = None,
  enable_project_level_recipients: typing.Union[bool, IResolvable] = None,
  monitoring_notification_channels: typing.List[str] = None,
  pubsub_topic: str = None,
  schema_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients">disable_default_iam_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Boolean. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients">enable_project_level_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.monitoringNotificationChannels">monitoring_notification_channels</a></code> | <code>typing.List[str]</code> | The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.schemaVersion">schema_version</a></code> | <code>str</code> | The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format. |

---

##### `disable_default_iam_recipients`<sup>Optional</sup> <a name="disable_default_iam_recipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients"></a>

```python
disable_default_iam_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Boolean.

When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#disable_default_iam_recipients GoogleBillingBudget#disable_default_iam_recipients}

---

##### `enable_project_level_recipients`<sup>Optional</sup> <a name="enable_project_level_recipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients"></a>

```python
enable_project_level_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.

This field will be ignored if the budget has multiple or no project configured.

Currently, project level recipients are the users with Owner role on a cloud project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#enable_project_level_recipients GoogleBillingBudget#enable_project_level_recipients}

---

##### `monitoring_notification_channels`<sup>Optional</sup> <a name="monitoring_notification_channels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.monitoringNotificationChannels"></a>

```python
monitoring_notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#monitoring_notification_channels GoogleBillingBudget#monitoring_notification_channels}

---

##### `pubsub_topic`<sup>Optional</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}.

Updates are sent
at regular intervals to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#pubsub_topic GoogleBillingBudget#pubsub_topic}

---

##### `schema_version`<sup>Optional</sup> <a name="schema_version" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.schemaVersion"></a>

```python
schema_version: str
```

- *Type:* str

The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#schema_version GoogleBillingBudget#schema_version}

---

### GoogleBillingBudgetAmount <a name="GoogleBillingBudgetAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetAmount(
  last_period_amount: typing.Union[bool, IResolvable] = None,
  specified_amount: GoogleBillingBudgetAmountSpecifiedAmount = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.lastPeriodAmount">last_period_amount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Configures a budget amount that is automatically set to 100% of last period's spend. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.specifiedAmount">specified_amount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a></code> | specified_amount block. |

---

##### `last_period_amount`<sup>Optional</sup> <a name="last_period_amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.lastPeriodAmount"></a>

```python
last_period_amount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Configures a budget amount that is automatically set to 100% of last period's spend.

Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#last_period_amount GoogleBillingBudget#last_period_amount}

---

##### `specified_amount`<sup>Optional</sup> <a name="specified_amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.specifiedAmount"></a>

```python
specified_amount: GoogleBillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

specified_amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#specified_amount GoogleBillingBudget#specified_amount}

---

### GoogleBillingBudgetAmountSpecifiedAmount <a name="GoogleBillingBudgetAmountSpecifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount(
  currency_code: str = None,
  nanos: typing.Union[int, float] = None,
  units: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.currencyCode">currency_code</a></code> | <code>str</code> | The 3-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | Number of nano (10^-9) units of the amount. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.units">units</a></code> | <code>str</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `currency_code`<sup>Optional</sup> <a name="currency_code" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

The 3-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#currency_code GoogleBillingBudget#currency_code}

---

##### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of nano (10^-9) units of the amount.

The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#nanos GoogleBillingBudget#nanos}

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.units"></a>

```python
units: str
```

- *Type:* str

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#units GoogleBillingBudget#units}

---

### GoogleBillingBudgetBudgetFilter <a name="GoogleBillingBudgetBudgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetBudgetFilter(
  calendar_period: str = None,
  credit_types: typing.List[str] = None,
  credit_types_treatment: str = None,
  custom_period: GoogleBillingBudgetBudgetFilterCustomPeriod = None,
  labels: typing.Mapping[str] = None,
  projects: typing.List[str] = None,
  resource_ancestors: typing.List[str] = None,
  services: typing.List[str] = None,
  subaccounts: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.calendarPeriod">calendar_period</a></code> | <code>str</code> | A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypes">credit_types</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypesTreatment">credit_types_treatment</a></code> | <code>str</code> | Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.customPeriod">custom_period</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a></code> | custom_period block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.projects">projects</a></code> | <code>typing.List[str]</code> | A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.resourceAncestors">resource_ancestors</a></code> | <code>typing.List[str]</code> | A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.services">services</a></code> | <code>typing.List[str]</code> | A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.subaccounts">subaccounts</a></code> | <code>typing.List[str]</code> | A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget. |

---

##### `calendar_period`<sup>Optional</sup> <a name="calendar_period" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.calendarPeriod"></a>

```python
calendar_period: str
```

- *Type:* str

A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start.

Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).

Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#calendar_period GoogleBillingBudget#calendar_period}

---

##### `credit_types`<sup>Optional</sup> <a name="credit_types" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypes"></a>

```python
credit_types: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an empty array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#credit_types GoogleBillingBudget#credit_types}

---

##### `credit_types_treatment`<sup>Optional</sup> <a name="credit_types_treatment" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypesTreatment"></a>

```python
credit_types_treatment: str
```

- *Type:* str

Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#credit_types_treatment GoogleBillingBudget#credit_types_treatment}

---

##### `custom_period`<sup>Optional</sup> <a name="custom_period" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.customPeriod"></a>

```python
custom_period: GoogleBillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

custom_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#custom_period GoogleBillingBudget#custom_period}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#labels GoogleBillingBudget#labels}

---

##### `projects`<sup>Optional</sup> <a name="projects" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.projects"></a>

```python
projects: typing.List[str]
```

- *Type:* typing.List[str]

A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget.

If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#projects GoogleBillingBudget#projects}

---

##### `resource_ancestors`<sup>Optional</sup> <a name="resource_ancestors" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.resourceAncestors"></a>

```python
resource_ancestors: typing.List[str]
```

- *Type:* typing.List[str]

A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget.

If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#resource_ancestors GoogleBillingBudget#resource_ancestors}

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget.

If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#services GoogleBillingBudget#services}

---

##### `subaccounts`<sup>Optional</sup> <a name="subaccounts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.subaccounts"></a>

```python
subaccounts: typing.List[str]
```

- *Type:* typing.List[str]

A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget.

If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an empty array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#subaccounts GoogleBillingBudget#subaccounts}

---

### GoogleBillingBudgetBudgetFilterCustomPeriod <a name="GoogleBillingBudgetBudgetFilterCustomPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod(
  start_date: GoogleBillingBudgetBudgetFilterCustomPeriodStartDate,
  end_date: GoogleBillingBudgetBudgetFilterCustomPeriodEndDate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.startDate">start_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.endDate">end_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | end_date block. |

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.startDate"></a>

```python
start_date: GoogleBillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#start_date GoogleBillingBudget#start_date}

---

##### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.endDate"></a>

```python
end_date: GoogleBillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#end_date GoogleBillingBudget#end_date}

---

### GoogleBillingBudgetBudgetFilterCustomPeriodEndDate <a name="GoogleBillingBudgetBudgetFilterCustomPeriodEndDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#day GoogleBillingBudget#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#month GoogleBillingBudget#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#year GoogleBillingBudget#year}

---

### GoogleBillingBudgetBudgetFilterCustomPeriodStartDate <a name="GoogleBillingBudgetBudgetFilterCustomPeriodStartDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.day">day</a></code> | <code>typing.Union[int, float]</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.month">month</a></code> | <code>typing.Union[int, float]</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.year">year</a></code> | <code>typing.Union[int, float]</code> | Year of the date. Must be from 1 to 9999. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#day GoogleBillingBudget#day}

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#month GoogleBillingBudget#month}

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#year GoogleBillingBudget#year}

---

### GoogleBillingBudgetConfig <a name="GoogleBillingBudgetConfig" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  amount: GoogleBillingBudgetAmount,
  billing_account: str,
  all_updates_rule: GoogleBillingBudgetAllUpdatesRule = None,
  budget_filter: GoogleBillingBudgetBudgetFilter = None,
  display_name: str = None,
  id: str = None,
  ownership_scope: str = None,
  threshold_rules: typing.Union[IResolvable, typing.List[GoogleBillingBudgetThresholdRules]] = None,
  timeouts: GoogleBillingBudgetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.amount">amount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.billingAccount">billing_account</a></code> | <code>str</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.allUpdatesRule">all_updates_rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.budgetFilter">budget_filter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.displayName">display_name</a></code> | <code>str</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#id GoogleBillingBudget#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.ownershipScope">ownership_scope</a></code> | <code>str</code> | The ownership scope of the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.thresholdRules">threshold_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]]</code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `amount`<sup>Required</sup> <a name="amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.amount"></a>

```python
amount: GoogleBillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#amount GoogleBillingBudget#amount}

---

##### `billing_account`<sup>Required</sup> <a name="billing_account" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.billingAccount"></a>

```python
billing_account: str
```

- *Type:* str

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#billing_account GoogleBillingBudget#billing_account}

---

##### `all_updates_rule`<sup>Optional</sup> <a name="all_updates_rule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.allUpdatesRule"></a>

```python
all_updates_rule: GoogleBillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#all_updates_rule GoogleBillingBudget#all_updates_rule}

---

##### `budget_filter`<sup>Optional</sup> <a name="budget_filter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.budgetFilter"></a>

```python
budget_filter: GoogleBillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#budget_filter GoogleBillingBudget#budget_filter}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#display_name GoogleBillingBudget#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#id GoogleBillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownership_scope`<sup>Optional</sup> <a name="ownership_scope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.ownershipScope"></a>

```python
ownership_scope: str
```

- *Type:* str

The ownership scope of the budget.

The ownership scope and users'
IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#ownership_scope GoogleBillingBudget#ownership_scope}

---

##### `threshold_rules`<sup>Optional</sup> <a name="threshold_rules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.thresholdRules"></a>

```python
threshold_rules: typing.Union[IResolvable, typing.List[GoogleBillingBudgetThresholdRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]]

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#threshold_rules GoogleBillingBudget#threshold_rules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.timeouts"></a>

```python
timeouts: GoogleBillingBudgetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#timeouts GoogleBillingBudget#timeouts}

---

### GoogleBillingBudgetThresholdRules <a name="GoogleBillingBudgetThresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetThresholdRules(
  threshold_percent: typing.Union[int, float],
  spend_basis: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.thresholdPercent">threshold_percent</a></code> | <code>typing.Union[int, float]</code> | Send an alert when this threshold is exceeded. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.spendBasis">spend_basis</a></code> | <code>str</code> | The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"]. |

---

##### `threshold_percent`<sup>Required</sup> <a name="threshold_percent" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.thresholdPercent"></a>

```python
threshold_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Send an alert when this threshold is exceeded.

This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#threshold_percent GoogleBillingBudget#threshold_percent}

---

##### `spend_basis`<sup>Optional</sup> <a name="spend_basis" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.spendBasis"></a>

```python
spend_basis: str
```

- *Type:* str

The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#spend_basis GoogleBillingBudget#spend_basis}

---

### GoogleBillingBudgetTimeouts <a name="GoogleBillingBudgetTimeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#create GoogleBillingBudget#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#delete GoogleBillingBudget#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#update GoogleBillingBudget#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#create GoogleBillingBudget#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#delete GoogleBillingBudget#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#update GoogleBillingBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBillingBudgetAllUpdatesRuleOutputReference <a name="GoogleBillingBudgetAllUpdatesRuleOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients">reset_disable_default_iam_recipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients">reset_enable_project_level_recipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels">reset_monitoring_notification_channels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic">reset_pubsub_topic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion">reset_schema_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disable_default_iam_recipients` <a name="reset_disable_default_iam_recipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients"></a>

```python
def reset_disable_default_iam_recipients() -> None
```

##### `reset_enable_project_level_recipients` <a name="reset_enable_project_level_recipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients"></a>

```python
def reset_enable_project_level_recipients() -> None
```

##### `reset_monitoring_notification_channels` <a name="reset_monitoring_notification_channels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels"></a>

```python
def reset_monitoring_notification_channels() -> None
```

##### `reset_pubsub_topic` <a name="reset_pubsub_topic" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic"></a>

```python
def reset_pubsub_topic() -> None
```

##### `reset_schema_version` <a name="reset_schema_version" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion"></a>

```python
def reset_schema_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput">disable_default_iam_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput">enable_project_level_recipients_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput">monitoring_notification_channels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput">pubsub_topic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput">schema_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients">disable_default_iam_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients">enable_project_level_recipients</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels">monitoring_notification_channels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic">pubsub_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion">schema_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disable_default_iam_recipients_input`<sup>Optional</sup> <a name="disable_default_iam_recipients_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput"></a>

```python
disable_default_iam_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_project_level_recipients_input`<sup>Optional</sup> <a name="enable_project_level_recipients_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput"></a>

```python
enable_project_level_recipients_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitoring_notification_channels_input`<sup>Optional</sup> <a name="monitoring_notification_channels_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput"></a>

```python
monitoring_notification_channels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pubsub_topic_input`<sup>Optional</sup> <a name="pubsub_topic_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput"></a>

```python
pubsub_topic_input: str
```

- *Type:* str

---

##### `schema_version_input`<sup>Optional</sup> <a name="schema_version_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput"></a>

```python
schema_version_input: str
```

- *Type:* str

---

##### `disable_default_iam_recipients`<sup>Required</sup> <a name="disable_default_iam_recipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients"></a>

```python
disable_default_iam_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_project_level_recipients`<sup>Required</sup> <a name="enable_project_level_recipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients"></a>

```python
enable_project_level_recipients: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `monitoring_notification_channels`<sup>Required</sup> <a name="monitoring_notification_channels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels"></a>

```python
monitoring_notification_channels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pubsub_topic`<sup>Required</sup> <a name="pubsub_topic" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic"></a>

```python
pubsub_topic: str
```

- *Type:* str

---

##### `schema_version`<sup>Required</sup> <a name="schema_version" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion"></a>

```python
schema_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

---


### GoogleBillingBudgetAmountOutputReference <a name="GoogleBillingBudgetAmountOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetAmountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount">put_specified_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetLastPeriodAmount">reset_last_period_amount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetSpecifiedAmount">reset_specified_amount</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_specified_amount` <a name="put_specified_amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount"></a>

```python
def put_specified_amount(
  currency_code: str = None,
  nanos: typing.Union[int, float] = None,
  units: str = None
) -> None
```

###### `currency_code`<sup>Optional</sup> <a name="currency_code" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.currencyCode"></a>

- *Type:* str

The 3-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#currency_code GoogleBillingBudget#currency_code}

---

###### `nanos`<sup>Optional</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.nanos"></a>

- *Type:* typing.Union[int, float]

Number of nano (10^-9) units of the amount.

The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#nanos GoogleBillingBudget#nanos}

---

###### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.units"></a>

- *Type:* str

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#units GoogleBillingBudget#units}

---

##### `reset_last_period_amount` <a name="reset_last_period_amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetLastPeriodAmount"></a>

```python
def reset_last_period_amount() -> None
```

##### `reset_specified_amount` <a name="reset_specified_amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetSpecifiedAmount"></a>

```python
def reset_specified_amount() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmount">specified_amount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference">GoogleBillingBudgetAmountSpecifiedAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmountInput">last_period_amount_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmountInput">specified_amount_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmount">last_period_amount</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `specified_amount`<sup>Required</sup> <a name="specified_amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmount"></a>

```python
specified_amount: GoogleBillingBudgetAmountSpecifiedAmountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference">GoogleBillingBudgetAmountSpecifiedAmountOutputReference</a>

---

##### `last_period_amount_input`<sup>Optional</sup> <a name="last_period_amount_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmountInput"></a>

```python
last_period_amount_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `specified_amount_input`<sup>Optional</sup> <a name="specified_amount_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmountInput"></a>

```python
specified_amount_input: GoogleBillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

---

##### `last_period_amount`<sup>Required</sup> <a name="last_period_amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmount"></a>

```python
last_period_amount: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

---


### GoogleBillingBudgetAmountSpecifiedAmountOutputReference <a name="GoogleBillingBudgetAmountSpecifiedAmountOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode">reset_currency_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetNanos">reset_nanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetUnits">reset_units</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_currency_code` <a name="reset_currency_code" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode"></a>

```python
def reset_currency_code() -> None
```

##### `reset_nanos` <a name="reset_nanos" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetNanos"></a>

```python
def reset_nanos() -> None
```

##### `reset_units` <a name="reset_units" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetUnits"></a>

```python
def reset_units() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput">currency_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput">nanos_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput">units_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanos">nanos</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.units">units</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `currency_code_input`<sup>Optional</sup> <a name="currency_code_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput"></a>

```python
currency_code_input: str
```

- *Type:* str

---

##### `nanos_input`<sup>Optional</sup> <a name="nanos_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput"></a>

```python
nanos_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units_input`<sup>Optional</sup> <a name="units_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput"></a>

```python
units_input: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanos"></a>

```python
nanos: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.units"></a>

```python
units: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

---


### GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference <a name="GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

---


### GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference <a name="GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate">put_end_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate">put_start_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate">reset_end_date</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_end_date` <a name="put_end_date" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate"></a>

```python
def put_end_date(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#day GoogleBillingBudget#day}

---

###### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#month GoogleBillingBudget#month}

---

###### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#year GoogleBillingBudget#year}

---

##### `put_start_date` <a name="put_start_date" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate"></a>

```python
def put_start_date(
  day: typing.Union[int, float],
  month: typing.Union[int, float],
  year: typing.Union[int, float]
) -> None
```

###### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.day"></a>

- *Type:* typing.Union[int, float]

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#day GoogleBillingBudget#day}

---

###### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.month"></a>

- *Type:* typing.Union[int, float]

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#month GoogleBillingBudget#month}

---

###### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.year"></a>

- *Type:* typing.Union[int, float]

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#year GoogleBillingBudget#year}

---

##### `reset_end_date` <a name="reset_end_date" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate"></a>

```python
def reset_end_date() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate">end_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate">start_date</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput">end_date_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput">start_date_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `end_date`<sup>Required</sup> <a name="end_date" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate"></a>

```python
end_date: GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a>

---

##### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate"></a>

```python
start_date: GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a>

---

##### `end_date_input`<sup>Optional</sup> <a name="end_date_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput"></a>

```python
end_date_input: GoogleBillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `start_date_input`<sup>Optional</sup> <a name="start_date_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput"></a>

```python
start_date_input: GoogleBillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

---


### GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference <a name="GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput">day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput">month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput">year_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day">day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month">month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year">year</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_input`<sup>Optional</sup> <a name="day_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput"></a>

```python
day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput"></a>

```python
month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year_input`<sup>Optional</sup> <a name="year_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput"></a>

```python
year_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day"></a>

```python
day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month"></a>

```python
month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `year`<sup>Required</sup> <a name="year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year"></a>

```python
year: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

---


### GoogleBillingBudgetBudgetFilterOutputReference <a name="GoogleBillingBudgetBudgetFilterOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.putCustomPeriod">put_custom_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCalendarPeriod">reset_calendar_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypes">reset_credit_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment">reset_credit_types_treatment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCustomPeriod">reset_custom_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetProjects">reset_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetResourceAncestors">reset_resource_ancestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetServices">reset_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetSubaccounts">reset_subaccounts</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_period` <a name="put_custom_period" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.putCustomPeriod"></a>

```python
def put_custom_period(
  start_date: GoogleBillingBudgetBudgetFilterCustomPeriodStartDate,
  end_date: GoogleBillingBudgetBudgetFilterCustomPeriodEndDate = None
) -> None
```

###### `start_date`<sup>Required</sup> <a name="start_date" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.putCustomPeriod.parameter.startDate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#start_date GoogleBillingBudget#start_date}

---

###### `end_date`<sup>Optional</sup> <a name="end_date" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.putCustomPeriod.parameter.endDate"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_billing_budget#end_date GoogleBillingBudget#end_date}

---

##### `reset_calendar_period` <a name="reset_calendar_period" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCalendarPeriod"></a>

```python
def reset_calendar_period() -> None
```

##### `reset_credit_types` <a name="reset_credit_types" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypes"></a>

```python
def reset_credit_types() -> None
```

##### `reset_credit_types_treatment` <a name="reset_credit_types_treatment" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment"></a>

```python
def reset_credit_types_treatment() -> None
```

##### `reset_custom_period` <a name="reset_custom_period" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCustomPeriod"></a>

```python
def reset_custom_period() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_projects` <a name="reset_projects" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetProjects"></a>

```python
def reset_projects() -> None
```

##### `reset_resource_ancestors` <a name="reset_resource_ancestors" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetResourceAncestors"></a>

```python
def reset_resource_ancestors() -> None
```

##### `reset_services` <a name="reset_services" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetServices"></a>

```python
def reset_services() -> None
```

##### `reset_subaccounts` <a name="reset_subaccounts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetSubaccounts"></a>

```python
def reset_subaccounts() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriod">custom_period</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput">calendar_period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesInput">credit_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput">credit_types_treatment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriodInput">custom_period_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projectsInput">projects_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput">resource_ancestors_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.servicesInput">services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccountsInput">subaccounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriod">calendar_period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypes">credit_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment">credit_types_treatment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projects">projects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestors">resource_ancestors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.services">services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccounts">subaccounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_period`<sup>Required</sup> <a name="custom_period" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriod"></a>

```python
custom_period: GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference</a>

---

##### `calendar_period_input`<sup>Optional</sup> <a name="calendar_period_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput"></a>

```python
calendar_period_input: str
```

- *Type:* str

---

##### `credit_types_input`<sup>Optional</sup> <a name="credit_types_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesInput"></a>

```python
credit_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credit_types_treatment_input`<sup>Optional</sup> <a name="credit_types_treatment_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput"></a>

```python
credit_types_treatment_input: str
```

- *Type:* str

---

##### `custom_period_input`<sup>Optional</sup> <a name="custom_period_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriodInput"></a>

```python
custom_period_input: GoogleBillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `projects_input`<sup>Optional</sup> <a name="projects_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projectsInput"></a>

```python
projects_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_ancestors_input`<sup>Optional</sup> <a name="resource_ancestors_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput"></a>

```python
resource_ancestors_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services_input`<sup>Optional</sup> <a name="services_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.servicesInput"></a>

```python
services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subaccounts_input`<sup>Optional</sup> <a name="subaccounts_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccountsInput"></a>

```python
subaccounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `calendar_period`<sup>Required</sup> <a name="calendar_period" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriod"></a>

```python
calendar_period: str
```

- *Type:* str

---

##### `credit_types`<sup>Required</sup> <a name="credit_types" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypes"></a>

```python
credit_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `credit_types_treatment`<sup>Required</sup> <a name="credit_types_treatment" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment"></a>

```python
credit_types_treatment: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `projects`<sup>Required</sup> <a name="projects" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projects"></a>

```python
projects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_ancestors`<sup>Required</sup> <a name="resource_ancestors" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestors"></a>

```python
resource_ancestors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.services"></a>

```python
services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subaccounts`<sup>Required</sup> <a name="subaccounts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccounts"></a>

```python
subaccounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.internalValue"></a>

```python
internal_value: GoogleBillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

---


### GoogleBillingBudgetThresholdRulesList <a name="GoogleBillingBudgetThresholdRulesList" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetThresholdRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleBillingBudgetThresholdRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleBillingBudgetThresholdRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]]

---


### GoogleBillingBudgetThresholdRulesOutputReference <a name="GoogleBillingBudgetThresholdRulesOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resetSpendBasis">reset_spend_basis</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_spend_basis` <a name="reset_spend_basis" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resetSpendBasis"></a>

```python
def reset_spend_basis() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasisInput">spend_basis_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput">threshold_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasis">spend_basis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercent">threshold_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `spend_basis_input`<sup>Optional</sup> <a name="spend_basis_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasisInput"></a>

```python
spend_basis_input: str
```

- *Type:* str

---

##### `threshold_percent_input`<sup>Optional</sup> <a name="threshold_percent_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput"></a>

```python
threshold_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spend_basis`<sup>Required</sup> <a name="spend_basis" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasis"></a>

```python
spend_basis: str
```

- *Type:* str

---

##### `threshold_percent`<sup>Required</sup> <a name="threshold_percent" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercent"></a>

```python
threshold_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBillingBudgetThresholdRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules">GoogleBillingBudgetThresholdRules</a>]

---


### GoogleBillingBudgetTimeoutsOutputReference <a name="GoogleBillingBudgetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_billing_budget

googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleBillingBudgetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>]

---



