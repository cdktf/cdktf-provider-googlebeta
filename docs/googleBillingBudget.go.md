# `googleBillingBudget` Submodule <a name="`googleBillingBudget` Submodule" id="@cdktf/provider-google-beta.googleBillingBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBillingBudget <a name="GoogleBillingBudget" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget google_billing_budget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudget(scope Construct, id *string, config GoogleBillingBudgetConfig) GoogleBillingBudget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig">GoogleBillingBudgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig">GoogleBillingBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule">PutAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAmount">PutAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter">PutBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putThresholdRules">PutThresholdRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetAllUpdatesRule">ResetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetBudgetFilter">ResetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOwnershipScope">ResetOwnershipScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetThresholdRules">ResetThresholdRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllUpdatesRule` <a name="PutAllUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule"></a>

```go
func PutAllUpdatesRule(value GoogleBillingBudgetAllUpdatesRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAllUpdatesRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

---

##### `PutAmount` <a name="PutAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAmount"></a>

```go
func PutAmount(value GoogleBillingBudgetAmount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

---

##### `PutBudgetFilter` <a name="PutBudgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter"></a>

```go
func PutBudgetFilter(value GoogleBillingBudgetBudgetFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putBudgetFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

---

##### `PutThresholdRules` <a name="PutThresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putThresholdRules"></a>

```go
func PutThresholdRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putThresholdRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts"></a>

```go
func PutTimeouts(value GoogleBillingBudgetTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>

---

##### `ResetAllUpdatesRule` <a name="ResetAllUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetAllUpdatesRule"></a>

```go
func ResetAllUpdatesRule()
```

##### `ResetBudgetFilter` <a name="ResetBudgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetBudgetFilter"></a>

```go
func ResetBudgetFilter()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetId"></a>

```go
func ResetId()
```

##### `ResetOwnershipScope` <a name="ResetOwnershipScope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetOwnershipScope"></a>

```go
func ResetOwnershipScope()
```

##### `ResetThresholdRules` <a name="ResetThresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetThresholdRules"></a>

```go
func ResetThresholdRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBillingBudget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.GoogleBillingBudget_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.GoogleBillingBudget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.GoogleBillingBudget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.GoogleBillingBudget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleBillingBudget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleBillingBudget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleBillingBudget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBillingBudget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRule">AllUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference">GoogleBillingBudgetAllUpdatesRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amount">Amount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference">GoogleBillingBudgetAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilter">BudgetFilter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference">GoogleBillingBudgetBudgetFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRules">ThresholdRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList">GoogleBillingBudgetThresholdRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference">GoogleBillingBudgetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRuleInput">AllUpdatesRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amountInput">AmountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccountInput">BillingAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilterInput">BudgetFilterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScopeInput">OwnershipScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRulesInput">ThresholdRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScope">OwnershipScope</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllUpdatesRule`<sup>Required</sup> <a name="AllUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRule"></a>

```go
func AllUpdatesRule() GoogleBillingBudgetAllUpdatesRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference">GoogleBillingBudgetAllUpdatesRuleOutputReference</a>

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amount"></a>

```go
func Amount() GoogleBillingBudgetAmountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference">GoogleBillingBudgetAmountOutputReference</a>

---

##### `BudgetFilter`<sup>Required</sup> <a name="BudgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilter"></a>

```go
func BudgetFilter() GoogleBillingBudgetBudgetFilterOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference">GoogleBillingBudgetBudgetFilterOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ThresholdRules`<sup>Required</sup> <a name="ThresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRules"></a>

```go
func ThresholdRules() GoogleBillingBudgetThresholdRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList">GoogleBillingBudgetThresholdRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeouts"></a>

```go
func Timeouts() GoogleBillingBudgetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference">GoogleBillingBudgetTimeoutsOutputReference</a>

---

##### `AllUpdatesRuleInput`<sup>Optional</sup> <a name="AllUpdatesRuleInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.allUpdatesRuleInput"></a>

```go
func AllUpdatesRuleInput() GoogleBillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

---

##### `AmountInput`<sup>Optional</sup> <a name="AmountInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.amountInput"></a>

```go
func AmountInput() GoogleBillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

---

##### `BillingAccountInput`<sup>Optional</sup> <a name="BillingAccountInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccountInput"></a>

```go
func BillingAccountInput() *string
```

- *Type:* *string

---

##### `BudgetFilterInput`<sup>Optional</sup> <a name="BudgetFilterInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.budgetFilterInput"></a>

```go
func BudgetFilterInput() GoogleBillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OwnershipScopeInput`<sup>Optional</sup> <a name="OwnershipScopeInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScopeInput"></a>

```go
func OwnershipScopeInput() *string
```

- *Type:* *string

---

##### `ThresholdRulesInput`<sup>Optional</sup> <a name="ThresholdRulesInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.thresholdRulesInput"></a>

```go
func ThresholdRulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.billingAccount"></a>

```go
func BillingAccount() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OwnershipScope`<sup>Required</sup> <a name="OwnershipScope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.ownershipScope"></a>

```go
func OwnershipScope() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBillingBudgetAllUpdatesRule <a name="GoogleBillingBudgetAllUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

&googlebillingbudget.GoogleBillingBudgetAllUpdatesRule {
	DisableDefaultIamRecipients: interface{},
	EnableProjectLevelRecipients: interface{},
	MonitoringNotificationChannels: *[]*string,
	PubsubTopic: *string,
	SchemaVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients">DisableDefaultIamRecipients</a></code> | <code>interface{}</code> | Boolean. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients">EnableProjectLevelRecipients</a></code> | <code>interface{}</code> | When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.monitoringNotificationChannels">MonitoringNotificationChannels</a></code> | <code>*[]*string</code> | The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.schemaVersion">SchemaVersion</a></code> | <code>*string</code> | The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format. |

---

##### `DisableDefaultIamRecipients`<sup>Optional</sup> <a name="DisableDefaultIamRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.disableDefaultIamRecipients"></a>

```go
DisableDefaultIamRecipients interface{}
```

- *Type:* interface{}

Boolean.

When set to true, disables default notifications sent
when a threshold is exceeded. Default recipients are
those with Billing Account Administrators and Billing
Account Users IAM roles for the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#disable_default_iam_recipients GoogleBillingBudget#disable_default_iam_recipients}

---

##### `EnableProjectLevelRecipients`<sup>Optional</sup> <a name="EnableProjectLevelRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.enableProjectLevelRecipients"></a>

```go
EnableProjectLevelRecipients interface{}
```

- *Type:* interface{}

When set to true, and when the budget has a single project configured, notifications will be sent to project level recipients of that project.

This field will be ignored if the budget has multiple or no project configured.

Currently, project level recipients are the users with Owner role on a cloud project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#enable_project_level_recipients GoogleBillingBudget#enable_project_level_recipients}

---

##### `MonitoringNotificationChannels`<sup>Optional</sup> <a name="MonitoringNotificationChannels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.monitoringNotificationChannels"></a>

```go
MonitoringNotificationChannels *[]*string
```

- *Type:* *[]*string

The full resource name of a monitoring notification channel in the form projects/{project_id}/notificationChannels/{channel_id}. A maximum of 5 channels are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#monitoring_notification_channels GoogleBillingBudget#monitoring_notification_channels}

---

##### `PubsubTopic`<sup>Optional</sup> <a name="PubsubTopic" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.pubsubTopic"></a>

```go
PubsubTopic *string
```

- *Type:* *string

The name of the Cloud Pub/Sub topic where budget related messages will be published, in the form projects/{project_id}/topics/{topic_id}.

Updates are sent
at regular intervals to the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#pubsub_topic GoogleBillingBudget#pubsub_topic}

---

##### `SchemaVersion`<sup>Optional</sup> <a name="SchemaVersion" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule.property.schemaVersion"></a>

```go
SchemaVersion *string
```

- *Type:* *string

The schema version of the notification. Only "1.0" is accepted. It represents the JSON schema as defined in https://cloud.google.com/billing/docs/how-to/budgets#notification_format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#schema_version GoogleBillingBudget#schema_version}

---

### GoogleBillingBudgetAmount <a name="GoogleBillingBudgetAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

&googlebillingbudget.GoogleBillingBudgetAmount {
	LastPeriodAmount: interface{},
	SpecifiedAmount: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.lastPeriodAmount">LastPeriodAmount</a></code> | <code>interface{}</code> | Configures a budget amount that is automatically set to 100% of last period's spend. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.specifiedAmount">SpecifiedAmount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a></code> | specified_amount block. |

---

##### `LastPeriodAmount`<sup>Optional</sup> <a name="LastPeriodAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.lastPeriodAmount"></a>

```go
LastPeriodAmount interface{}
```

- *Type:* interface{}

Configures a budget amount that is automatically set to 100% of last period's spend.

Boolean. Set value to true to use. Do not set to false, instead
use the 'specified_amount' block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#last_period_amount GoogleBillingBudget#last_period_amount}

---

##### `SpecifiedAmount`<sup>Optional</sup> <a name="SpecifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount.property.specifiedAmount"></a>

```go
SpecifiedAmount GoogleBillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

specified_amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#specified_amount GoogleBillingBudget#specified_amount}

---

### GoogleBillingBudgetAmountSpecifiedAmount <a name="GoogleBillingBudgetAmountSpecifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

&googlebillingbudget.GoogleBillingBudgetAmountSpecifiedAmount {
	CurrencyCode: *string,
	Nanos: *f64,
	Units: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | The 3-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.nanos">Nanos</a></code> | <code>*f64</code> | Number of nano (10^-9) units of the amount. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.units">Units</a></code> | <code>*string</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `CurrencyCode`<sup>Optional</sup> <a name="CurrencyCode" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.currencyCode"></a>

```go
CurrencyCode *string
```

- *Type:* *string

The 3-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#currency_code GoogleBillingBudget#currency_code}

---

##### `Nanos`<sup>Optional</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.nanos"></a>

```go
Nanos *f64
```

- *Type:* *f64

Number of nano (10^-9) units of the amount.

The value must be between -999,999,999 and +999,999,999
inclusive. If units is positive, nanos must be positive or
zero. If units is zero, nanos can be positive, zero, or
negative. If units is negative, nanos must be negative or
zero. For example $-1.75 is represented as units=-1 and
nanos=-750,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#nanos GoogleBillingBudget#nanos}

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount.property.units"></a>

```go
Units *string
```

- *Type:* *string

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#units GoogleBillingBudget#units}

---

### GoogleBillingBudgetBudgetFilter <a name="GoogleBillingBudgetBudgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

&googlebillingbudget.GoogleBillingBudgetBudgetFilter {
	CalendarPeriod: *string,
	CreditTypes: *[]*string,
	CreditTypesTreatment: *string,
	CustomPeriod: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod,
	Labels: *map[string]*string,
	Projects: *[]*string,
	ResourceAncestors: *[]*string,
	Services: *[]*string,
	Subaccounts: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.calendarPeriod">CalendarPeriod</a></code> | <code>*string</code> | A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypes">CreditTypes</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypesTreatment">CreditTypesTreatment</a></code> | <code>*string</code> | Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.customPeriod">CustomPeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a></code> | custom_period block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.projects">Projects</a></code> | <code>*[]*string</code> | A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.resourceAncestors">ResourceAncestors</a></code> | <code>*[]*string</code> | A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.services">Services</a></code> | <code>*[]*string</code> | A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.subaccounts">Subaccounts</a></code> | <code>*[]*string</code> | A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget. |

---

##### `CalendarPeriod`<sup>Optional</sup> <a name="CalendarPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.calendarPeriod"></a>

```go
CalendarPeriod *string
```

- *Type:* *string

A CalendarPeriod represents the abstract concept of a recurring time period that has a canonical start.

Grammatically, "the start of the current CalendarPeriod".
All calendar times begin at 12 AM US and Canadian Pacific Time (UTC-8).

Exactly one of 'calendar_period', 'custom_period' must be provided. Possible values: ["MONTH", "QUARTER", "YEAR", "CALENDAR_PERIOD_UNSPECIFIED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#calendar_period GoogleBillingBudget#calendar_period}

---

##### `CreditTypes`<sup>Optional</sup> <a name="CreditTypes" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypes"></a>

```go
CreditTypes *[]*string
```

- *Type:* *[]*string

Optional.

If creditTypesTreatment is INCLUDE_SPECIFIED_CREDITS,
this is a list of credit types to be subtracted from gross cost to determine the spend for threshold calculations. See a list of acceptable credit type values.
If creditTypesTreatment is not INCLUDE_SPECIFIED_CREDITS, this field must be empty.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an empty array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#credit_types GoogleBillingBudget#credit_types}

---

##### `CreditTypesTreatment`<sup>Optional</sup> <a name="CreditTypesTreatment" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.creditTypesTreatment"></a>

```go
CreditTypesTreatment *string
```

- *Type:* *string

Specifies how credits should be treated when determining spend for threshold calculations. Default value: "INCLUDE_ALL_CREDITS" Possible values: ["INCLUDE_ALL_CREDITS", "EXCLUDE_ALL_CREDITS", "INCLUDE_SPECIFIED_CREDITS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#credit_types_treatment GoogleBillingBudget#credit_types_treatment}

---

##### `CustomPeriod`<sup>Optional</sup> <a name="CustomPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.customPeriod"></a>

```go
CustomPeriod GoogleBillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

custom_period block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#custom_period GoogleBillingBudget#custom_period}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A single label and value pair specifying that usage from only this set of labeled resources should be included in the budget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#labels GoogleBillingBudget#labels}

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.projects"></a>

```go
Projects *[]*string
```

- *Type:* *[]*string

A set of projects of the form projects/{project_number}, specifying that usage from only this set of projects should be included in the budget.

If omitted, the report will include
all usage for the billing account, regardless of which project
the usage occurred on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#projects GoogleBillingBudget#projects}

---

##### `ResourceAncestors`<sup>Optional</sup> <a name="ResourceAncestors" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.resourceAncestors"></a>

```go
ResourceAncestors *[]*string
```

- *Type:* *[]*string

A set of folder and organization names of the form folders/{folderId} or organizations/{organizationId}, specifying that usage from only this set of folders and organizations should be included in the budget.

If omitted, the budget includes all usage that the billing account pays for. If the folder or organization
contains projects that are paid for by a different Cloud Billing account, the budget doesn't apply to those projects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#resource_ancestors GoogleBillingBudget#resource_ancestors}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.services"></a>

```go
Services *[]*string
```

- *Type:* *[]*string

A set of services of the form services/{service_id}, specifying that usage from only this set of services should be included in the budget.

If omitted, the report will include
usage for all the services. The service names are available
through the Catalog API:
https://cloud.google.com/billing/v1/how-tos/catalog-api.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#services GoogleBillingBudget#services}

---

##### `Subaccounts`<sup>Optional</sup> <a name="Subaccounts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter.property.subaccounts"></a>

```go
Subaccounts *[]*string
```

- *Type:* *[]*string

A set of subaccounts of the form billingAccounts/{account_id}, specifying that usage from only this set of subaccounts should be included in the budget.

If a subaccount is set to the name of
the parent account, usage from the parent account will be included.
If the field is omitted, the report will include usage from the parent
account and all subaccounts, if they exist.

**Note:** If the field has a value in the config and needs to be removed, the field has to be an empty array in the config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#subaccounts GoogleBillingBudget#subaccounts}

---

### GoogleBillingBudgetBudgetFilterCustomPeriod <a name="GoogleBillingBudgetBudgetFilterCustomPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

&googlebillingbudget.GoogleBillingBudgetBudgetFilterCustomPeriod {
	StartDate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate,
	EndDate: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | start_date block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | end_date block. |

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.startDate"></a>

```go
StartDate GoogleBillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#start_date GoogleBillingBudget#start_date}

---

##### `EndDate`<sup>Optional</sup> <a name="EndDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod.property.endDate"></a>

```go
EndDate GoogleBillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#end_date GoogleBillingBudget#end_date}

---

### GoogleBillingBudgetBudgetFilterCustomPeriodEndDate <a name="GoogleBillingBudgetBudgetFilterCustomPeriodEndDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

&googlebillingbudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.day">Day</a></code> | <code>*f64</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.month">Month</a></code> | <code>*f64</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.year">Year</a></code> | <code>*f64</code> | Year of the date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#day GoogleBillingBudget#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#month GoogleBillingBudget#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#year GoogleBillingBudget#year}

---

### GoogleBillingBudgetBudgetFilterCustomPeriodStartDate <a name="GoogleBillingBudgetBudgetFilterCustomPeriodStartDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

&googlebillingbudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate {
	Day: *f64,
	Month: *f64,
	Year: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.day">Day</a></code> | <code>*f64</code> | Day of a month. Must be from 1 to 31 and valid for the year and month. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.month">Month</a></code> | <code>*f64</code> | Month of a year. Must be from 1 to 12. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.year">Year</a></code> | <code>*f64</code> | Year of the date. Must be from 1 to 9999. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.day"></a>

```go
Day *f64
```

- *Type:* *f64

Day of a month. Must be from 1 to 31 and valid for the year and month.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#day GoogleBillingBudget#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.month"></a>

```go
Month *f64
```

- *Type:* *f64

Month of a year. Must be from 1 to 12.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#month GoogleBillingBudget#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate.property.year"></a>

```go
Year *f64
```

- *Type:* *f64

Year of the date. Must be from 1 to 9999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#year GoogleBillingBudget#year}

---

### GoogleBillingBudgetConfig <a name="GoogleBillingBudgetConfig" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

&googlebillingbudget.GoogleBillingBudgetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Amount: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBillingBudget.GoogleBillingBudgetAmount,
	BillingAccount: *string,
	AllUpdatesRule: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule,
	BudgetFilter: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBillingBudget.GoogleBillingBudgetBudgetFilter,
	DisplayName: *string,
	Id: *string,
	OwnershipScope: *string,
	ThresholdRules: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleBillingBudget.GoogleBillingBudgetTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.amount">Amount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | amount block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.billingAccount">BillingAccount</a></code> | <code>*string</code> | ID of the billing account to set a budget on. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.allUpdatesRule">AllUpdatesRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | all_updates_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.budgetFilter">BudgetFilter</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | budget_filter block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User data for display name in UI. Must be <= 60 chars. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#id GoogleBillingBudget#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.ownershipScope">OwnershipScope</a></code> | <code>*string</code> | The ownership scope of the budget. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.thresholdRules">ThresholdRules</a></code> | <code>interface{}</code> | threshold_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Amount`<sup>Required</sup> <a name="Amount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.amount"></a>

```go
Amount GoogleBillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

amount block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#amount GoogleBillingBudget#amount}

---

##### `BillingAccount`<sup>Required</sup> <a name="BillingAccount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.billingAccount"></a>

```go
BillingAccount *string
```

- *Type:* *string

ID of the billing account to set a budget on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#billing_account GoogleBillingBudget#billing_account}

---

##### `AllUpdatesRule`<sup>Optional</sup> <a name="AllUpdatesRule" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.allUpdatesRule"></a>

```go
AllUpdatesRule GoogleBillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

all_updates_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#all_updates_rule GoogleBillingBudget#all_updates_rule}

---

##### `BudgetFilter`<sup>Optional</sup> <a name="BudgetFilter" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.budgetFilter"></a>

```go
BudgetFilter GoogleBillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

budget_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#budget_filter GoogleBillingBudget#budget_filter}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User data for display name in UI. Must be <= 60 chars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#display_name GoogleBillingBudget#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#id GoogleBillingBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OwnershipScope`<sup>Optional</sup> <a name="OwnershipScope" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.ownershipScope"></a>

```go
OwnershipScope *string
```

- *Type:* *string

The ownership scope of the budget.

The ownership scope and users'
IAM permissions determine who has full access to the budget's data. Possible values: ["OWNERSHIP_SCOPE_UNSPECIFIED", "ALL_USERS", "BILLING_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#ownership_scope GoogleBillingBudget#ownership_scope}

---

##### `ThresholdRules`<sup>Optional</sup> <a name="ThresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.thresholdRules"></a>

```go
ThresholdRules interface{}
```

- *Type:* interface{}

threshold_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#threshold_rules GoogleBillingBudget#threshold_rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetConfig.property.timeouts"></a>

```go
Timeouts GoogleBillingBudgetTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts">GoogleBillingBudgetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#timeouts GoogleBillingBudget#timeouts}

---

### GoogleBillingBudgetThresholdRules <a name="GoogleBillingBudgetThresholdRules" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

&googlebillingbudget.GoogleBillingBudgetThresholdRules {
	ThresholdPercent: *f64,
	SpendBasis: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.thresholdPercent">ThresholdPercent</a></code> | <code>*f64</code> | Send an alert when this threshold is exceeded. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.spendBasis">SpendBasis</a></code> | <code>*string</code> | The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"]. |

---

##### `ThresholdPercent`<sup>Required</sup> <a name="ThresholdPercent" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.thresholdPercent"></a>

```go
ThresholdPercent *f64
```

- *Type:* *f64

Send an alert when this threshold is exceeded.

This is a
1.0-based percentage, so 0.5 = 50%. Must be >= 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#threshold_percent GoogleBillingBudget#threshold_percent}

---

##### `SpendBasis`<sup>Optional</sup> <a name="SpendBasis" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRules.property.spendBasis"></a>

```go
SpendBasis *string
```

- *Type:* *string

The type of basis used to determine if spend has passed the threshold. Default value: "CURRENT_SPEND" Possible values: ["CURRENT_SPEND", "FORECASTED_SPEND"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#spend_basis GoogleBillingBudget#spend_basis}

---

### GoogleBillingBudgetTimeouts <a name="GoogleBillingBudgetTimeouts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

&googlebillingbudget.GoogleBillingBudgetTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#create GoogleBillingBudget#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#delete GoogleBillingBudget#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#update GoogleBillingBudget#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#create GoogleBillingBudget#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#delete GoogleBillingBudget#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_billing_budget#update GoogleBillingBudget#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBillingBudgetAllUpdatesRuleOutputReference <a name="GoogleBillingBudgetAllUpdatesRuleOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudgetAllUpdatesRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBillingBudgetAllUpdatesRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients">ResetDisableDefaultIamRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients">ResetEnableProjectLevelRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels">ResetMonitoringNotificationChannels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic">ResetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion">ResetSchemaVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableDefaultIamRecipients` <a name="ResetDisableDefaultIamRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetDisableDefaultIamRecipients"></a>

```go
func ResetDisableDefaultIamRecipients()
```

##### `ResetEnableProjectLevelRecipients` <a name="ResetEnableProjectLevelRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetEnableProjectLevelRecipients"></a>

```go
func ResetEnableProjectLevelRecipients()
```

##### `ResetMonitoringNotificationChannels` <a name="ResetMonitoringNotificationChannels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetMonitoringNotificationChannels"></a>

```go
func ResetMonitoringNotificationChannels()
```

##### `ResetPubsubTopic` <a name="ResetPubsubTopic" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetPubsubTopic"></a>

```go
func ResetPubsubTopic()
```

##### `ResetSchemaVersion` <a name="ResetSchemaVersion" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.resetSchemaVersion"></a>

```go
func ResetSchemaVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput">DisableDefaultIamRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput">EnableProjectLevelRecipientsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput">MonitoringNotificationChannelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput">SchemaVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients">DisableDefaultIamRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients">EnableProjectLevelRecipients</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels">MonitoringNotificationChannels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion">SchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisableDefaultIamRecipientsInput`<sup>Optional</sup> <a name="DisableDefaultIamRecipientsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipientsInput"></a>

```go
func DisableDefaultIamRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableProjectLevelRecipientsInput`<sup>Optional</sup> <a name="EnableProjectLevelRecipientsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipientsInput"></a>

```go
func EnableProjectLevelRecipientsInput() interface{}
```

- *Type:* interface{}

---

##### `MonitoringNotificationChannelsInput`<sup>Optional</sup> <a name="MonitoringNotificationChannelsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannelsInput"></a>

```go
func MonitoringNotificationChannelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopicInput"></a>

```go
func PubsubTopicInput() *string
```

- *Type:* *string

---

##### `SchemaVersionInput`<sup>Optional</sup> <a name="SchemaVersionInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersionInput"></a>

```go
func SchemaVersionInput() *string
```

- *Type:* *string

---

##### `DisableDefaultIamRecipients`<sup>Required</sup> <a name="DisableDefaultIamRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.disableDefaultIamRecipients"></a>

```go
func DisableDefaultIamRecipients() interface{}
```

- *Type:* interface{}

---

##### `EnableProjectLevelRecipients`<sup>Required</sup> <a name="EnableProjectLevelRecipients" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.enableProjectLevelRecipients"></a>

```go
func EnableProjectLevelRecipients() interface{}
```

- *Type:* interface{}

---

##### `MonitoringNotificationChannels`<sup>Required</sup> <a name="MonitoringNotificationChannels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.monitoringNotificationChannels"></a>

```go
func MonitoringNotificationChannels() *[]*string
```

- *Type:* *[]*string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

##### `SchemaVersion`<sup>Required</sup> <a name="SchemaVersion" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.schemaVersion"></a>

```go
func SchemaVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBillingBudgetAllUpdatesRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAllUpdatesRule">GoogleBillingBudgetAllUpdatesRule</a>

---


### GoogleBillingBudgetAmountOutputReference <a name="GoogleBillingBudgetAmountOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudgetAmountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBillingBudgetAmountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount">PutSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetLastPeriodAmount">ResetLastPeriodAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetSpecifiedAmount">ResetSpecifiedAmount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpecifiedAmount` <a name="PutSpecifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount"></a>

```go
func PutSpecifiedAmount(value GoogleBillingBudgetAmountSpecifiedAmount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.putSpecifiedAmount.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

---

##### `ResetLastPeriodAmount` <a name="ResetLastPeriodAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetLastPeriodAmount"></a>

```go
func ResetLastPeriodAmount()
```

##### `ResetSpecifiedAmount` <a name="ResetSpecifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.resetSpecifiedAmount"></a>

```go
func ResetSpecifiedAmount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmount">SpecifiedAmount</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference">GoogleBillingBudgetAmountSpecifiedAmountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmountInput">LastPeriodAmountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmountInput">SpecifiedAmountInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmount">LastPeriodAmount</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpecifiedAmount`<sup>Required</sup> <a name="SpecifiedAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmount"></a>

```go
func SpecifiedAmount() GoogleBillingBudgetAmountSpecifiedAmountOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference">GoogleBillingBudgetAmountSpecifiedAmountOutputReference</a>

---

##### `LastPeriodAmountInput`<sup>Optional</sup> <a name="LastPeriodAmountInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmountInput"></a>

```go
func LastPeriodAmountInput() interface{}
```

- *Type:* interface{}

---

##### `SpecifiedAmountInput`<sup>Optional</sup> <a name="SpecifiedAmountInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.specifiedAmountInput"></a>

```go
func SpecifiedAmountInput() GoogleBillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

---

##### `LastPeriodAmount`<sup>Required</sup> <a name="LastPeriodAmount" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.lastPeriodAmount"></a>

```go
func LastPeriodAmount() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBillingBudgetAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmount">GoogleBillingBudgetAmount</a>

---


### GoogleBillingBudgetAmountSpecifiedAmountOutputReference <a name="GoogleBillingBudgetAmountSpecifiedAmountOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudgetAmountSpecifiedAmountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBillingBudgetAmountSpecifiedAmountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode">ResetCurrencyCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetNanos">ResetNanos</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrencyCode` <a name="ResetCurrencyCode" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetCurrencyCode"></a>

```go
func ResetCurrencyCode()
```

##### `ResetNanos` <a name="ResetNanos" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetNanos"></a>

```go
func ResetNanos()
```

##### `ResetUnits` <a name="ResetUnits" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.resetUnits"></a>

```go
func ResetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput">CurrencyCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput">NanosInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrencyCodeInput`<sup>Optional</sup> <a name="CurrencyCodeInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCodeInput"></a>

```go
func CurrencyCodeInput() *string
```

- *Type:* *string

---

##### `NanosInput`<sup>Optional</sup> <a name="NanosInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanosInput"></a>

```go
func NanosInput() *f64
```

- *Type:* *f64

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmountOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBillingBudgetAmountSpecifiedAmount
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetAmountSpecifiedAmount">GoogleBillingBudgetAmountSpecifiedAmount</a>

---


### GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference <a name="GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

---


### GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference <a name="GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudgetBudgetFilterCustomPeriodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate">PutStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate">ResetEndDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndDate` <a name="PutEndDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate"></a>

```go
func PutEndDate(value GoogleBillingBudgetBudgetFilterCustomPeriodEndDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate"></a>

```go
func PutStartDate(value GoogleBillingBudgetBudgetFilterCustomPeriodStartDate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `ResetEndDate` <a name="ResetEndDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.resetEndDate"></a>

```go
func ResetEndDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDate"></a>

```go
func EndDate() GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodEndDateOutputReference</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDate"></a>

```go
func StartDate() GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.endDateInput"></a>

```go
func EndDateInput() GoogleBillingBudgetBudgetFilterCustomPeriodEndDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodEndDate">GoogleBillingBudgetBudgetFilterCustomPeriodEndDate</a>

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.startDateInput"></a>

```go
func StartDateInput() GoogleBillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

---


### GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference <a name="GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day">Day</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month">Month</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year">Year</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.dayInput"></a>

```go
func DayInput() *f64
```

- *Type:* *f64

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.monthInput"></a>

```go
func MonthInput() *f64
```

- *Type:* *f64

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.yearInput"></a>

```go
func YearInput() *f64
```

- *Type:* *f64

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.day"></a>

```go
func Day() *f64
```

- *Type:* *f64

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.month"></a>

```go
func Month() *f64
```

- *Type:* *f64

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.year"></a>

```go
func Year() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDateOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBillingBudgetBudgetFilterCustomPeriodStartDate
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodStartDate">GoogleBillingBudgetBudgetFilterCustomPeriodStartDate</a>

---


### GoogleBillingBudgetBudgetFilterOutputReference <a name="GoogleBillingBudgetBudgetFilterOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudgetBudgetFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBillingBudgetBudgetFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.putCustomPeriod">PutCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCalendarPeriod">ResetCalendarPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypes">ResetCreditTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment">ResetCreditTypesTreatment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCustomPeriod">ResetCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetProjects">ResetProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetResourceAncestors">ResetResourceAncestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetServices">ResetServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetSubaccounts">ResetSubaccounts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomPeriod` <a name="PutCustomPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.putCustomPeriod"></a>

```go
func PutCustomPeriod(value GoogleBillingBudgetBudgetFilterCustomPeriod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.putCustomPeriod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

---

##### `ResetCalendarPeriod` <a name="ResetCalendarPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCalendarPeriod"></a>

```go
func ResetCalendarPeriod()
```

##### `ResetCreditTypes` <a name="ResetCreditTypes" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypes"></a>

```go
func ResetCreditTypes()
```

##### `ResetCreditTypesTreatment` <a name="ResetCreditTypesTreatment" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCreditTypesTreatment"></a>

```go
func ResetCreditTypesTreatment()
```

##### `ResetCustomPeriod` <a name="ResetCustomPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetCustomPeriod"></a>

```go
func ResetCustomPeriod()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProjects` <a name="ResetProjects" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetProjects"></a>

```go
func ResetProjects()
```

##### `ResetResourceAncestors` <a name="ResetResourceAncestors" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetResourceAncestors"></a>

```go
func ResetResourceAncestors()
```

##### `ResetServices` <a name="ResetServices" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetServices"></a>

```go
func ResetServices()
```

##### `ResetSubaccounts` <a name="ResetSubaccounts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.resetSubaccounts"></a>

```go
func ResetSubaccounts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriod">CustomPeriod</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput">CalendarPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesInput">CreditTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput">CreditTypesTreatmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriodInput">CustomPeriodInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput">ResourceAncestorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.servicesInput">ServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccountsInput">SubaccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriod">CalendarPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypes">CreditTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment">CreditTypesTreatment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projects">Projects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestors">ResourceAncestors</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccounts">Subaccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomPeriod`<sup>Required</sup> <a name="CustomPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriod"></a>

```go
func CustomPeriod() GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference">GoogleBillingBudgetBudgetFilterCustomPeriodOutputReference</a>

---

##### `CalendarPeriodInput`<sup>Optional</sup> <a name="CalendarPeriodInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriodInput"></a>

```go
func CalendarPeriodInput() *string
```

- *Type:* *string

---

##### `CreditTypesInput`<sup>Optional</sup> <a name="CreditTypesInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesInput"></a>

```go
func CreditTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CreditTypesTreatmentInput`<sup>Optional</sup> <a name="CreditTypesTreatmentInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatmentInput"></a>

```go
func CreditTypesTreatmentInput() *string
```

- *Type:* *string

---

##### `CustomPeriodInput`<sup>Optional</sup> <a name="CustomPeriodInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.customPeriodInput"></a>

```go
func CustomPeriodInput() GoogleBillingBudgetBudgetFilterCustomPeriod
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterCustomPeriod">GoogleBillingBudgetBudgetFilterCustomPeriod</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projectsInput"></a>

```go
func ProjectsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceAncestorsInput`<sup>Optional</sup> <a name="ResourceAncestorsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestorsInput"></a>

```go
func ResourceAncestorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.servicesInput"></a>

```go
func ServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubaccountsInput`<sup>Optional</sup> <a name="SubaccountsInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccountsInput"></a>

```go
func SubaccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CalendarPeriod`<sup>Required</sup> <a name="CalendarPeriod" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.calendarPeriod"></a>

```go
func CalendarPeriod() *string
```

- *Type:* *string

---

##### `CreditTypes`<sup>Required</sup> <a name="CreditTypes" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypes"></a>

```go
func CreditTypes() *[]*string
```

- *Type:* *[]*string

---

##### `CreditTypesTreatment`<sup>Required</sup> <a name="CreditTypesTreatment" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.creditTypesTreatment"></a>

```go
func CreditTypesTreatment() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.projects"></a>

```go
func Projects() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceAncestors`<sup>Required</sup> <a name="ResourceAncestors" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.resourceAncestors"></a>

```go
func ResourceAncestors() *[]*string
```

- *Type:* *[]*string

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `Subaccounts`<sup>Required</sup> <a name="Subaccounts" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.subaccounts"></a>

```go
func Subaccounts() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleBillingBudgetBudgetFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetBudgetFilter">GoogleBillingBudgetBudgetFilter</a>

---


### GoogleBillingBudgetThresholdRulesList <a name="GoogleBillingBudgetThresholdRulesList" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudgetThresholdRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleBillingBudgetThresholdRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.get"></a>

```go
func Get(index *f64) GoogleBillingBudgetThresholdRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBillingBudgetThresholdRulesOutputReference <a name="GoogleBillingBudgetThresholdRulesOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudgetThresholdRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleBillingBudgetThresholdRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resetSpendBasis">ResetSpendBasis</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpendBasis` <a name="ResetSpendBasis" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.resetSpendBasis"></a>

```go
func ResetSpendBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasisInput">SpendBasisInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput">ThresholdPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasis">SpendBasis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercent">ThresholdPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpendBasisInput`<sup>Optional</sup> <a name="SpendBasisInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasisInput"></a>

```go
func SpendBasisInput() *string
```

- *Type:* *string

---

##### `ThresholdPercentInput`<sup>Optional</sup> <a name="ThresholdPercentInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercentInput"></a>

```go
func ThresholdPercentInput() *f64
```

- *Type:* *f64

---

##### `SpendBasis`<sup>Required</sup> <a name="SpendBasis" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.spendBasis"></a>

```go
func SpendBasis() *string
```

- *Type:* *string

---

##### `ThresholdPercent`<sup>Required</sup> <a name="ThresholdPercent" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.thresholdPercent"></a>

```go
func ThresholdPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetThresholdRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleBillingBudgetTimeoutsOutputReference <a name="GoogleBillingBudgetTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlebillingbudget"

googlebillingbudget.NewGoogleBillingBudgetTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleBillingBudgetTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBillingBudget.GoogleBillingBudgetTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



