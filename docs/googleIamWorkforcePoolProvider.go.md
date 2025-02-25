# `googleIamWorkforcePoolProvider` Submodule <a name="`googleIamWorkforcePoolProvider` Submodule" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePoolProvider <a name="GoogleIamWorkforcePoolProvider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider google_iam_workforce_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProvider(scope Construct, id *string, config GoogleIamWorkforcePoolProviderConfig) GoogleIamWorkforcePoolProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig">GoogleIamWorkforcePoolProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig">GoogleIamWorkforcePoolProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putExtraAttributesOauth2Client">PutExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putOidc">PutOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetAttributeCondition">ResetAttributeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetAttributeMapping">ResetAttributeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetExtraAttributesOauth2Client">ResetExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetOidc">ResetOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExtraAttributesOauth2Client` <a name="PutExtraAttributesOauth2Client" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putExtraAttributesOauth2Client"></a>

```go
func PutExtraAttributesOauth2Client(value GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putExtraAttributesOauth2Client.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---

##### `PutOidc` <a name="PutOidc" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putOidc"></a>

```go
func PutOidc(value GoogleIamWorkforcePoolProviderOidc)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a>

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putSaml"></a>

```go
func PutSaml(value GoogleIamWorkforcePoolProviderSaml)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putTimeouts"></a>

```go
func PutTimeouts(value GoogleIamWorkforcePoolProviderTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts">GoogleIamWorkforcePoolProviderTimeouts</a>

---

##### `ResetAttributeCondition` <a name="ResetAttributeCondition" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetAttributeCondition"></a>

```go
func ResetAttributeCondition()
```

##### `ResetAttributeMapping` <a name="ResetAttributeMapping" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetAttributeMapping"></a>

```go
func ResetAttributeMapping()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExtraAttributesOauth2Client` <a name="ResetExtraAttributesOauth2Client" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetExtraAttributesOauth2Client"></a>

```go
func ResetExtraAttributesOauth2Client()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetId"></a>

```go
func ResetId()
```

##### `ResetOidc` <a name="ResetOidc" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetOidc"></a>

```go
func ResetOidc()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetSaml"></a>

```go
func ResetSaml()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkforcePoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoogleIamWorkforcePoolProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoogleIamWorkforcePoolProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoogleIamWorkforcePoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.extraAttributesOauth2Client">ExtraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference">GoogleIamWorkforcePoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference">GoogleIamWorkforcePoolProviderSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference">GoogleIamWorkforcePoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeConditionInput">AttributeConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeMappingInput">AttributeMappingInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.extraAttributesOauth2ClientInput">ExtraAttributesOauth2ClientInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.oidcInput">OidcInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.providerIdInput">ProviderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.samlInput">SamlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.workforcePoolIdInput">WorkforcePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeCondition">AttributeCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeMapping">AttributeMapping</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.providerId">ProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.workforcePoolId">WorkforcePoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExtraAttributesOauth2Client`<sup>Required</sup> <a name="ExtraAttributesOauth2Client" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.extraAttributesOauth2Client"></a>

```go
func ExtraAttributesOauth2Client() GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.oidc"></a>

```go
func Oidc() GoogleIamWorkforcePoolProviderOidcOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference">GoogleIamWorkforcePoolProviderOidcOutputReference</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.saml"></a>

```go
func Saml() GoogleIamWorkforcePoolProviderSamlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference">GoogleIamWorkforcePoolProviderSamlOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.timeouts"></a>

```go
func Timeouts() GoogleIamWorkforcePoolProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference">GoogleIamWorkforcePoolProviderTimeoutsOutputReference</a>

---

##### `AttributeConditionInput`<sup>Optional</sup> <a name="AttributeConditionInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeConditionInput"></a>

```go
func AttributeConditionInput() *string
```

- *Type:* *string

---

##### `AttributeMappingInput`<sup>Optional</sup> <a name="AttributeMappingInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeMappingInput"></a>

```go
func AttributeMappingInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExtraAttributesOauth2ClientInput`<sup>Optional</sup> <a name="ExtraAttributesOauth2ClientInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.extraAttributesOauth2ClientInput"></a>

```go
func ExtraAttributesOauth2ClientInput() GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `OidcInput`<sup>Optional</sup> <a name="OidcInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.oidcInput"></a>

```go
func OidcInput() GoogleIamWorkforcePoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a>

---

##### `ProviderIdInput`<sup>Optional</sup> <a name="ProviderIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.providerIdInput"></a>

```go
func ProviderIdInput() *string
```

- *Type:* *string

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.samlInput"></a>

```go
func SamlInput() GoogleIamWorkforcePoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkforcePoolIdInput`<sup>Optional</sup> <a name="WorkforcePoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.workforcePoolIdInput"></a>

```go
func WorkforcePoolIdInput() *string
```

- *Type:* *string

---

##### `AttributeCondition`<sup>Required</sup> <a name="AttributeCondition" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeCondition"></a>

```go
func AttributeCondition() *string
```

- *Type:* *string

---

##### `AttributeMapping`<sup>Required</sup> <a name="AttributeMapping" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeMapping"></a>

```go
func AttributeMapping() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.providerId"></a>

```go
func ProviderId() *string
```

- *Type:* *string

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.workforcePoolId"></a>

```go
func WorkforcePoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolProviderConfig <a name="GoogleIamWorkforcePoolProviderConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	ProviderId: *string,
	WorkforcePoolId: *string,
	AttributeCondition: *string,
	AttributeMapping: *map[string]*string,
	Description: *string,
	Disabled: interface{},
	DisplayName: *string,
	ExtraAttributesOauth2Client: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client,
	Id: *string,
	Oidc: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc,
	Saml: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.providerId">ProviderId</a></code> | <code>*string</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.workforcePoolId">WorkforcePoolId</a></code> | <code>*string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.attributeCondition">AttributeCondition</a></code> | <code>*string</code> | A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.attributeMapping">AttributeMapping</a></code> | <code>*map[string]*string</code> | Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.description">Description</a></code> | <code>*string</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | A user-specified display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.extraAttributesOauth2Client">ExtraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | extra_attributes_oauth2_client block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#id GoogleIamWorkforcePoolProvider#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.oidc">Oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts">GoogleIamWorkforcePoolProviderTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#location GoogleIamWorkforcePoolProvider#location}

---

##### `ProviderId`<sup>Required</sup> <a name="ProviderId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.providerId"></a>

```go
ProviderId *string
```

- *Type:* *string

The ID for the provider, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#provider_id GoogleIamWorkforcePoolProvider#provider_id}

---

##### `WorkforcePoolId`<sup>Required</sup> <a name="WorkforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.workforcePoolId"></a>

```go
WorkforcePoolId *string
```

- *Type:* *string

The ID to use for the pool, which becomes the final component of the resource name.

The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#workforce_pool_id GoogleIamWorkforcePoolProvider#workforce_pool_id}

---

##### `AttributeCondition`<sup>Optional</sup> <a name="AttributeCondition" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.attributeCondition"></a>

```go
AttributeCondition *string
```

- *Type:* *string

A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:

* 'assertion': JSON representing the authentication credential issued by the provider.
* 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
  'google.profile_photo' and 'google.display_name' are not supported.
* 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters.
If unspecified, all valid authentication credentials will be accepted.

The following example shows how to only allow credentials with a mapped 'google.groups' value of 'admins':

```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#attribute_condition GoogleIamWorkforcePoolProvider#attribute_condition}

---

##### `AttributeMapping`<sup>Optional</sup> <a name="AttributeMapping" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.attributeMapping"></a>

```go
AttributeMapping *map[string]*string
```

- *Type:* *map[string]*string

Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:

* 'google.subject': The principal IAM is authenticating. You can reference this value in IAM bindings.
  This is also the subject that appears in Cloud Logging logs. This is a required field and
  the mapped subject cannot exceed 127 bytes.
* 'google.groups': Groups the authenticating user belongs to. You can grant groups access to
  resources using an IAM 'principalSet' binding; access applies to all members of the group.
* 'google.display_name': The name of the authenticated user. This is an optional field and
  the mapped display name cannot exceed 100 bytes. If not set, 'google.subject' will be displayed instead.
  This attribute cannot be referenced in IAM bindings.
* 'google.profile_photo': The URL that specifies the authenticated user's thumbnail photo.
  This is an optional field. When set, the image will be visible as the user's profile picture.
  If not set, a generic user icon will be displayed instead.
  This attribute cannot be referenced in IAM bindings.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}', where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:

* 'google.subject':
  'principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}'
* 'google.groups':
  'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}'
* 'attribute.{custom_attribute}':
  'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For OIDC providers, you must supply a custom mapping that includes the 'google.subject' attribute.
For example, the following maps the sub claim of the incoming credential to the 'subject' attribute
on a Google token:

```
{"google.subject": "assertion.sub"}
```

An object containing a list of '"key": value' pairs.
Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#attribute_mapping GoogleIamWorkforcePoolProvider#attribute_mapping}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#description GoogleIamWorkforcePoolProvider#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#disabled GoogleIamWorkforcePoolProvider#disabled}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

A user-specified display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#display_name GoogleIamWorkforcePoolProvider#display_name}

---

##### `ExtraAttributesOauth2Client`<sup>Optional</sup> <a name="ExtraAttributesOauth2Client" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.extraAttributesOauth2Client"></a>

```go
ExtraAttributesOauth2Client GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a>

extra_attributes_oauth2_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#extra_attributes_oauth2_client GoogleIamWorkforcePoolProvider#extra_attributes_oauth2_client}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#id GoogleIamWorkforcePoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Oidc`<sup>Optional</sup> <a name="Oidc" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.oidc"></a>

```go
Oidc GoogleIamWorkforcePoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#oidc GoogleIamWorkforcePoolProvider#oidc}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.saml"></a>

```go
Saml GoogleIamWorkforcePoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#saml GoogleIamWorkforcePoolProvider#saml}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.timeouts"></a>

```go
Timeouts GoogleIamWorkforcePoolProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts">GoogleIamWorkforcePoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#timeouts GoogleIamWorkforcePoolProvider#timeouts}

---

### GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client {
	AttributesType: *string,
	ClientId: *string,
	ClientSecret: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret,
	IssuerUri: *string,
	QueryParameters: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.attributesType">AttributesType</a></code> | <code>*string</code> | Represents the IdP and type of claims that should be fetched. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientId">ClientId</a></code> | <code>*string</code> | The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | client_secret block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | The OIDC identity provider's issuer URI. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.queryParameters">QueryParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | query_parameters block. |

---

##### `AttributesType`<sup>Required</sup> <a name="AttributesType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.attributesType"></a>

```go
AttributesType *string
```

- *Type:* *string

Represents the IdP and type of claims that should be fetched.

* AZURE_AD_GROUPS_MAIL: Used to get the user's group claims from the Azure AD identity provider using configuration provided
  in ExtraAttributesOAuth2Client and 'mail' property of the 'microsoft.graph.group' object is used for claim mapping.
  See https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties for more details on
  'microsoft.graph.group' properties. The attributes obtained from idntity provider are mapped to 'assertion.groups'. Possible values: ["AZURE_AD_GROUPS_MAIL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#attributes_type GoogleIamWorkforcePoolProvider#attributes_type}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#client_id GoogleIamWorkforcePoolProvider#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientSecret"></a>

```go
ClientSecret GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#client_secret GoogleIamWorkforcePoolProvider#client_secret}

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.issuerUri"></a>

```go
IssuerUri *string
```

- *Type:* *string

The OIDC identity provider's issuer URI.

Must be a valid URI using the 'https' scheme. Required to get the OIDC discovery document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#issuer_uri GoogleIamWorkforcePoolProvider#issuer_uri}

---

##### `QueryParameters`<sup>Optional</sup> <a name="QueryParameters" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.queryParameters"></a>

```go
QueryParameters GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

query_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#query_parameters GoogleIamWorkforcePoolProvider#query_parameters}

---

### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret {
	Value: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | value block. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.property.value"></a>

```go
Value GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#value GoogleIamWorkforcePoolProvider#value}

---

### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue {
	PlainText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.property.plainText">PlainText</a></code> | <code>*string</code> | The plain text of the client secret value. |

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.property.plainText"></a>

```go
PlainText *string
```

- *Type:* *string

The plain text of the client secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#plain_text GoogleIamWorkforcePoolProvider#plain_text}

---

### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters {
	Filter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.property.filter">Filter</a></code> | <code>*string</code> | The filter used to request specific records from IdP. |

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

The filter used to request specific records from IdP.

In case of attributes type as AZURE_AD_GROUPS_MAIL, it represents the
filter used to request specific groups for users from IdP. By default, all of the groups associated with the user are fetched. The
groups should be mail enabled and security enabled. See https://learn.microsoft.com/en-us/graph/search-query-parameter for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#filter GoogleIamWorkforcePoolProvider#filter}

---

### GoogleIamWorkforcePoolProviderOidc <a name="GoogleIamWorkforcePoolProviderOidc" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderOidc {
	ClientId: *string,
	IssuerUri: *string,
	ClientSecret: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret,
	JwksJson: *string,
	WebSsoConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID. Must match the audience claim of the JWT issued by the identity provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | The OIDC issuer URI. Must be a valid URI using the 'https' scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a></code> | client_secret block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.jwksJson">JwksJson</a></code> | <code>*string</code> | OIDC JWKs in JSON String format. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.webSsoConfig">WebSsoConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a></code> | web_sso_config block. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID. Must match the audience claim of the JWT issued by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#client_id GoogleIamWorkforcePoolProvider#client_id}

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.issuerUri"></a>

```go
IssuerUri *string
```

- *Type:* *string

The OIDC issuer URI. Must be a valid URI using the 'https' scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#issuer_uri GoogleIamWorkforcePoolProvider#issuer_uri}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.clientSecret"></a>

```go
ClientSecret GoogleIamWorkforcePoolProviderOidcClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#client_secret GoogleIamWorkforcePoolProvider#client_secret}

---

##### `JwksJson`<sup>Optional</sup> <a name="JwksJson" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.jwksJson"></a>

```go
JwksJson *string
```

- *Type:* *string

OIDC JWKs in JSON String format.

For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the 'jwks_uri' from the discovery document fetched from the
.well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:

```
{
  "keys": [
    {
          "kty": "RSA/EC",
          "alg": "<algorithm>",
          "use": "sig",
          "kid": "<key-id>",
          "n": "",
          "e": "",
          "x": "",
          "y": "",
          "crv": ""
    }
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#jwks_json GoogleIamWorkforcePoolProvider#jwks_json}

---

##### `WebSsoConfig`<sup>Optional</sup> <a name="WebSsoConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.webSsoConfig"></a>

```go
WebSsoConfig GoogleIamWorkforcePoolProviderOidcWebSsoConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a>

web_sso_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#web_sso_config GoogleIamWorkforcePoolProvider#web_sso_config}

---

### GoogleIamWorkforcePoolProviderOidcClientSecret <a name="GoogleIamWorkforcePoolProviderOidcClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderOidcClientSecret {
	Value: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a></code> | value block. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret.property.value"></a>

```go
Value GoogleIamWorkforcePoolProviderOidcClientSecretValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#value GoogleIamWorkforcePoolProvider#value}

---

### GoogleIamWorkforcePoolProviderOidcClientSecretValue <a name="GoogleIamWorkforcePoolProviderOidcClientSecretValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderOidcClientSecretValue {
	PlainText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue.property.plainText">PlainText</a></code> | <code>*string</code> | The plain text of the client secret value. |

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue.property.plainText"></a>

```go
PlainText *string
```

- *Type:* *string

The plain text of the client secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#plain_text GoogleIamWorkforcePoolProvider#plain_text}

---

### GoogleIamWorkforcePoolProviderOidcWebSsoConfig <a name="GoogleIamWorkforcePoolProviderOidcWebSsoConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig {
	AssertionClaimsBehavior: *string,
	ResponseType: *string,
	AdditionalScopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior">AssertionClaimsBehavior</a></code> | <code>*string</code> | The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.responseType">ResponseType</a></code> | <code>*string</code> | The Response Type to request for in the OIDC Authorization Request for web sign-in. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.additionalScopes">AdditionalScopes</a></code> | <code>*[]*string</code> | Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. |

---

##### `AssertionClaimsBehavior`<sup>Required</sup> <a name="AssertionClaimsBehavior" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior"></a>

```go
AssertionClaimsBehavior *string
```

- *Type:* *string

The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition.

* MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS: Merge the UserInfo Endpoint Claims with ID Token Claims, preferring UserInfo Claim Values for the same Claim Name. This option is available only for the Authorization Code Flow.
* ONLY_ID_TOKEN_CLAIMS: Only include ID Token Claims. Possible values: ["MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS", "ONLY_ID_TOKEN_CLAIMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#assertion_claims_behavior GoogleIamWorkforcePoolProvider#assertion_claims_behavior}

---

##### `ResponseType`<sup>Required</sup> <a name="ResponseType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.responseType"></a>

```go
ResponseType *string
```

- *Type:* *string

The Response Type to request for in the OIDC Authorization Request for web sign-in.

The 'CODE' Response Type is recommended to avoid the Implicit Flow, for security reasons.

* CODE: The 'response_type=code' selection uses the Authorization Code Flow for web sign-in. Requires a configured client secret.
* ID_TOKEN: The 'response_type=id_token' selection uses the Implicit Flow for web sign-in. Possible values: ["CODE", "ID_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#response_type GoogleIamWorkforcePoolProvider#response_type}

---

##### `AdditionalScopes`<sup>Optional</sup> <a name="AdditionalScopes" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.additionalScopes"></a>

```go
AdditionalScopes *[]*string
```

- *Type:* *[]*string

Additional scopes to request for in the OIDC authentication request on top of scopes requested by default.

By default, the 'openid', 'profile' and 'email' scopes that are supported by the identity provider are requested.
Each additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#additional_scopes GoogleIamWorkforcePoolProvider#additional_scopes}

---

### GoogleIamWorkforcePoolProviderSaml <a name="GoogleIamWorkforcePoolProviderSaml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderSaml {
	IdpMetadataXml: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>*string</code> | SAML Identity provider configuration metadata xml doc. |

---

##### `IdpMetadataXml`<sup>Required</sup> <a name="IdpMetadataXml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml.property.idpMetadataXml"></a>

```go
IdpMetadataXml *string
```

- *Type:* *string

SAML Identity provider configuration metadata xml doc.

The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
The max size of the acceptable xml document will be bounded to 128k characters.

The metadata xml document should satisfy the following constraints:

1) Must contain an Identity Provider Entity ID.
2) Must contain at least one non-expired signing key certificate.
3) For each signing key:
   a) Valid from should be no more than 7 days from now.
   b) Valid to should be no more than 10 years in the future.
4) Up to 3 IdP signing keys are allowed in the metadata xml.

When updating the provider's metadata xml, at least one non-expired signing key
must overlap with the existing metadata. This requirement is skipped if there are
no non-expired signing keys present in the existing metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#idp_metadata_xml GoogleIamWorkforcePoolProvider#idp_metadata_xml}

---

### GoogleIamWorkforcePoolProviderTimeouts <a name="GoogleIamWorkforcePoolProviderTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

&googleiamworkforcepoolprovider.GoogleIamWorkforcePoolProviderTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#create GoogleIamWorkforcePoolProvider#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#delete GoogleIamWorkforcePoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#update GoogleIamWorkforcePoolProvider#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#create GoogleIamWorkforcePoolProvider#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#delete GoogleIamWorkforcePoolProvider#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_iam_workforce_pool_provider#update GoogleIamWorkforcePoolProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue"></a>

```go
func PutValue(value GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.value"></a>

```go
func Value() GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.valueInput"></a>

```go
func ValueInput() GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---


### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainTextInput">PlainTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainText">PlainText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `PlainTextInput`<sup>Optional</sup> <a name="PlainTextInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainTextInput"></a>

```go
func PlainTextInput() *string
```

- *Type:* *string

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainText"></a>

```go
func PlainText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---


### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters">PutQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resetQueryParameters">ResetQueryParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret"></a>

```go
func PutClientSecret(value GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---

##### `PutQueryParameters` <a name="PutQueryParameters" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters"></a>

```go
func PutQueryParameters(value GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---

##### `ResetQueryParameters` <a name="ResetQueryParameters" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resetQueryParameters"></a>

```go
func ResetQueryParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParameters">QueryParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesTypeInput">AttributesTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParametersInput">QueryParametersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesType">AttributesType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecret"></a>

```go
func ClientSecret() GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference</a>

---

##### `QueryParameters`<sup>Required</sup> <a name="QueryParameters" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParameters"></a>

```go
func QueryParameters() GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference</a>

---

##### `AttributesTypeInput`<sup>Optional</sup> <a name="AttributesTypeInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesTypeInput"></a>

```go
func AttributesTypeInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUriInput"></a>

```go
func IssuerUriInput() *string
```

- *Type:* *string

---

##### `QueryParametersInput`<sup>Optional</sup> <a name="QueryParametersInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParametersInput"></a>

```go
func QueryParametersInput() GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---

##### `AttributesType`<sup>Required</sup> <a name="AttributesType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesType"></a>

```go
func AttributesType() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUri"></a>

```go
func IssuerUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---


### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resetFilter"></a>

```go
func ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---


### GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference <a name="GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProviderOidcClientSecretOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.putValue"></a>

```go
func PutValue(value GoogleIamWorkforcePoolProviderOidcClientSecretValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference">GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.value"></a>

```go
func Value() GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference">GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.valueInput"></a>

```go
func ValueInput() GoogleIamWorkforcePoolProviderOidcClientSecretValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamWorkforcePoolProviderOidcClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a>

---


### GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference <a name="GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainTextInput">PlainTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainText">PlainText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `PlainTextInput`<sup>Optional</sup> <a name="PlainTextInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainTextInput"></a>

```go
func PlainTextInput() *string
```

- *Type:* *string

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainText"></a>

```go
func PlainText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamWorkforcePoolProviderOidcClientSecretValue
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a>

---


### GoogleIamWorkforcePoolProviderOidcOutputReference <a name="GoogleIamWorkforcePoolProviderOidcOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProviderOidcOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderOidcOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putClientSecret">PutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig">PutWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetJwksJson">ResetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig">ResetWebSsoConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientSecret` <a name="PutClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putClientSecret"></a>

```go
func PutClientSecret(value GoogleIamWorkforcePoolProviderOidcClientSecret)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a>

---

##### `PutWebSsoConfig` <a name="PutWebSsoConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig"></a>

```go
func PutWebSsoConfig(value GoogleIamWorkforcePoolProviderOidcWebSsoConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetJwksJson` <a name="ResetJwksJson" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetJwksJson"></a>

```go
func ResetJwksJson()
```

##### `ResetWebSsoConfig` <a name="ResetWebSsoConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig"></a>

```go
func ResetWebSsoConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientSecret">ClientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference">GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig">WebSsoConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference">GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.jwksJsonInput">JwksJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput">WebSsoConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.issuerUri">IssuerUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.jwksJson">JwksJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientSecret"></a>

```go
func ClientSecret() GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference">GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference</a>

---

##### `WebSsoConfig`<sup>Required</sup> <a name="WebSsoConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig"></a>

```go
func WebSsoConfig() GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference">GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() GoogleIamWorkforcePoolProviderOidcClientSecret
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a>

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput"></a>

```go
func IssuerUriInput() *string
```

- *Type:* *string

---

##### `JwksJsonInput`<sup>Optional</sup> <a name="JwksJsonInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.jwksJsonInput"></a>

```go
func JwksJsonInput() *string
```

- *Type:* *string

---

##### `WebSsoConfigInput`<sup>Optional</sup> <a name="WebSsoConfigInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput"></a>

```go
func WebSsoConfigInput() GoogleIamWorkforcePoolProviderOidcWebSsoConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.issuerUri"></a>

```go
func IssuerUri() *string
```

- *Type:* *string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.jwksJson"></a>

```go
func JwksJson() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamWorkforcePoolProviderOidc
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a>

---


### GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference <a name="GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resetAdditionalScopes">ResetAdditionalScopes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalScopes` <a name="ResetAdditionalScopes" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resetAdditionalScopes"></a>

```go
func ResetAdditionalScopes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopesInput">AdditionalScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput">AssertionClaimsBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput">ResponseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopes">AdditionalScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior">AssertionClaimsBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType">ResponseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalScopesInput`<sup>Optional</sup> <a name="AdditionalScopesInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopesInput"></a>

```go
func AdditionalScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssertionClaimsBehaviorInput`<sup>Optional</sup> <a name="AssertionClaimsBehaviorInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput"></a>

```go
func AssertionClaimsBehaviorInput() *string
```

- *Type:* *string

---

##### `ResponseTypeInput`<sup>Optional</sup> <a name="ResponseTypeInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput"></a>

```go
func ResponseTypeInput() *string
```

- *Type:* *string

---

##### `AdditionalScopes`<sup>Required</sup> <a name="AdditionalScopes" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopes"></a>

```go
func AdditionalScopes() *[]*string
```

- *Type:* *[]*string

---

##### `AssertionClaimsBehavior`<sup>Required</sup> <a name="AssertionClaimsBehavior" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior"></a>

```go
func AssertionClaimsBehavior() *string
```

- *Type:* *string

---

##### `ResponseType`<sup>Required</sup> <a name="ResponseType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType"></a>

```go
func ResponseType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamWorkforcePoolProviderOidcWebSsoConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a>

---


### GoogleIamWorkforcePoolProviderSamlOutputReference <a name="GoogleIamWorkforcePoolProviderSamlOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProviderSamlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderSamlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput">IdpMetadataXmlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml">IdpMetadataXml</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdpMetadataXmlInput`<sup>Optional</sup> <a name="IdpMetadataXmlInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput"></a>

```go
func IdpMetadataXmlInput() *string
```

- *Type:* *string

---

##### `IdpMetadataXml`<sup>Required</sup> <a name="IdpMetadataXml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```go
func IdpMetadataXml() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleIamWorkforcePoolProviderSaml
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a>

---


### GoogleIamWorkforcePoolProviderTimeoutsOutputReference <a name="GoogleIamWorkforcePoolProviderTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/googleiamworkforcepoolprovider"

googleiamworkforcepoolprovider.NewGoogleIamWorkforcePoolProviderTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleIamWorkforcePoolProviderTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



