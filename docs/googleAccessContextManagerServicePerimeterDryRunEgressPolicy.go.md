# `googleAccessContextManagerServicePerimeterDryRunEgressPolicy` Submodule <a name="`googleAccessContextManagerServicePerimeterDryRunEgressPolicy` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy google_access_context_manager_service_perimeter_dry_run_egress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunEgressPolicy(scope Construct, id *string, config GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom">PutEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo">PutEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressFrom">ResetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressTo">ResetEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressFrom` <a name="PutEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom"></a>

```go
func PutEgressFrom(value GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---

##### `PutEgressTo` <a name="PutEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo"></a>

```go
func PutEgressTo(value GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

---

##### `ResetEgressFrom` <a name="ResetEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressFrom"></a>

```go
func ResetEgressFrom()
```

##### `ResetEgressTo` <a name="ResetEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetEgressTo"></a>

```go
func ResetEgressTo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.resetTitle"></a>

```go
func ResetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.accessPolicyId">AccessPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFromInput">EgressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressToInput">EgressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeterInput">PerimeterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeter">Perimeter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.title">Title</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessPolicyId`<sup>Required</sup> <a name="AccessPolicyId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.accessPolicyId"></a>

```go
func AccessPolicyId() *string
```

- *Type:* *string

---

##### `EgressFrom`<sup>Required</sup> <a name="EgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFrom"></a>

```go
func EgressFrom() GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference</a>

---

##### `EgressTo`<sup>Required</sup> <a name="EgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressTo"></a>

```go
func EgressTo() GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference</a>

---

##### `EgressFromInput`<sup>Optional</sup> <a name="EgressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressFromInput"></a>

```go
func EgressFromInput() GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---

##### `EgressToInput`<sup>Optional</sup> <a name="EgressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.egressToInput"></a>

```go
func EgressToInput() GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PerimeterInput`<sup>Optional</sup> <a name="PerimeterInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeterInput"></a>

```go
func PerimeterInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.perimeter"></a>

```go
func Perimeter() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

&googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Perimeter: *string,
	EgressFrom: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom,
	EgressTo: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.perimeter">Perimeter</a></code> | <code>*string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressFrom">EgressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressTo">EgressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | egress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#id GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.title">Title</a></code> | <code>*string</code> | Human readable title. Must be unique within the perimeter. Does not affect behavior. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.perimeter"></a>

```go
Perimeter *string
```

- *Type:* *string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#perimeter GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#perimeter}

---

##### `EgressFrom`<sup>Optional</sup> <a name="EgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressFrom"></a>

```go
EgressFrom GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#egress_from GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#egress_from}

---

##### `EgressTo`<sup>Optional</sup> <a name="EgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.egressTo"></a>

```go
EgressTo GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#egress_to GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#egress_to}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#id GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#timeouts GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#timeouts}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Human readable title. Must be unique within the perimeter. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#title GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#title}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

&googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom {
	Identities: *[]*string,
	IdentityType: *string,
	SourceRestriction: *string,
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identities">Identities</a></code> | <code>*[]*string</code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identityType">IdentityType</a></code> | <code>*string</code> | Specifies the type of identities that are allowed access to outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sourceRestriction">SourceRestriction</a></code> | <code>*string</code> | Whether to enforce traffic restrictions based on 'sources' field. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identities"></a>

```go
Identities *[]*string
```

- *Type:* *[]*string

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#identities GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#identities}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#identity_type GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#identity_type}

---

##### `SourceRestriction`<sup>Optional</sup> <a name="SourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sourceRestriction"></a>

```go
SourceRestriction *string
```

- *Type:* *string

Whether to enforce traffic restrictions based on 'sources' field.

If the 'sources' field is non-empty, then this field must be set to 'SOURCE_RESTRICTION_ENABLED'. Possible values: ["SOURCE_RESTRICTION_ENABLED", "SOURCE_RESTRICTION_DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#source_restriction GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#source_restriction}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#sources GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#sources}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

&googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources {
	AccessLevel: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.resource">Resource</a></code> | <code>*string</code> | A Google Cloud resource that is allowed to egress the perimeter. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#access_level GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#access_level}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSources.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

A Google Cloud resource that is allowed to egress the perimeter.

Requests from these resources are allowed to access data outside the perimeter.
Currently only projects are allowed. Project format: 'projects/{project_number}'.
The resource may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the
case of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#resource GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#resource}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

&googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo {
	ExternalResources: *[]*string,
	Operations: interface{},
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.externalResources">ExternalResources</a></code> | <code>*[]*string</code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.operations">Operations</a></code> | <code>interface{}</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `ExternalResources`<sup>Optional</sup> <a name="ExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.externalResources"></a>

```go
ExternalResources *[]*string
```

- *Type:* *[]*string

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#external_resources GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#external_resources}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#operations GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#operations}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#resources GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#resources}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

&googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations {
	MethodSelectors: interface{},
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.methodSelectors">MethodSelectors</a></code> | <code>interface{}</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `MethodSelectors`<sup>Optional</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.methodSelectors"></a>

```go
MethodSelectors interface{}
```

- *Type:* interface{}

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#method_selectors GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#method_selectors}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperations.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#service_name GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#service_name}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

&googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors {
	Method: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.method">Method</a></code> | <code>*string</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.permission">Permission</a></code> | <code>*string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.method"></a>

```go
Method *string
```

- *Type:* *string

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#method GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#method}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectors.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#permission GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#permission}

---

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

&googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#create GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#delete GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#create GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_egress_policy#delete GoogleAccessContextManagerServicePerimeterDryRunEgressPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSourceRestriction">ResetSourceRestriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentities"></a>

```go
func ResetIdentities()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetSourceRestriction` <a name="ResetSourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSourceRestriction"></a>

```go
func ResetSourceRestriction()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput">SourceRestrictionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identities">Identities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestriction">SourceRestriction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sources"></a>

```go
func Sources() GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identitiesInput"></a>

```go
func IdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `SourceRestrictionInput`<sup>Optional</sup> <a name="SourceRestrictionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestrictionInput"></a>

```go
func SourceRestrictionInput() *string
```

- *Type:* *string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identities"></a>

```go
func Identities() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `SourceRestriction`<sup>Required</sup> <a name="SourceRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.sourceRestriction"></a>

```go
func SourceRestriction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressFromSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors">PutMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors">ResetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMethodSelectors` <a name="PutMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors"></a>

```go
func PutMethodSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMethodSelectors` <a name="ResetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetMethodSelectors"></a>

```go
func ResetMethodSelectors()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectors">MethodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput">MethodSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodSelectors`<sup>Required</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectors"></a>

```go
func MethodSelectors() GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsMethodSelectorsList</a>

---

##### `MethodSelectorsInput`<sup>Optional</sup> <a name="MethodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```go
func MethodSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetExternalResources">ResetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations"></a>

```go
func PutOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExternalResources` <a name="ResetExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetExternalResources"></a>

```go
func ResetExternalResources()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResourcesInput">ExternalResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResources">ExternalResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operations"></a>

```go
func Operations() GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOperationsList</a>

---

##### `ExternalResourcesInput`<sup>Optional</sup> <a name="ExternalResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResourcesInput"></a>

```go
func ExternalResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalResources`<sup>Required</sup> <a name="ExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.externalResources"></a>

```go
func ExternalResources() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressToOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo">GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyEgressTo</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryrunegresspolicy"

googleaccesscontextmanagerserviceperimeterdryrunegresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunEgressPolicy.GoogleAccessContextManagerServicePerimeterDryRunEgressPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



