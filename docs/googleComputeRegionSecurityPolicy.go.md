# `googleComputeRegionSecurityPolicy` Submodule <a name="`googleComputeRegionSecurityPolicy` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionSecurityPolicy <a name="GoogleComputeRegionSecurityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy google_compute_region_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicy(scope Construct, id *string, config GoogleComputeRegionSecurityPolicyConfig) GoogleComputeRegionSecurityPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig">GoogleComputeRegionSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig">GoogleComputeRegionSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putDdosProtectionConfig">PutDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putUserDefinedFields">PutUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDdosProtectionConfig">ResetDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetUserDefinedFields">ResetUserDefinedFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDdosProtectionConfig` <a name="PutDdosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putDdosProtectionConfig"></a>

```go
func PutDdosProtectionConfig(value GoogleComputeRegionSecurityPolicyDdosProtectionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putDdosProtectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeRegionSecurityPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>

---

##### `PutUserDefinedFields` <a name="PutUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putUserDefinedFields"></a>

```go
func PutUserDefinedFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.putUserDefinedFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDdosProtectionConfig` <a name="ResetDdosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDdosProtectionConfig"></a>

```go
func ResetDdosProtectionConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetRules"></a>

```go
func ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetType"></a>

```go
func ResetType()
```

##### `ResetUserDefinedFields` <a name="ResetUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.resetUserDefinedFields"></a>

```go
func ResetUserDefinedFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleComputeRegionSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleComputeRegionSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig">DdosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList">GoogleComputeRegionSecurityPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId">SelfLinkWithPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference">GoogleComputeRegionSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFields">UserDefinedFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfigInput">DdosProtectionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFieldsInput">UserDefinedFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DdosProtectionConfig`<sup>Required</sup> <a name="DdosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfig"></a>

```go
func DdosProtectionConfig() GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.rules"></a>

```go
func Rules() GoogleComputeRegionSecurityPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList">GoogleComputeRegionSecurityPolicyRulesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SelfLinkWithPolicyId`<sup>Required</sup> <a name="SelfLinkWithPolicyId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.selfLinkWithPolicyId"></a>

```go
func SelfLinkWithPolicyId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeouts"></a>

```go
func Timeouts() GoogleComputeRegionSecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference">GoogleComputeRegionSecurityPolicyTimeoutsOutputReference</a>

---

##### `UserDefinedFields`<sup>Required</sup> <a name="UserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFields"></a>

```go
func UserDefinedFields() GoogleComputeRegionSecurityPolicyUserDefinedFieldsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyUserDefinedFieldsList</a>

---

##### `DdosProtectionConfigInput`<sup>Optional</sup> <a name="DdosProtectionConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.ddosProtectionConfigInput"></a>

```go
func DdosProtectionConfigInput() GoogleComputeRegionSecurityPolicyDdosProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserDefinedFieldsInput`<sup>Optional</sup> <a name="UserDefinedFieldsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.userDefinedFieldsInput"></a>

```go
func UserDefinedFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionSecurityPolicyConfig <a name="GoogleComputeRegionSecurityPolicyConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DdosProtectionConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig,
	Description: *string,
	Id: *string,
	Project: *string,
	Region: *string,
	Rules: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts,
	Type: *string,
	UserDefinedFields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig">DdosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | ddos_protection_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created Region Security Policy should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.type">Type</a></code> | <code>*string</code> | The type indicates the intended use of the security policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.userDefinedFields">UserDefinedFields</a></code> | <code>interface{}</code> | user_defined_fields block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}

---

##### `DdosProtectionConfig`<sup>Optional</sup> <a name="DdosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig"></a>

```go
DdosProtectionConfig GoogleComputeRegionSecurityPolicyDdosProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

ddos_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#ddos_protection_config GoogleComputeRegionSecurityPolicy#ddos_protection_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#description GoogleComputeRegionSecurityPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#id GoogleComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#project GoogleComputeRegionSecurityPolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#region GoogleComputeRegionSecurityPolicy#region}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#rules GoogleComputeRegionSecurityPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeRegionSecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts">GoogleComputeRegionSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#timeouts GoogleComputeRegionSecurityPolicy#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type indicates the intended use of the security policy.

* CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
* CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
* CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
  This field can be set only at resource creation time. Possible values: ["CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#type GoogleComputeRegionSecurityPolicy#type}

---

##### `UserDefinedFields`<sup>Optional</sup> <a name="UserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyConfig.property.userDefinedFields"></a>

```go
UserDefinedFields interface{}
```

- *Type:* interface{}

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#user_defined_fields GoogleComputeRegionSecurityPolicy#user_defined_fields}

---

### GoogleComputeRegionSecurityPolicyDdosProtectionConfig <a name="GoogleComputeRegionSecurityPolicyDdosProtectionConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig {
	DdosProtection: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection">DdosProtection</a></code> | <code>*string</code> | Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses. |

---

##### `DdosProtection`<sup>Required</sup> <a name="DdosProtection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection"></a>

```go
DdosProtection *string
```

- *Type:* *string

Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.

* ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
* ADVANCED_PREVIEW: flag to enable the security policy in preview mode. Possible values: ["ADVANCED", "ADVANCED_PREVIEW", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#ddos_protection GoogleComputeRegionSecurityPolicy#ddos_protection}

---

### GoogleComputeRegionSecurityPolicyRules <a name="GoogleComputeRegionSecurityPolicyRules" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRules {
	Action: *string,
	Priority: *f64,
	Description: *string,
	Match: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch,
	NetworkMatch: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch,
	PreconfiguredWafConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig,
	Preview: interface{},
	RateLimitOptions: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.action">Action</a></code> | <code>*string</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.priority">Priority</a></code> | <code>*f64</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.networkMatch">NetworkMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | network_match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.preview">Preview</a></code> | <code>interface{}</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | rate_limit_options block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.
* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#action GoogleComputeRegionSecurityPolicy#action}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#priority GoogleComputeRegionSecurityPolicy#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#description GoogleComputeRegionSecurityPolicy#description}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.match"></a>

```go
Match GoogleComputeRegionSecurityPolicyRulesMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#match GoogleComputeRegionSecurityPolicy#match}

---

##### `NetworkMatch`<sup>Optional</sup> <a name="NetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.networkMatch"></a>

```go
NetworkMatch GoogleComputeRegionSecurityPolicyRulesNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

network_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#network_match GoogleComputeRegionSecurityPolicy#network_match}

---

##### `PreconfiguredWafConfig`<sup>Optional</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.preconfiguredWafConfig"></a>

```go
PreconfiguredWafConfig GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#preconfigured_waf_config GoogleComputeRegionSecurityPolicy#preconfigured_waf_config}

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.preview"></a>

```go
Preview interface{}
```

- *Type:* interface{}

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#preview GoogleComputeRegionSecurityPolicy#preview}

---

##### `RateLimitOptions`<sup>Optional</sup> <a name="RateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRules.property.rateLimitOptions"></a>

```go
RateLimitOptions GoogleComputeRegionSecurityPolicyRulesRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#rate_limit_options GoogleComputeRegionSecurityPolicy#rate_limit_options}

---

### GoogleComputeRegionSecurityPolicyRulesMatch <a name="GoogleComputeRegionSecurityPolicyRulesMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesMatch {
	Config: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig,
	Expr: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr,
	VersionedExpr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | Preconfigured versioned expression. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.config"></a>

```go
Config GoogleComputeRegionSecurityPolicyRulesMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#config GoogleComputeRegionSecurityPolicy#config}

---

##### `Expr`<sup>Optional</sup> <a name="Expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.expr"></a>

```go
Expr GoogleComputeRegionSecurityPolicyRulesMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#expr GoogleComputeRegionSecurityPolicy#expr}

---

##### `VersionedExpr`<sup>Optional</sup> <a name="VersionedExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch.property.versionedExpr"></a>

```go
VersionedExpr *string
```

- *Type:* *string

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#versioned_expr GoogleComputeRegionSecurityPolicy#versioned_expr}

---

### GoogleComputeRegionSecurityPolicyRulesMatchConfig <a name="GoogleComputeRegionSecurityPolicyRulesMatchConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig {
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#src_ip_ranges GoogleComputeRegionSecurityPolicy#src_ip_ranges}

---

### GoogleComputeRegionSecurityPolicyRulesMatchExpr <a name="GoogleComputeRegionSecurityPolicyRulesMatchExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#expression GoogleComputeRegionSecurityPolicy#expression}

---

### GoogleComputeRegionSecurityPolicyRulesNetworkMatch <a name="GoogleComputeRegionSecurityPolicyRulesNetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch {
	DestIpRanges: *[]*string,
	DestPorts: *[]*string,
	IpProtocols: *[]*string,
	SrcAsns: *[]*f64,
	SrcIpRanges: *[]*string,
	SrcPorts: *[]*string,
	SrcRegionCodes: *[]*string,
	UserDefinedFields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.destPorts">DestPorts</a></code> | <code>*[]*string</code> | Destination port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.ipProtocols">IpProtocols</a></code> | <code>*[]*string</code> | IPv4 protocol / IPv6 next header (after extension headers). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcAsns">SrcAsns</a></code> | <code>*[]*f64</code> | BGP Autonomous System Number associated with the source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcPorts">SrcPorts</a></code> | <code>*[]*string</code> | Source port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.userDefinedFields">UserDefinedFields</a></code> | <code>interface{}</code> | user_defined_fields block. |

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.destIpRanges"></a>

```go
DestIpRanges *[]*string
```

- *Type:* *[]*string

Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#dest_ip_ranges GoogleComputeRegionSecurityPolicy#dest_ip_ranges}

---

##### `DestPorts`<sup>Optional</sup> <a name="DestPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.destPorts"></a>

```go
DestPorts *[]*string
```

- *Type:* *[]*string

Destination port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#dest_ports GoogleComputeRegionSecurityPolicy#dest_ports}

---

##### `IpProtocols`<sup>Optional</sup> <a name="IpProtocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.ipProtocols"></a>

```go
IpProtocols *[]*string
```

- *Type:* *[]*string

IPv4 protocol / IPv6 next header (after extension headers).

Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#ip_protocols GoogleComputeRegionSecurityPolicy#ip_protocols}

---

##### `SrcAsns`<sup>Optional</sup> <a name="SrcAsns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcAsns"></a>

```go
SrcAsns *[]*f64
```

- *Type:* *[]*f64

BGP Autonomous System Number associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#src_asns GoogleComputeRegionSecurityPolicy#src_asns}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#src_ip_ranges GoogleComputeRegionSecurityPolicy#src_ip_ranges}

---

##### `SrcPorts`<sup>Optional</sup> <a name="SrcPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcPorts"></a>

```go
SrcPorts *[]*string
```

- *Type:* *[]*string

Source port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#src_ports GoogleComputeRegionSecurityPolicy#src_ports}

---

##### `SrcRegionCodes`<sup>Optional</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.srcRegionCodes"></a>

```go
SrcRegionCodes *[]*string
```

- *Type:* *[]*string

Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#src_region_codes GoogleComputeRegionSecurityPolicy#src_region_codes}

---

##### `UserDefinedFields`<sup>Optional</sup> <a name="UserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch.property.userDefinedFields"></a>

```go
UserDefinedFields interface{}
```

- *Type:* interface{}

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#user_defined_fields GoogleComputeRegionSecurityPolicy#user_defined_fields}

---

### GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields <a name="GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.name">Name</a></code> | <code>*string</code> | Name of the user-defined field, as given in the definition. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.values">Values</a></code> | <code>*[]*string</code> | Matching values of the field. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the user-defined field, as given in the definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Matching values of the field.

Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#values GoogleComputeRegionSecurityPolicy#values}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig {
	Exclusion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.property.exclusion">Exclusion</a></code> | <code>interface{}</code> | exclusion block. |

---

##### `Exclusion`<sup>Optional</sup> <a name="Exclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.property.exclusion"></a>

```go
Exclusion interface{}
```

- *Type:* interface{}

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#exclusion GoogleComputeRegionSecurityPolicy#exclusion}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion {
	TargetRuleSet: *string,
	RequestCookie: interface{},
	RequestHeader: interface{},
	RequestQueryParam: interface{},
	RequestUri: interface{},
	TargetRuleIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestCookie">RequestCookie</a></code> | <code>interface{}</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestHeader">RequestHeader</a></code> | <code>interface{}</code> | request_header block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestQueryParam">RequestQueryParam</a></code> | <code>interface{}</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestUri">RequestUri</a></code> | <code>interface{}</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```go
TargetRuleSet *string
```

- *Type:* *string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#target_rule_set GoogleComputeRegionSecurityPolicy#target_rule_set}

---

##### `RequestCookie`<sup>Optional</sup> <a name="RequestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestCookie"></a>

```go
RequestCookie interface{}
```

- *Type:* interface{}

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#request_cookie GoogleComputeRegionSecurityPolicy#request_cookie}

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestHeader"></a>

```go
RequestHeader interface{}
```

- *Type:* interface{}

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#request_header GoogleComputeRegionSecurityPolicy#request_header}

---

##### `RequestQueryParam`<sup>Optional</sup> <a name="RequestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```go
RequestQueryParam interface{}
```

- *Type:* interface{}

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#request_query_param GoogleComputeRegionSecurityPolicy#request_query_param}

---

##### `RequestUri`<sup>Optional</sup> <a name="RequestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestUri"></a>

```go
RequestUri interface{}
```

- *Type:* interface{}

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#request_uri GoogleComputeRegionSecurityPolicy#request_uri}

---

##### `TargetRuleIds`<sup>Optional</sup> <a name="TargetRuleIds" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```go
TargetRuleIds *[]*string
```

- *Type:* *[]*string

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#target_rule_ids GoogleComputeRegionSecurityPolicy#target_rule_ids}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}

---

### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#operator GoogleComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#value GoogleComputeRegionSecurityPolicy#value}

---

### GoogleComputeRegionSecurityPolicyRulesRateLimitOptions <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions {
	BanDurationSec: *f64,
	BanThreshold: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold,
	ConformAction: *string,
	EnforceOnKey: *string,
	EnforceOnKeyConfigs: interface{},
	EnforceOnKeyName: *string,
	ExceedAction: *string,
	RateLimitThreshold: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.conformAction">ConformAction</a></code> | <code>*string</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code>interface{}</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | rate_limit_threshold block. |

---

##### `BanDurationSec`<sup>Optional</sup> <a name="BanDurationSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.banDurationSec"></a>

```go
BanDurationSec *f64
```

- *Type:* *f64

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#ban_duration_sec GoogleComputeRegionSecurityPolicy#ban_duration_sec}

---

##### `BanThreshold`<sup>Optional</sup> <a name="BanThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.banThreshold"></a>

```go
BanThreshold GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#ban_threshold GoogleComputeRegionSecurityPolicy#ban_threshold}

---

##### `ConformAction`<sup>Optional</sup> <a name="ConformAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.conformAction"></a>

```go
ConformAction *string
```

- *Type:* *string

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#conform_action GoogleComputeRegionSecurityPolicy#conform_action}

---

##### `EnforceOnKey`<sup>Optional</sup> <a name="EnforceOnKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKey"></a>

```go
EnforceOnKey *string
```

- *Type:* *string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#enforce_on_key GoogleComputeRegionSecurityPolicy#enforce_on_key}

---

##### `EnforceOnKeyConfigs`<sup>Optional</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyConfigs"></a>

```go
EnforceOnKeyConfigs interface{}
```

- *Type:* interface{}

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#enforce_on_key_configs GoogleComputeRegionSecurityPolicy#enforce_on_key_configs}

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyName"></a>

```go
EnforceOnKeyName *string
```

- *Type:* *string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#enforce_on_key_name GoogleComputeRegionSecurityPolicy#enforce_on_key_name}

---

##### `ExceedAction`<sup>Optional</sup> <a name="ExceedAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.exceedAction"></a>

```go
ExceedAction *string
```

- *Type:* *string

Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#exceed_action GoogleComputeRegionSecurityPolicy#exceed_action}

---

##### `RateLimitThreshold`<sup>Optional</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions.property.rateLimitThreshold"></a>

```go
RateLimitThreshold GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#rate_limit_threshold GoogleComputeRegionSecurityPolicy#rate_limit_threshold}

---

### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold {
	Count: *f64,
	IntervalSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.count">Count</a></code> | <code>*f64</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#count GoogleComputeRegionSecurityPolicy#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.intervalSec"></a>

```go
IntervalSec *f64
```

- *Type:* *f64

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#interval_sec GoogleComputeRegionSecurityPolicy#interval_sec}

---

### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs {
	EnforceOnKeyName: *string,
	EnforceOnKeyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>*string</code> | Determines the key to enforce the rateLimitThreshold on. |

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```go
EnforceOnKeyName *string
```

- *Type:* *string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#enforce_on_key_name GoogleComputeRegionSecurityPolicy#enforce_on_key_name}

---

##### `EnforceOnKeyType`<sup>Optional</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

```go
EnforceOnKeyType *string
```

- *Type:* *string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKeyConfigs" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#enforce_on_key_type GoogleComputeRegionSecurityPolicy#enforce_on_key_type}

---

### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold {
	Count: *f64,
	IntervalSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.count">Count</a></code> | <code>*f64</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#count GoogleComputeRegionSecurityPolicy#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.intervalSec"></a>

```go
IntervalSec *f64
```

- *Type:* *f64

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#interval_sec GoogleComputeRegionSecurityPolicy#interval_sec}

---

### GoogleComputeRegionSecurityPolicyTimeouts <a name="GoogleComputeRegionSecurityPolicyTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#create GoogleComputeRegionSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#delete GoogleComputeRegionSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#update GoogleComputeRegionSecurityPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#create GoogleComputeRegionSecurityPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#delete GoogleComputeRegionSecurityPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#update GoogleComputeRegionSecurityPolicy#update}.

---

### GoogleComputeRegionSecurityPolicyUserDefinedFields <a name="GoogleComputeRegionSecurityPolicyUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

&googlecomputeregionsecuritypolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields {
	Base: *string,
	Mask: *string,
	Name: *string,
	Offset: *f64,
	Size: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.base">Base</a></code> | <code>*string</code> | The base relative to which 'offset' is measured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.mask">Mask</a></code> | <code>*string</code> | If specified, apply this mask (bitwise AND) to the field to ignore bits before matching. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.name">Name</a></code> | <code>*string</code> | The name of this field. Must be unique within the policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.offset">Offset</a></code> | <code>*f64</code> | Offset of the first byte of the field (in network byte order) relative to 'base'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.size">Size</a></code> | <code>*f64</code> | Size of the field in bytes. Valid values: 1-4. |

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.base"></a>

```go
Base *string
```

- *Type:* *string

The base relative to which 'offset' is measured.

Possible values are:

* IPV4: Points to the beginning of the IPv4 header.
* IPV6: Points to the beginning of the IPv6 header.
* TCP: Points to the beginning of the TCP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
* UDP: Points to the beginning of the UDP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments. Possible values: ["IPV4", "IPV6", "TCP", "UDP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#base GoogleComputeRegionSecurityPolicy#base}

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.mask"></a>

```go
Mask *string
```

- *Type:* *string

If specified, apply this mask (bitwise AND) to the field to ignore bits before matching.

Encoded as a hexadecimal number (starting with "0x").
The last byte of the field (in network byte order) corresponds to the least significant byte of the mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#mask GoogleComputeRegionSecurityPolicy#mask}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this field. Must be unique within the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#name GoogleComputeRegionSecurityPolicy#name}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Offset of the first byte of the field (in network byte order) relative to 'base'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#offset GoogleComputeRegionSecurityPolicy#offset}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFields.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Size of the field in bytes. Valid values: 1-4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_compute_region_security_policy#size GoogleComputeRegionSecurityPolicy#size}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference <a name="GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput">DdosProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection">DdosProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DdosProtectionInput`<sup>Optional</sup> <a name="DdosProtectionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput"></a>

```go
func DdosProtectionInput() *string
```

- *Type:* *string

---

##### `DdosProtection`<sup>Required</sup> <a name="DdosProtection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection"></a>

```go
func DdosProtection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionSecurityPolicyDdosProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyDdosProtectionConfig">GoogleComputeRegionSecurityPolicyDdosProtectionConfig</a>

---


### GoogleComputeRegionSecurityPolicyRulesList <a name="GoogleComputeRegionSecurityPolicyRulesList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionSecurityPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionSecurityPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionSecurityPolicyRulesMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

---


### GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionSecurityPolicyRulesMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

---


### GoogleComputeRegionSecurityPolicyRulesMatchOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionSecurityPolicyRulesMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr">PutExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetExpr">ResetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetVersionedExpr">ResetVersionedExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig"></a>

```go
func PutConfig(value GoogleComputeRegionSecurityPolicyRulesMatchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

---

##### `PutExpr` <a name="PutExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr"></a>

```go
func PutExpr(value GoogleComputeRegionSecurityPolicyRulesMatchExpr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetExpr` <a name="ResetExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetExpr"></a>

```go
func ResetExpr()
```

##### `ResetVersionedExpr` <a name="ResetVersionedExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.resetVersionedExpr"></a>

```go
func ResetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExprInput">VersionedExprInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.config"></a>

```go
func Config() GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchConfigOutputReference</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr"></a>

```go
func Expr() GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchExprOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.configInput"></a>

```go
func ConfigInput() GoogleComputeRegionSecurityPolicyRulesMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchConfig">GoogleComputeRegionSecurityPolicyRulesMatchConfig</a>

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.exprInput"></a>

```go
func ExprInput() GoogleComputeRegionSecurityPolicyRulesMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchExpr">GoogleComputeRegionSecurityPolicyRulesMatchExpr</a>

---

##### `VersionedExprInput`<sup>Optional</sup> <a name="VersionedExprInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExprInput"></a>

```go
func VersionedExprInput() *string
```

- *Type:* *string

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr"></a>

```go
func VersionedExpr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionSecurityPolicyRulesMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a>

---


### GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields">PutUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestPorts">ResetDestPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetIpProtocols">ResetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcAsns">ResetSrcAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcPorts">ResetSrcPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcRegionCodes">ResetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetUserDefinedFields">ResetUserDefinedFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUserDefinedFields` <a name="PutUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields"></a>

```go
func PutUserDefinedFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestIpRanges"></a>

```go
func ResetDestIpRanges()
```

##### `ResetDestPorts` <a name="ResetDestPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestPorts"></a>

```go
func ResetDestPorts()
```

##### `ResetIpProtocols` <a name="ResetIpProtocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetIpProtocols"></a>

```go
func ResetIpProtocols()
```

##### `ResetSrcAsns` <a name="ResetSrcAsns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcAsns"></a>

```go
func ResetSrcAsns()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```

##### `ResetSrcPorts` <a name="ResetSrcPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcPorts"></a>

```go
func ResetSrcPorts()
```

##### `ResetSrcRegionCodes` <a name="ResetSrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcRegionCodes"></a>

```go
func ResetSrcRegionCodes()
```

##### `ResetUserDefinedFields` <a name="ResetUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetUserDefinedFields"></a>

```go
func ResetUserDefinedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields">UserDefinedFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPortsInput">DestPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocolsInput">IpProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsnsInput">SrcAsnsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPortsInput">SrcPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodesInput">SrcRegionCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFieldsInput">UserDefinedFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts">DestPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols">IpProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns">SrcAsns</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts">SrcPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UserDefinedFields`<sup>Required</sup> <a name="UserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields"></a>

```go
func UserDefinedFields() GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a>

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRangesInput"></a>

```go
func DestIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestPortsInput`<sup>Optional</sup> <a name="DestPortsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPortsInput"></a>

```go
func DestPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocolsInput`<sup>Optional</sup> <a name="IpProtocolsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocolsInput"></a>

```go
func IpProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcAsnsInput`<sup>Optional</sup> <a name="SrcAsnsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsnsInput"></a>

```go
func SrcAsnsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcPortsInput`<sup>Optional</sup> <a name="SrcPortsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPortsInput"></a>

```go
func SrcPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcRegionCodesInput`<sup>Optional</sup> <a name="SrcRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodesInput"></a>

```go
func SrcRegionCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserDefinedFieldsInput`<sup>Optional</sup> <a name="UserDefinedFieldsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFieldsInput"></a>

```go
func UserDefinedFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges"></a>

```go
func DestIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `DestPorts`<sup>Required</sup> <a name="DestPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts"></a>

```go
func DestPorts() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocols`<sup>Required</sup> <a name="IpProtocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols"></a>

```go
func IpProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `SrcAsns`<sup>Required</sup> <a name="SrcAsns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns"></a>

```go
func SrcAsns() *[]*f64
```

- *Type:* *[]*f64

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SrcPorts`<sup>Required</sup> <a name="SrcPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts"></a>

```go
func SrcPorts() *[]*string
```

- *Type:* *[]*string

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes"></a>

```go
func SrcRegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionSecurityPolicyRulesNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

---


### GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList <a name="GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionSecurityPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch">PutNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig">PutPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions">PutRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetNetworkMatch">ResetNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetPreconfiguredWafConfig">ResetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetRateLimitOptions">ResetRateLimitOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putMatch"></a>

```go
func PutMatch(value GoogleComputeRegionSecurityPolicyRulesMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a>

---

##### `PutNetworkMatch` <a name="PutNetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch"></a>

```go
func PutNetworkMatch(value GoogleComputeRegionSecurityPolicyRulesNetworkMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

---

##### `PutPreconfiguredWafConfig` <a name="PutPreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig"></a>

```go
func PutPreconfiguredWafConfig(value GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---

##### `PutRateLimitOptions` <a name="PutRateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions"></a>

```go
func PutRateLimitOptions(value GoogleComputeRegionSecurityPolicyRulesRateLimitOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetNetworkMatch` <a name="ResetNetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetNetworkMatch"></a>

```go
func ResetNetworkMatch()
```

##### `ResetPreconfiguredWafConfig` <a name="ResetPreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetPreconfiguredWafConfig"></a>

```go
func ResetPreconfiguredWafConfig()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetPreview"></a>

```go
func ResetPreview()
```

##### `ResetRateLimitOptions` <a name="ResetRateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.resetRateLimitOptions"></a>

```go
func ResetRateLimitOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch">NetworkMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference">GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatchInput">NetworkMatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfigInput">PreconfiguredWafConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.previewInput">PreviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptionsInput">RateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preview">Preview</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.match"></a>

```go
func Match() GoogleComputeRegionSecurityPolicyRulesMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatchOutputReference">GoogleComputeRegionSecurityPolicyRulesMatchOutputReference</a>

---

##### `NetworkMatch`<sup>Required</sup> <a name="NetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch"></a>

```go
func NetworkMatch() GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference">GoogleComputeRegionSecurityPolicyRulesNetworkMatchOutputReference</a>

---

##### `PreconfiguredWafConfig`<sup>Required</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig"></a>

```go
func PreconfiguredWafConfig() GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference</a>

---

##### `RateLimitOptions`<sup>Required</sup> <a name="RateLimitOptions" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions"></a>

```go
func RateLimitOptions() GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.matchInput"></a>

```go
func MatchInput() GoogleComputeRegionSecurityPolicyRulesMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesMatch">GoogleComputeRegionSecurityPolicyRulesMatch</a>

---

##### `NetworkMatchInput`<sup>Optional</sup> <a name="NetworkMatchInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.networkMatchInput"></a>

```go
func NetworkMatchInput() GoogleComputeRegionSecurityPolicyRulesNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesNetworkMatch">GoogleComputeRegionSecurityPolicyRulesNetworkMatch</a>

---

##### `PreconfiguredWafConfigInput`<sup>Optional</sup> <a name="PreconfiguredWafConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfigInput"></a>

```go
func PreconfiguredWafConfigInput() GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.previewInput"></a>

```go
func PreviewInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RateLimitOptionsInput`<sup>Optional</sup> <a name="RateLimitOptionsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptionsInput"></a>

```go
func RateLimitOptionsInput() GoogleComputeRegionSecurityPolicyRulesRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.preview"></a>

```go
func Preview() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie">PutRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">PutRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri">PutRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">ResetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">ResetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestUri">ResetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">ResetTargetRuleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestCookie` <a name="PutRequestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```go
func PutRequestCookie(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```go
func PutRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestQueryParam` <a name="PutRequestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```go
func PutRequestQueryParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestUri` <a name="PutRequestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```go
func PutRequestUri(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestCookie` <a name="ResetRequestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```go
func ResetRequestCookie()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```go
func ResetRequestHeader()
```

##### `ResetRequestQueryParam` <a name="ResetRequestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```go
func ResetRequestQueryParam()
```

##### `ResetRequestUri` <a name="ResetRequestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```go
func ResetRequestUri()
```

##### `ResetTargetRuleIds` <a name="ResetTargetRuleIds" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```go
func ResetTargetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie">RequestCookie</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">RequestQueryParam</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri">RequestUri</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">RequestCookieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">RequestQueryParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">RequestUriInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">TargetRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">TargetRuleSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestCookie`<sup>Required</sup> <a name="RequestCookie" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```go
func RequestCookie() GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```go
func RequestHeader() GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `RequestQueryParam`<sup>Required</sup> <a name="RequestQueryParam" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```go
func RequestQueryParam() GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```go
func RequestUri() GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `RequestCookieInput`<sup>Optional</sup> <a name="RequestCookieInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```go
func RequestCookieInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```go
func RequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RequestQueryParamInput`<sup>Optional</sup> <a name="RequestQueryParamInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```go
func RequestQueryParamInput() interface{}
```

- *Type:* interface{}

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```go
func RequestUriInput() interface{}
```

- *Type:* interface{}

---

##### `TargetRuleIdsInput`<sup>Optional</sup> <a name="TargetRuleIdsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```go
func TargetRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSetInput`<sup>Optional</sup> <a name="TargetRuleSetInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```go
func TargetRuleSetInput() *string
```

- *Type:* *string

---

##### `TargetRuleIds`<sup>Required</sup> <a name="TargetRuleIds" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```go
func TargetRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```go
func TargetRuleSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion">PutExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resetExclusion">ResetExclusion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusion` <a name="PutExclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion"></a>

```go
func PutExclusion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclusion` <a name="ResetExclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resetExclusion"></a>

```go
func ResetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusionInput">ExclusionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion"></a>

```go
func Exclusion() GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a>

---

##### `ExclusionInput`<sup>Optional</sup> <a name="ExclusionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```go
func ExclusionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">GoogleComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---


### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetIntervalSec"></a>

```go
func ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput"></a>

```go
func IntervalSecInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---


### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">ResetEnforceOnKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```go
func ResetEnforceOnKeyName()
```

##### `ResetEnforceOnKeyType` <a name="ResetEnforceOnKeyType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```go
func ResetEnforceOnKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">EnforceOnKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```go
func EnforceOnKeyNameInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyTypeInput`<sup>Optional</sup> <a name="EnforceOnKeyTypeInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```go
func EnforceOnKeyTypeInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `EnforceOnKeyType`<sup>Required</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```go
func EnforceOnKeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold">PutBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs">PutEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold">PutRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanDurationSec">ResetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanThreshold">ResetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetConformAction">ResetConformAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKey">ResetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs">ResetEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetExceedAction">ResetExceedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetRateLimitThreshold">ResetRateLimitThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBanThreshold` <a name="PutBanThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold"></a>

```go
func PutBanThreshold(value GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---

##### `PutEnforceOnKeyConfigs` <a name="PutEnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs"></a>

```go
func PutEnforceOnKeyConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRateLimitThreshold` <a name="PutRateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold"></a>

```go
func PutRateLimitThreshold(value GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---

##### `ResetBanDurationSec` <a name="ResetBanDurationSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanDurationSec"></a>

```go
func ResetBanDurationSec()
```

##### `ResetBanThreshold` <a name="ResetBanThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanThreshold"></a>

```go
func ResetBanThreshold()
```

##### `ResetConformAction` <a name="ResetConformAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetConformAction"></a>

```go
func ResetConformAction()
```

##### `ResetEnforceOnKey` <a name="ResetEnforceOnKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKey"></a>

```go
func ResetEnforceOnKey()
```

##### `ResetEnforceOnKeyConfigs` <a name="ResetEnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs"></a>

```go
func ResetEnforceOnKeyConfigs()
```

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyName"></a>

```go
func ResetEnforceOnKeyName()
```

##### `ResetExceedAction` <a name="ResetExceedAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetExceedAction"></a>

```go
func ResetExceedAction()
```

##### `ResetRateLimitThreshold` <a name="ResetRateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetRateLimitThreshold"></a>

```go
func ResetRateLimitThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSecInput">BanDurationSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThresholdInput">BanThresholdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformActionInput">ConformActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput">EnforceOnKeyConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyInput">EnforceOnKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedActionInput">ExceedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThresholdInput">RateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction">ConformAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BanThreshold`<sup>Required</sup> <a name="BanThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold"></a>

```go
func BanThreshold() GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference</a>

---

##### `EnforceOnKeyConfigs`<sup>Required</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```go
func EnforceOnKeyConfigs() GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```go
func RateLimitThreshold() GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference</a>

---

##### `BanDurationSecInput`<sup>Optional</sup> <a name="BanDurationSecInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSecInput"></a>

```go
func BanDurationSecInput() *f64
```

- *Type:* *f64

---

##### `BanThresholdInput`<sup>Optional</sup> <a name="BanThresholdInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThresholdInput"></a>

```go
func BanThresholdInput() GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---

##### `ConformActionInput`<sup>Optional</sup> <a name="ConformActionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformActionInput"></a>

```go
func ConformActionInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyConfigsInput`<sup>Optional</sup> <a name="EnforceOnKeyConfigsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput"></a>

```go
func EnforceOnKeyConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceOnKeyInput`<sup>Optional</sup> <a name="EnforceOnKeyInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyInput"></a>

```go
func EnforceOnKeyInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyNameInput"></a>

```go
func EnforceOnKeyNameInput() *string
```

- *Type:* *string

---

##### `ExceedActionInput`<sup>Optional</sup> <a name="ExceedActionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedActionInput"></a>

```go
func ExceedActionInput() *string
```

- *Type:* *string

---

##### `RateLimitThresholdInput`<sup>Optional</sup> <a name="RateLimitThresholdInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThresholdInput"></a>

```go
func RateLimitThresholdInput() GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---

##### `BanDurationSec`<sup>Required</sup> <a name="BanDurationSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec"></a>

```go
func BanDurationSec() *f64
```

- *Type:* *f64

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction"></a>

```go
func ConformAction() *string
```

- *Type:* *string

---

##### `EnforceOnKey`<sup>Required</sup> <a name="EnforceOnKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```go
func EnforceOnKey() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction"></a>

```go
func ExceedAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionSecurityPolicyRulesRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptions">GoogleComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---


### GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference <a name="GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec"></a>

```go
func ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput"></a>

```go
func IntervalSecInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">GoogleComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---


### GoogleComputeRegionSecurityPolicyTimeoutsOutputReference <a name="GoogleComputeRegionSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeRegionSecurityPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyUserDefinedFieldsList <a name="GoogleComputeRegionSecurityPolicyUserDefinedFieldsList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyUserDefinedFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleComputeRegionSecurityPolicyUserDefinedFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get"></a>

```go
func Get(index *f64) GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference <a name="GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecomputeregionsecuritypolicy"

googlecomputeregionsecuritypolicy.NewGoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask"></a>

```go
func ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize"></a>

```go
func ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput">BaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput">MaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base">Base</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask">Mask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput"></a>

```go
func BaseInput() *string
```

- *Type:* *string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput"></a>

```go
func MaskInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base"></a>

```go
func Base() *string
```

- *Type:* *string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask"></a>

```go
func Mask() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicy.GoogleComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



