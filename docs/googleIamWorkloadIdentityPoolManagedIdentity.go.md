# `googleIamWorkloadIdentityPoolManagedIdentity` Submodule <a name="`googleIamWorkloadIdentityPoolManagedIdentity` Submodule" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkloadIdentityPoolManagedIdentity <a name="GoogleIamWorkloadIdentityPoolManagedIdentity" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity google_iam_workload_identity_pool_managed_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

googleiamworkloadidentitypoolmanagedidentity.NewGoogleIamWorkloadIdentityPoolManagedIdentity(scope Construct, id *string, config GoogleIamWorkloadIdentityPoolManagedIdentityConfig) GoogleIamWorkloadIdentityPoolManagedIdentity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig">GoogleIamWorkloadIdentityPoolManagedIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig">GoogleIamWorkloadIdentityPoolManagedIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putAttestationRules">PutAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetAttestationRules">ResetAttestationRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttestationRules` <a name="PutAttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putAttestationRules"></a>

```go
func PutAttestationRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putAttestationRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a>

---

##### `ResetAttestationRules` <a name="ResetAttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetAttestationRules"></a>

```go
func ResetAttestationRules()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolManagedIdentity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

googleiamworkloadidentitypoolmanagedidentity.GoogleIamWorkloadIdentityPoolManagedIdentity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

googleiamworkloadidentitypoolmanagedidentity.GoogleIamWorkloadIdentityPoolManagedIdentity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

googleiamworkloadidentitypoolmanagedidentity.GoogleIamWorkloadIdentityPoolManagedIdentity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

googleiamworkloadidentitypoolmanagedidentity.GoogleIamWorkloadIdentityPoolManagedIdentity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIamWorkloadIdentityPoolManagedIdentity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIamWorkloadIdentityPoolManagedIdentity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIamWorkloadIdentityPoolManagedIdentity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkloadIdentityPoolManagedIdentity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRules">AttestationRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput">AttestationRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput">WorkloadIdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput">WorkloadIdentityPoolManagedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput">WorkloadIdentityPoolNamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId">WorkloadIdentityPoolManagedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId">WorkloadIdentityPoolNamespaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttestationRules`<sup>Required</sup> <a name="AttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRules"></a>

```go
func AttestationRules() GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList">GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeouts"></a>

```go
func Timeouts() GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference">GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference</a>

---

##### `AttestationRulesInput`<sup>Optional</sup> <a name="AttestationRulesInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.attestationRulesInput"></a>

```go
func AttestationRulesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadIdentityPoolIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolIdInput"></a>

```go
func WorkloadIdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolManagedIdentityIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolManagedIdentityIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityIdInput"></a>

```go
func WorkloadIdentityPoolManagedIdentityIdInput() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolNamespaceIdInput`<sup>Optional</sup> <a name="WorkloadIdentityPoolNamespaceIdInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceIdInput"></a>

```go
func WorkloadIdentityPoolNamespaceIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolId"></a>

```go
func WorkloadIdentityPoolId() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolManagedIdentityId`<sup>Required</sup> <a name="WorkloadIdentityPoolManagedIdentityId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolManagedIdentityId"></a>

```go
func WorkloadIdentityPoolManagedIdentityId() *string
```

- *Type:* *string

---

##### `WorkloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="WorkloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.workloadIdentityPoolNamespaceId"></a>

```go
func WorkloadIdentityPoolNamespaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules <a name="GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

&googleiamworkloadidentitypoolmanagedidentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules {
	GoogleCloudResource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource">GoogleCloudResource</a></code> | <code>*string</code> | A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'. |

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRules.property.googleCloudResource"></a>

```go
GoogleCloudResource *string
```

- *Type:* *string

A single workload operating on Google Cloud. For example: '//compute.googleapis.com/projects/123/uid/zones/us-central1-a/instances/12345678'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#google_cloud_resource GoogleIamWorkloadIdentityPoolManagedIdentity#google_cloud_resource}

---

### GoogleIamWorkloadIdentityPoolManagedIdentityConfig <a name="GoogleIamWorkloadIdentityPoolManagedIdentityConfig" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

&googleiamworkloadidentitypoolmanagedidentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkloadIdentityPoolId: *string,
	WorkloadIdentityPoolManagedIdentityId: *string,
	WorkloadIdentityPoolNamespaceId: *string,
	AttestationRules: interface{},
	Description: *string,
	Disabled: interface{},
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId">WorkloadIdentityPoolId</a></code> | <code>*string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId">WorkloadIdentityPoolManagedIdentityId</a></code> | <code>*string</code> | The ID to use for the managed identity. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId">WorkloadIdentityPoolNamespaceId</a></code> | <code>*string</code> | The ID to use for the namespace. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules">AttestationRules</a></code> | <code>interface{}</code> | attestation_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.description">Description</a></code> | <code>*string</code> | A description of the managed identity. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the managed identity is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#id GoogleIamWorkloadIdentityPoolManagedIdentity#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#project GoogleIamWorkloadIdentityPoolManagedIdentity#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkloadIdentityPoolId`<sup>Required</sup> <a name="WorkloadIdentityPoolId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolId"></a>

```go
WorkloadIdentityPoolId *string
```

- *Type:* *string

The ID to use for the pool, which becomes the final component of the resource name.

This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_id}

---

##### `WorkloadIdentityPoolManagedIdentityId`<sup>Required</sup> <a name="WorkloadIdentityPoolManagedIdentityId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolManagedIdentityId"></a>

```go
WorkloadIdentityPoolManagedIdentityId *string
```

- *Type:* *string

The ID to use for the managed identity.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_managed_identity_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_managed_identity_id}

---

##### `WorkloadIdentityPoolNamespaceId`<sup>Required</sup> <a name="WorkloadIdentityPoolNamespaceId" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.workloadIdentityPoolNamespaceId"></a>

```go
WorkloadIdentityPoolNamespaceId *string
```

- *Type:* *string

The ID to use for the namespace.

This value must:

* contain at most 63 characters
* contain only lowercase alphanumeric characters or '-'
* start with an alphanumeric character
* end with an alphanumeric character

The prefix 'gcp-' will be reserved for future uses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#workload_identity_pool_namespace_id GoogleIamWorkloadIdentityPoolManagedIdentity#workload_identity_pool_namespace_id}

---

##### `AttestationRules`<sup>Optional</sup> <a name="AttestationRules" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.attestationRules"></a>

```go
AttestationRules interface{}
```

- *Type:* interface{}

attestation_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#attestation_rules GoogleIamWorkloadIdentityPoolManagedIdentity#attestation_rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the managed identity. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#description GoogleIamWorkloadIdentityPoolManagedIdentity#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the managed identity is disabled.

If disabled, credentials may no longer be issued for
the identity, however existing credentials will still be accepted until they expire.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#disabled GoogleIamWorkloadIdentityPoolManagedIdentity#disabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#id GoogleIamWorkloadIdentityPoolManagedIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#project GoogleIamWorkloadIdentityPoolManagedIdentity#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityConfig.property.timeouts"></a>

```go
Timeouts GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts">GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#timeouts GoogleIamWorkloadIdentityPoolManagedIdentity#timeouts}

---

### GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts <a name="GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

&googleiamworkloadidentitypoolmanagedidentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#create GoogleIamWorkloadIdentityPoolManagedIdentity#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#delete GoogleIamWorkloadIdentityPoolManagedIdentity#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#update GoogleIamWorkloadIdentityPoolManagedIdentity#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#create GoogleIamWorkloadIdentityPoolManagedIdentity#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#delete GoogleIamWorkloadIdentityPoolManagedIdentity#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_iam_workload_identity_pool_managed_identity#update GoogleIamWorkloadIdentityPoolManagedIdentity#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList <a name="GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

googleiamworkloadidentitypoolmanagedidentity.NewGoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get"></a>

```go
func Get(index *f64) GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference <a name="GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

googleiamworkloadidentitypoolmanagedidentity.NewGoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput">GoogleCloudResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource">GoogleCloudResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GoogleCloudResourceInput`<sup>Optional</sup> <a name="GoogleCloudResourceInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResourceInput"></a>

```go
func GoogleCloudResourceInput() *string
```

- *Type:* *string

---

##### `GoogleCloudResource`<sup>Required</sup> <a name="GoogleCloudResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.googleCloudResource"></a>

```go
func GoogleCloudResource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityAttestationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference <a name="GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/googleiamworkloadidentitypoolmanagedidentity"

googleiamworkloadidentitypoolmanagedidentity.NewGoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkloadIdentityPoolManagedIdentity.GoogleIamWorkloadIdentityPoolManagedIdentityTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



