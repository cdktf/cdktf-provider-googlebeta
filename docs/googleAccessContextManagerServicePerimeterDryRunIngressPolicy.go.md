# `googleAccessContextManagerServicePerimeterDryRunIngressPolicy` Submodule <a name="`googleAccessContextManagerServicePerimeterDryRunIngressPolicy` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy google_access_context_manager_service_perimeter_dry_run_ingress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunIngressPolicy(scope Construct, id *string, config GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressFrom">PutIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressTo">PutIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressFrom">ResetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressTo">ResetIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIngressFrom` <a name="PutIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressFrom"></a>

```go
func PutIngressFrom(value GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

---

##### `PutIngressTo` <a name="PutIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressTo"></a>

```go
func PutIngressTo(value GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetIngressFrom` <a name="ResetIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressFrom"></a>

```go
func ResetIngressFrom()
```

##### `ResetIngressTo` <a name="ResetIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressTo"></a>

```go
func ResetIngressTo()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFrom">IngressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressTo">IngressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFromInput">IngressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressToInput">IngressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeterInput">PerimeterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeter">Perimeter</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IngressFrom`<sup>Required</sup> <a name="IngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFrom"></a>

```go
func IngressFrom() GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference</a>

---

##### `IngressTo`<sup>Required</sup> <a name="IngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressTo"></a>

```go
func IngressTo() GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressFromInput`<sup>Optional</sup> <a name="IngressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFromInput"></a>

```go
func IngressFromInput() GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

---

##### `IngressToInput`<sup>Optional</sup> <a name="IngressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressToInput"></a>

```go
func IngressToInput() GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

---

##### `PerimeterInput`<sup>Optional</sup> <a name="PerimeterInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeterInput"></a>

```go
func PerimeterInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeter"></a>

```go
func Perimeter() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

&googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Perimeter: *string,
	Id: *string,
	IngressFrom: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom,
	IngressTo: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.perimeter">Perimeter</a></code> | <code>*string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#id GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressFrom">IngressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressTo">IngressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | ingress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Perimeter`<sup>Required</sup> <a name="Perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.perimeter"></a>

```go
Perimeter *string
```

- *Type:* *string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#perimeter GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#perimeter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#id GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressFrom`<sup>Optional</sup> <a name="IngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressFrom"></a>

```go
IngressFrom GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_from GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_from}

---

##### `IngressTo`<sup>Optional</sup> <a name="IngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressTo"></a>

```go
IngressTo GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_to GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_to}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#timeouts GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#timeouts}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

&googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom {
	Identities: *[]*string,
	IdentityType: *string,
	Sources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identities">Identities</a></code> | <code>*[]*string</code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identityType">IdentityType</a></code> | <code>*string</code> | Specifies the type of identities that are allowed access from outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.sources">Sources</a></code> | <code>interface{}</code> | sources block. |

---

##### `Identities`<sup>Optional</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identities"></a>

```go
Identities *[]*string
```

- *Type:* *[]*string

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#identities GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#identities}

---

##### `IdentityType`<sup>Optional</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identityType"></a>

```go
IdentityType *string
```

- *Type:* *string

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#identity_type GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#identity_type}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.sources"></a>

```go
Sources interface{}
```

- *Type:* interface{}

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#sources GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#sources}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

&googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources {
	AccessLevel: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.resource">Resource</a></code> | <code>*string</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#access_level GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#access_level}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format 'projects/{project_number}'
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#resource GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#resource}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

&googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo {
	Operations: interface{},
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.operations">Operations</a></code> | <code>interface{}</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.resources">Resources</a></code> | <code>*[]*string</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.operations"></a>

```go
Operations interface{}
```

- *Type:* interface{}

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#operations GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#operations}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#resources GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#resources}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

&googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations {
	MethodSelectors: interface{},
	ServiceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.methodSelectors">MethodSelectors</a></code> | <code>interface{}</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `MethodSelectors`<sup>Optional</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.methodSelectors"></a>

```go
MethodSelectors interface{}
```

- *Type:* interface{}

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#method_selectors GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#method_selectors}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#service_name GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#service_name}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

&googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors {
	Method: *string,
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.method">Method</a></code> | <code>*string</code> | Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.permission">Permission</a></code> | <code>*string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.method"></a>

```go
Method *string
```

- *Type:* *string

Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#method GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#method}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#permission GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#permission}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

&googleaccesscontextmanagerserviceperimeterdryruningresspolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#create GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#delete GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#create GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#delete GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentities">ResetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentityType">ResetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSources` <a name="PutSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.putSources"></a>

```go
func PutSources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentities` <a name="ResetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentities"></a>

```go
func ResetIdentities()
```

##### `ResetIdentityType` <a name="ResetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentityType"></a>

```go
func ResetIdentityType()
```

##### `ResetSources` <a name="ResetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetSources"></a>

```go
func ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identitiesInput">IdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityTypeInput">IdentityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identities">Identities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityType">IdentityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sources"></a>

```go
func Sources() GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList</a>

---

##### `IdentitiesInput`<sup>Optional</sup> <a name="IdentitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identitiesInput"></a>

```go
func IdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityTypeInput`<sup>Optional</sup> <a name="IdentityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityTypeInput"></a>

```go
func IdentityTypeInput() *string
```

- *Type:* *string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sourcesInput"></a>

```go
func SourcesInput() interface{}
```

- *Type:* interface{}

---

##### `Identities`<sup>Required</sup> <a name="Identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identities"></a>

```go
func Identities() *[]*string
```

- *Type:* *[]*string

---

##### `IdentityType`<sup>Required</sup> <a name="IdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityType"></a>

```go
func IdentityType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.get"></a>

```go
func Get(index *f64) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```go
func ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.putMethodSelectors">PutMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors">ResetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMethodSelectors` <a name="PutMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.putMethodSelectors"></a>

```go
func PutMethodSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMethodSelectors` <a name="ResetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors"></a>

```go
func ResetMethodSelectors()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectors">MethodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput">MethodSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MethodSelectors`<sup>Required</sup> <a name="MethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectors"></a>

```go
func MethodSelectors() GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList</a>

---

##### `MethodSelectorsInput`<sup>Optional</sup> <a name="MethodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```go
func MethodSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.putOperations"></a>

```go
func PutOperations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetOperations"></a>

```go
func ResetOperations()
```

##### `ResetResources` <a name="ResetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operationsInput">OperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operations"></a>

```go
func Operations() GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList</a>

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operationsInput"></a>

```go
func OperationsInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleaccesscontextmanagerserviceperimeterdryruningresspolicy"

googleaccesscontextmanagerserviceperimeterdryruningresspolicy.NewGoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



