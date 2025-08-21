# `googleApigeeSecurityAction` Submodule <a name="`googleApigeeSecurityAction` Submodule" id="@cdktf/provider-google-beta.googleApigeeSecurityAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeSecurityAction <a name="GoogleApigeeSecurityAction" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action google_apigee_security_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.NewGoogleApigeeSecurityAction(scope Construct, id *string, config GoogleApigeeSecurityActionConfig) GoogleApigeeSecurityAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig">GoogleApigeeSecurityActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig">GoogleApigeeSecurityActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig">PutConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag">PutFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetApiProxies">ResetApiProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetFlag">ResetFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow"></a>

```go
func PutAllow(value GoogleApigeeSecurityActionAllow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---

##### `PutConditionConfig` <a name="PutConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig"></a>

```go
func PutConditionConfig(value GoogleApigeeSecurityActionConditionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---

##### `PutDeny` <a name="PutDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny"></a>

```go
func PutDeny(value GoogleApigeeSecurityActionDeny)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---

##### `PutFlag` <a name="PutFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag"></a>

```go
func PutFlag(value GoogleApigeeSecurityActionFlag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts"></a>

```go
func PutTimeouts(value GoogleApigeeSecurityActionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetApiProxies` <a name="ResetApiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetApiProxies"></a>

```go
func ResetApiProxies()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDeny"></a>

```go
func ResetDeny()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetExpireTime"></a>

```go
func ResetExpireTime()
```

##### `ResetFlag` <a name="ResetFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetFlag"></a>

```go
func ResetFlag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeSecurityAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.GoogleApigeeSecurityAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.GoogleApigeeSecurityAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.GoogleApigeeSecurityAction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.GoogleApigeeSecurityAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleApigeeSecurityAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleApigeeSecurityAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleApigeeSecurityAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeSecurityAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference">GoogleApigeeSecurityActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfig">ConditionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference">GoogleApigeeSecurityActionConditionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference">GoogleApigeeSecurityActionDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flag">Flag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference">GoogleApigeeSecurityActionFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference">GoogleApigeeSecurityActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxiesInput">ApiProxiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfigInput">ConditionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.denyInput">DenyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envIdInput">EnvIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTimeInput">ExpireTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flagInput">FlagInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionIdInput">SecurityActionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxies">ApiProxies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envId">EnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionId">SecurityActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allow"></a>

```go
func Allow() GoogleApigeeSecurityActionAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference">GoogleApigeeSecurityActionAllowOutputReference</a>

---

##### `ConditionConfig`<sup>Required</sup> <a name="ConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfig"></a>

```go
func ConditionConfig() GoogleApigeeSecurityActionConditionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference">GoogleApigeeSecurityActionConditionConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.deny"></a>

```go
func Deny() GoogleApigeeSecurityActionDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference">GoogleApigeeSecurityActionDenyOutputReference</a>

---

##### `Flag`<sup>Required</sup> <a name="Flag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flag"></a>

```go
func Flag() GoogleApigeeSecurityActionFlagOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference">GoogleApigeeSecurityActionFlagOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeouts"></a>

```go
func Timeouts() GoogleApigeeSecurityActionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference">GoogleApigeeSecurityActionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allowInput"></a>

```go
func AllowInput() GoogleApigeeSecurityActionAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---

##### `ApiProxiesInput`<sup>Optional</sup> <a name="ApiProxiesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxiesInput"></a>

```go
func ApiProxiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConditionConfigInput`<sup>Optional</sup> <a name="ConditionConfigInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfigInput"></a>

```go
func ConditionConfigInput() GoogleApigeeSecurityActionConditionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.denyInput"></a>

```go
func DenyInput() GoogleApigeeSecurityActionDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envIdInput"></a>

```go
func EnvIdInput() *string
```

- *Type:* *string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTimeInput"></a>

```go
func ExpireTimeInput() *string
```

- *Type:* *string

---

##### `FlagInput`<sup>Optional</sup> <a name="FlagInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flagInput"></a>

```go
func FlagInput() GoogleApigeeSecurityActionFlag
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `SecurityActionIdInput`<sup>Optional</sup> <a name="SecurityActionIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionIdInput"></a>

```go
func SecurityActionIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `ApiProxies`<sup>Required</sup> <a name="ApiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxies"></a>

```go
func ApiProxies() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envId"></a>

```go
func EnvId() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `SecurityActionId`<sup>Required</sup> <a name="SecurityActionId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionId"></a>

```go
func SecurityActionId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeSecurityActionAllow <a name="GoogleApigeeSecurityActionAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

&googleapigeesecurityaction.GoogleApigeeSecurityActionAllow {

}
```


### GoogleApigeeSecurityActionConditionConfig <a name="GoogleApigeeSecurityActionConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

&googleapigeesecurityaction.GoogleApigeeSecurityActionConditionConfig {
	AccessTokens: *[]*string,
	ApiKeys: *[]*string,
	ApiProducts: *[]*string,
	Asns: *[]*string,
	BotReasons: *[]*string,
	DeveloperApps: *[]*string,
	Developers: *[]*string,
	HttpMethods: *[]*string,
	IpAddressRanges: *[]*string,
	RegionCodes: *[]*string,
	UserAgents: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.accessTokens">AccessTokens</a></code> | <code>*[]*string</code> | A list of accessTokens. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiKeys">ApiKeys</a></code> | <code>*[]*string</code> | A list of API keys. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiProducts">ApiProducts</a></code> | <code>*[]*string</code> | A list of API Products. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.asns">Asns</a></code> | <code>*[]*string</code> | A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.botReasons">BotReasons</a></code> | <code>*[]*string</code> | A list of Bot Reasons. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developerApps">DeveloperApps</a></code> | <code>*[]*string</code> | A list of developer apps. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developers">Developers</a></code> | <code>*[]*string</code> | A list of developers. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.httpMethods">HttpMethods</a></code> | <code>*[]*string</code> | Act only on particular HTTP methods. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.ipAddressRanges">IpAddressRanges</a></code> | <code>*[]*string</code> | A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.regionCodes">RegionCodes</a></code> | <code>*[]*string</code> | A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.userAgents">UserAgents</a></code> | <code>*[]*string</code> | A list of user agents to deny. We look for exact matches. Limit 50 per action. |

---

##### `AccessTokens`<sup>Optional</sup> <a name="AccessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.accessTokens"></a>

```go
AccessTokens *[]*string
```

- *Type:* *[]*string

A list of accessTokens. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#access_tokens GoogleApigeeSecurityAction#access_tokens}

---

##### `ApiKeys`<sup>Optional</sup> <a name="ApiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiKeys"></a>

```go
ApiKeys *[]*string
```

- *Type:* *[]*string

A list of API keys. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#api_keys GoogleApigeeSecurityAction#api_keys}

---

##### `ApiProducts`<sup>Optional</sup> <a name="ApiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiProducts"></a>

```go
ApiProducts *[]*string
```

- *Type:* *[]*string

A list of API Products. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#api_products GoogleApigeeSecurityAction#api_products}

---

##### `Asns`<sup>Optional</sup> <a name="Asns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.asns"></a>

```go
Asns *[]*string
```

- *Type:* *[]*string

A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#asns GoogleApigeeSecurityAction#asns}

---

##### `BotReasons`<sup>Optional</sup> <a name="BotReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.botReasons"></a>

```go
BotReasons *[]*string
```

- *Type:* *[]*string

A list of Bot Reasons.

Current options: Flooder, Brute Guessor, Static Content Scraper,
OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#bot_reasons GoogleApigeeSecurityAction#bot_reasons}

---

##### `DeveloperApps`<sup>Optional</sup> <a name="DeveloperApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developerApps"></a>

```go
DeveloperApps *[]*string
```

- *Type:* *[]*string

A list of developer apps. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#developer_apps GoogleApigeeSecurityAction#developer_apps}

---

##### `Developers`<sup>Optional</sup> <a name="Developers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developers"></a>

```go
Developers *[]*string
```

- *Type:* *[]*string

A list of developers. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#developers GoogleApigeeSecurityAction#developers}

---

##### `HttpMethods`<sup>Optional</sup> <a name="HttpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.httpMethods"></a>

```go
HttpMethods *[]*string
```

- *Type:* *[]*string

Act only on particular HTTP methods.

E.g. A read-only API can block POST/PUT/DELETE methods.
Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#http_methods GoogleApigeeSecurityAction#http_methods}

---

##### `IpAddressRanges`<sup>Optional</sup> <a name="IpAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.ipAddressRanges"></a>

```go
IpAddressRanges *[]*string
```

- *Type:* *[]*string

A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#ip_address_ranges GoogleApigeeSecurityAction#ip_address_ranges}

---

##### `RegionCodes`<sup>Optional</sup> <a name="RegionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.regionCodes"></a>

```go
RegionCodes *[]*string
```

- *Type:* *[]*string

A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#region_codes GoogleApigeeSecurityAction#region_codes}

---

##### `UserAgents`<sup>Optional</sup> <a name="UserAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.userAgents"></a>

```go
UserAgents *[]*string
```

- *Type:* *[]*string

A list of user agents to deny. We look for exact matches. Limit 50 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#user_agents GoogleApigeeSecurityAction#user_agents}

---

### GoogleApigeeSecurityActionConfig <a name="GoogleApigeeSecurityActionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

&googleapigeesecurityaction.GoogleApigeeSecurityActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConditionConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig,
	EnvId: *string,
	OrgId: *string,
	SecurityActionId: *string,
	State: *string,
	Allow: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow,
	ApiProxies: *[]*string,
	Deny: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny,
	Description: *string,
	ExpireTime: *string,
	Flag: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.conditionConfig">ConditionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.envId">EnvId</a></code> | <code>*string</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.securityActionId">SecurityActionId</a></code> | <code>*string</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.state">State</a></code> | <code>*string</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.apiProxies">ApiProxies</a></code> | <code>*[]*string</code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.description">Description</a></code> | <code>*string</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.expireTime">ExpireTime</a></code> | <code>*string</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.flag">Flag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#id GoogleApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.ttl">Ttl</a></code> | <code>*string</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConditionConfig`<sup>Required</sup> <a name="ConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.conditionConfig"></a>

```go
ConditionConfig GoogleApigeeSecurityActionConditionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#condition_config GoogleApigeeSecurityAction#condition_config}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.envId"></a>

```go
EnvId *string
```

- *Type:* *string

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#env_id GoogleApigeeSecurityAction#env_id}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#org_id GoogleApigeeSecurityAction#org_id}

---

##### `SecurityActionId`<sup>Required</sup> <a name="SecurityActionId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.securityActionId"></a>

```go
SecurityActionId *string
```

- *Type:* *string

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#security_action_id GoogleApigeeSecurityAction#security_action_id}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#state GoogleApigeeSecurityAction#state}

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.allow"></a>

```go
Allow GoogleApigeeSecurityActionAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#allow GoogleApigeeSecurityAction#allow}

---

##### `ApiProxies`<sup>Optional</sup> <a name="ApiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.apiProxies"></a>

```go
ApiProxies *[]*string
```

- *Type:* *[]*string

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#api_proxies GoogleApigeeSecurityAction#api_proxies}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.deny"></a>

```go
Deny GoogleApigeeSecurityActionDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#deny GoogleApigeeSecurityAction#deny}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#description GoogleApigeeSecurityAction#description}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.expireTime"></a>

```go
ExpireTime *string
```

- *Type:* *string

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#expire_time GoogleApigeeSecurityAction#expire_time}

---

##### `Flag`<sup>Optional</sup> <a name="Flag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.flag"></a>

```go
Flag GoogleApigeeSecurityActionFlag
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#flag GoogleApigeeSecurityAction#flag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#id GoogleApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.timeouts"></a>

```go
Timeouts GoogleApigeeSecurityActionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#timeouts GoogleApigeeSecurityAction#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#ttl GoogleApigeeSecurityAction#ttl}

---

### GoogleApigeeSecurityActionDeny <a name="GoogleApigeeSecurityActionDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

&googleapigeesecurityaction.GoogleApigeeSecurityActionDeny {
	ResponseCode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | The HTTP response code if the Action = DENY. |

---

##### `ResponseCode`<sup>Optional</sup> <a name="ResponseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.property.responseCode"></a>

```go
ResponseCode *f64
```

- *Type:* *f64

The HTTP response code if the Action = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#response_code GoogleApigeeSecurityAction#response_code}

---

### GoogleApigeeSecurityActionFlag <a name="GoogleApigeeSecurityActionFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

&googleapigeesecurityaction.GoogleApigeeSecurityActionFlag {
	Headers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#headers GoogleApigeeSecurityAction#headers}

---

### GoogleApigeeSecurityActionFlagHeaders <a name="GoogleApigeeSecurityActionFlagHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

&googleapigeesecurityaction.GoogleApigeeSecurityActionFlagHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.name">Name</a></code> | <code>*string</code> | The header name to be sent to the target. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.value">Value</a></code> | <code>*string</code> | The header value to be sent to the target. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header name to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#name GoogleApigeeSecurityAction#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header value to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#value GoogleApigeeSecurityAction#value}

---

### GoogleApigeeSecurityActionTimeouts <a name="GoogleApigeeSecurityActionTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

&googleapigeesecurityaction.GoogleApigeeSecurityActionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#create GoogleApigeeSecurityAction#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#delete GoogleApigeeSecurityAction#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#create GoogleApigeeSecurityAction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.49.1/docs/resources/google_apigee_security_action#delete GoogleApigeeSecurityAction#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeSecurityActionAllowOutputReference <a name="GoogleApigeeSecurityActionAllowOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.NewGoogleApigeeSecurityActionAllowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeSecurityActionAllowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeSecurityActionAllow
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---


### GoogleApigeeSecurityActionConditionConfigOutputReference <a name="GoogleApigeeSecurityActionConditionConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.NewGoogleApigeeSecurityActionConditionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeSecurityActionConditionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens">ResetAccessTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiKeys">ResetApiKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiProducts">ResetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAsns">ResetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetBotReasons">ResetBotReasons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps">ResetDeveloperApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDevelopers">ResetDevelopers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods">ResetHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges">ResetIpAddressRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes">ResetRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetUserAgents">ResetUserAgents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessTokens` <a name="ResetAccessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens"></a>

```go
func ResetAccessTokens()
```

##### `ResetApiKeys` <a name="ResetApiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiKeys"></a>

```go
func ResetApiKeys()
```

##### `ResetApiProducts` <a name="ResetApiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiProducts"></a>

```go
func ResetApiProducts()
```

##### `ResetAsns` <a name="ResetAsns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAsns"></a>

```go
func ResetAsns()
```

##### `ResetBotReasons` <a name="ResetBotReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetBotReasons"></a>

```go
func ResetBotReasons()
```

##### `ResetDeveloperApps` <a name="ResetDeveloperApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps"></a>

```go
func ResetDeveloperApps()
```

##### `ResetDevelopers` <a name="ResetDevelopers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDevelopers"></a>

```go
func ResetDevelopers()
```

##### `ResetHttpMethods` <a name="ResetHttpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods"></a>

```go
func ResetHttpMethods()
```

##### `ResetIpAddressRanges` <a name="ResetIpAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges"></a>

```go
func ResetIpAddressRanges()
```

##### `ResetRegionCodes` <a name="ResetRegionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes"></a>

```go
func ResetRegionCodes()
```

##### `ResetUserAgents` <a name="ResetUserAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetUserAgents"></a>

```go
func ResetUserAgents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput">AccessTokensInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput">ApiKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput">ApiProductsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asnsInput">AsnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput">BotReasonsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput">DeveloperAppsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developersInput">DevelopersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput">HttpMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput">IpAddressRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput">RegionCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput">UserAgentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokens">AccessTokens</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeys">ApiKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProducts">ApiProducts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asns">Asns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasons">BotReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerApps">DeveloperApps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developers">Developers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethods">HttpMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges">IpAddressRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodes">RegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgents">UserAgents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokensInput`<sup>Optional</sup> <a name="AccessTokensInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput"></a>

```go
func AccessTokensInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiKeysInput`<sup>Optional</sup> <a name="ApiKeysInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput"></a>

```go
func ApiKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiProductsInput`<sup>Optional</sup> <a name="ApiProductsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput"></a>

```go
func ApiProductsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AsnsInput`<sup>Optional</sup> <a name="AsnsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asnsInput"></a>

```go
func AsnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BotReasonsInput`<sup>Optional</sup> <a name="BotReasonsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput"></a>

```go
func BotReasonsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeveloperAppsInput`<sup>Optional</sup> <a name="DeveloperAppsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput"></a>

```go
func DeveloperAppsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DevelopersInput`<sup>Optional</sup> <a name="DevelopersInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developersInput"></a>

```go
func DevelopersInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethodsInput`<sup>Optional</sup> <a name="HttpMethodsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput"></a>

```go
func HttpMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddressRangesInput`<sup>Optional</sup> <a name="IpAddressRangesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput"></a>

```go
func IpAddressRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCodesInput`<sup>Optional</sup> <a name="RegionCodesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput"></a>

```go
func RegionCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserAgentsInput`<sup>Optional</sup> <a name="UserAgentsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput"></a>

```go
func UserAgentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessTokens`<sup>Required</sup> <a name="AccessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokens"></a>

```go
func AccessTokens() *[]*string
```

- *Type:* *[]*string

---

##### `ApiKeys`<sup>Required</sup> <a name="ApiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeys"></a>

```go
func ApiKeys() *[]*string
```

- *Type:* *[]*string

---

##### `ApiProducts`<sup>Required</sup> <a name="ApiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProducts"></a>

```go
func ApiProducts() *[]*string
```

- *Type:* *[]*string

---

##### `Asns`<sup>Required</sup> <a name="Asns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asns"></a>

```go
func Asns() *[]*string
```

- *Type:* *[]*string

---

##### `BotReasons`<sup>Required</sup> <a name="BotReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasons"></a>

```go
func BotReasons() *[]*string
```

- *Type:* *[]*string

---

##### `DeveloperApps`<sup>Required</sup> <a name="DeveloperApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerApps"></a>

```go
func DeveloperApps() *[]*string
```

- *Type:* *[]*string

---

##### `Developers`<sup>Required</sup> <a name="Developers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developers"></a>

```go
func Developers() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethods`<sup>Required</sup> <a name="HttpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethods"></a>

```go
func HttpMethods() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddressRanges`<sup>Required</sup> <a name="IpAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges"></a>

```go
func IpAddressRanges() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCodes`<sup>Required</sup> <a name="RegionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodes"></a>

```go
func RegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `UserAgents`<sup>Required</sup> <a name="UserAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgents"></a>

```go
func UserAgents() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeSecurityActionConditionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---


### GoogleApigeeSecurityActionDenyOutputReference <a name="GoogleApigeeSecurityActionDenyOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.NewGoogleApigeeSecurityActionDenyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeSecurityActionDenyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resetResponseCode">ResetResponseCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResponseCode` <a name="ResetResponseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resetResponseCode"></a>

```go
func ResetResponseCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCodeInput"></a>

```go
func ResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCode"></a>

```go
func ResponseCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeSecurityActionDeny
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---


### GoogleApigeeSecurityActionFlagHeadersList <a name="GoogleApigeeSecurityActionFlagHeadersList" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.NewGoogleApigeeSecurityActionFlagHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleApigeeSecurityActionFlagHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get"></a>

```go
func Get(index *f64) GoogleApigeeSecurityActionFlagHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApigeeSecurityActionFlagHeadersOutputReference <a name="GoogleApigeeSecurityActionFlagHeadersOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.NewGoogleApigeeSecurityActionFlagHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleApigeeSecurityActionFlagHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleApigeeSecurityActionFlagOutputReference <a name="GoogleApigeeSecurityActionFlagOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.NewGoogleApigeeSecurityActionFlagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeSecurityActionFlagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList">GoogleApigeeSecurityActionFlagHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headers"></a>

```go
func Headers() GoogleApigeeSecurityActionFlagHeadersList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList">GoogleApigeeSecurityActionFlagHeadersList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleApigeeSecurityActionFlag
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---


### GoogleApigeeSecurityActionTimeoutsOutputReference <a name="GoogleApigeeSecurityActionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleapigeesecurityaction"

googleapigeesecurityaction.NewGoogleApigeeSecurityActionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleApigeeSecurityActionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



