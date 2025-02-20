# `googlePrivatecaCaPool` Submodule <a name="`googlePrivatecaCaPool` Submodule" id="@cdktf/provider-google-beta.googlePrivatecaCaPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivatecaCaPool <a name="GooglePrivatecaCaPool" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool google_privateca_ca_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPool(Construct Scope, string Id, GooglePrivatecaCaPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig">GooglePrivatecaCaPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig">GooglePrivatecaCaPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putIssuancePolicy">PutIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putPublishingOptions">PutPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetIssuancePolicy">ResetIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetPublishingOptions">ResetPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIssuancePolicy` <a name="PutIssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putIssuancePolicy"></a>

```csharp
private void PutIssuancePolicy(GooglePrivatecaCaPoolIssuancePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putIssuancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

---

##### `PutPublishingOptions` <a name="PutPublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putPublishingOptions"></a>

```csharp
private void PutPublishingOptions(GooglePrivatecaCaPoolPublishingOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putPublishingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putTimeouts"></a>

```csharp
private void PutTimeouts(GooglePrivatecaCaPoolTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuancePolicy` <a name="ResetIssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetIssuancePolicy"></a>

```csharp
private void ResetIssuancePolicy()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPublishingOptions` <a name="ResetPublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetPublishingOptions"></a>

```csharp
private void ResetPublishingOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePrivatecaCaPool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePrivatecaCaPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePrivatecaCaPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePrivatecaCaPool.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePrivatecaCaPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GooglePrivatecaCaPool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePrivatecaCaPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePrivatecaCaPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GooglePrivatecaCaPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicy">IssuancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference">GooglePrivatecaCaPoolIssuancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptions">PublishingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference">GooglePrivatecaCaPoolPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference">GooglePrivatecaCaPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicyInput">IssuancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptionsInput">PublishingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tierInput">TierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tier">Tier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IssuancePolicy`<sup>Required</sup> <a name="IssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicy"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyOutputReference IssuancePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference">GooglePrivatecaCaPoolIssuancePolicyOutputReference</a>

---

##### `PublishingOptions`<sup>Required</sup> <a name="PublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptions"></a>

```csharp
public GooglePrivatecaCaPoolPublishingOptionsOutputReference PublishingOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference">GooglePrivatecaCaPoolPublishingOptionsOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeouts"></a>

```csharp
public GooglePrivatecaCaPoolTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference">GooglePrivatecaCaPoolTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuancePolicyInput`<sup>Optional</sup> <a name="IssuancePolicyInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.issuancePolicyInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicy IssuancePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PublishingOptionsInput`<sup>Optional</sup> <a name="PublishingOptionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.publishingOptionsInput"></a>

```csharp
public GooglePrivatecaCaPoolPublishingOptions PublishingOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tierInput"></a>

```csharp
public string TierInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tier"></a>

```csharp
public string Tier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivatecaCaPoolConfig <a name="GooglePrivatecaCaPoolConfig" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string Tier,
    string Id = null,
    GooglePrivatecaCaPoolIssuancePolicy IssuancePolicy = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GooglePrivatecaCaPoolPublishingOptions PublishingOptions = null,
    GooglePrivatecaCaPoolTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.location">Location</a></code> | <code>string</code> | Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.name">Name</a></code> | <code>string</code> | The name for this CaPool. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.tier">Tier</a></code> | <code>string</code> | The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"]. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#id GooglePrivatecaCaPool#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.issuancePolicy">IssuancePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a></code> | issuance_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#project GooglePrivatecaCaPool#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.publishingOptions">PublishingOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a></code> | publishing_options block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#location GooglePrivatecaCaPool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for this CaPool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#name GooglePrivatecaCaPool#name}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.tier"></a>

```csharp
public string Tier { get; set; }
```

- *Type:* string

The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#tier GooglePrivatecaCaPool#tier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#id GooglePrivatecaCaPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuancePolicy`<sup>Optional</sup> <a name="IssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.issuancePolicy"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicy IssuancePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

issuance_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#issuance_policy GooglePrivatecaCaPool#issuance_policy}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#labels GooglePrivatecaCaPool#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#project GooglePrivatecaCaPool#project}.

---

##### `PublishingOptions`<sup>Optional</sup> <a name="PublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.publishingOptions"></a>

```csharp
public GooglePrivatecaCaPoolPublishingOptions PublishingOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

publishing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#publishing_options GooglePrivatecaCaPool#publishing_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolConfig.property.timeouts"></a>

```csharp
public GooglePrivatecaCaPoolTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts">GooglePrivatecaCaPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#timeouts GooglePrivatecaCaPool#timeouts}

---

### GooglePrivatecaCaPoolIssuancePolicy <a name="GooglePrivatecaCaPoolIssuancePolicy" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicy {
    GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes AllowedIssuanceModes = null,
    object AllowedKeyTypes = null,
    GooglePrivatecaCaPoolIssuancePolicyBaselineValues BaselineValues = null,
    GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints IdentityConstraints = null,
    string MaximumLifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes">AllowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | allowed_issuance_modes block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes">AllowedKeyTypes</a></code> | <code>object</code> | allowed_key_types block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.baselineValues">BaselineValues</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | baseline_values block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.identityConstraints">IdentityConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.maximumLifetime">MaximumLifetime</a></code> | <code>string</code> | The maximum lifetime allowed for issued Certificates. |

---

##### `AllowedIssuanceModes`<sup>Optional</sup> <a name="AllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes AllowedIssuanceModes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

allowed_issuance_modes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#allowed_issuance_modes GooglePrivatecaCaPool#allowed_issuance_modes}

---

##### `AllowedKeyTypes`<sup>Optional</sup> <a name="AllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes"></a>

```csharp
public object AllowedKeyTypes { get; set; }
```

- *Type:* object

allowed_key_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#allowed_key_types GooglePrivatecaCaPool#allowed_key_types}

---

##### `BaselineValues`<sup>Optional</sup> <a name="BaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.baselineValues"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValues BaselineValues { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

baseline_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#baseline_values GooglePrivatecaCaPool#baseline_values}

---

##### `IdentityConstraints`<sup>Optional</sup> <a name="IdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.identityConstraints"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints IdentityConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#identity_constraints GooglePrivatecaCaPool#identity_constraints}

---

##### `MaximumLifetime`<sup>Optional</sup> <a name="MaximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy.property.maximumLifetime"></a>

```csharp
public string MaximumLifetime { get; set; }
```

- *Type:* string

The maximum lifetime allowed for issued Certificates.

Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#maximum_lifetime GooglePrivatecaCaPool#maximum_lifetime}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes {
    object AllowConfigBasedIssuance,
    object AllowCsrBasedIssuance
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance">AllowConfigBasedIssuance</a></code> | <code>object</code> | When true, allows callers to create Certificates by specifying a CertificateConfig. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance">AllowCsrBasedIssuance</a></code> | <code>object</code> | When true, allows callers to create Certificates by specifying a CSR. |

---

##### `AllowConfigBasedIssuance`<sup>Required</sup> <a name="AllowConfigBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance"></a>

```csharp
public object AllowConfigBasedIssuance { get; set; }
```

- *Type:* object

When true, allows callers to create Certificates by specifying a CertificateConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#allow_config_based_issuance GooglePrivatecaCaPool#allow_config_based_issuance}

---

##### `AllowCsrBasedIssuance`<sup>Required</sup> <a name="AllowCsrBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance"></a>

```csharp
public object AllowCsrBasedIssuance { get; set; }
```

- *Type:* object

When true, allows callers to create Certificates by specifying a CSR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#allow_csr_based_issuance GooglePrivatecaCaPool#allow_csr_based_issuance}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes {
    GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve EllipticCurve = null,
    GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa Rsa = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve">EllipticCurve</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | elliptic_curve block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa">Rsa</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | rsa block. |

---

##### `EllipticCurve`<sup>Optional</sup> <a name="EllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve EllipticCurve { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

elliptic_curve block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#elliptic_curve GooglePrivatecaCaPool#elliptic_curve}

---

##### `Rsa`<sup>Optional</sup> <a name="Rsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa Rsa { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

rsa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#rsa GooglePrivatecaCaPool#rsa}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve {
    string SignatureAlgorithm
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"]. |

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; set; }
```

- *Type:* string

The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#signature_algorithm GooglePrivatecaCaPool#signature_algorithm}

---

### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa {
    string MaxModulusSize = null,
    string MinModulusSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize">MaxModulusSize</a></code> | <code>string</code> | The maximum allowed RSA modulus size, in bits. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize">MinModulusSize</a></code> | <code>string</code> | The minimum allowed RSA modulus size, in bits. |

---

##### `MaxModulusSize`<sup>Optional</sup> <a name="MaxModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize"></a>

```csharp
public string MaxModulusSize { get; set; }
```

- *Type:* string

The maximum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service will not enforce an explicit upper bound on RSA modulus sizes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#max_modulus_size GooglePrivatecaCaPool#max_modulus_size}

---

##### `MinModulusSize`<sup>Optional</sup> <a name="MinModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize"></a>

```csharp
public string MinModulusSize { get; set; }
```

- *Type:* string

The minimum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service-level min RSA modulus size will continue to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#min_modulus_size GooglePrivatecaCaPool#min_modulus_size}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValues <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValues {
    GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions CaOptions,
    GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage KeyUsage,
    object AdditionalExtensions = null,
    string[] AiaOcspServers = null,
    GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints NameConstraints = null,
    object PolicyIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions">AdditionalExtensions</a></code> | <code>object</code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers">AiaOcspServers</a></code> | <code>string[]</code> | Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | name_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds">PolicyIds</a></code> | <code>object</code> | policy_ids block. |

---

##### `CaOptions`<sup>Required</sup> <a name="CaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions CaOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#ca_options GooglePrivatecaCaPool#ca_options}

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage KeyUsage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#key_usage GooglePrivatecaCaPool#key_usage}

---

##### `AdditionalExtensions`<sup>Optional</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions"></a>

```csharp
public object AdditionalExtensions { get; set; }
```

- *Type:* object

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#additional_extensions GooglePrivatecaCaPool#additional_extensions}

---

##### `AiaOcspServers`<sup>Optional</sup> <a name="AiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers"></a>

```csharp
public string[] AiaOcspServers { get; set; }
```

- *Type:* string[]

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#aia_ocsp_servers GooglePrivatecaCaPool#aia_ocsp_servers}

---

##### `NameConstraints`<sup>Optional</sup> <a name="NameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints NameConstraints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

name_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#name_constraints GooglePrivatecaCaPool#name_constraints}

---

##### `PolicyIds`<sup>Optional</sup> <a name="PolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds"></a>

```csharp
public object PolicyIds { get; set; }
```

- *Type:* object

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#policy_ids GooglePrivatecaCaPool#policy_ids}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions {
    object Critical,
    GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId ObjectId,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical">Critical</a></code> | <code>object</code> | Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value">Value</a></code> | <code>string</code> | The value of this X.509 extension. A base64-encoded string. |

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical"></a>

```csharp
public object Critical { get; set; }
```

- *Type:* object

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#critical GooglePrivatecaCaPool#critical}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId ObjectId { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#object_id GooglePrivatecaCaPool#object_id}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of this X.509 extension. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#value GooglePrivatecaCaPool#value}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId {
    double[] ObjectIdPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; set; }
```

- *Type:* double[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions {
    object IsCa = null,
    double MaxIssuerPathLength = null,
    object NonCa = null,
    object ZeroMaxIssuerPathLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa">IsCa</a></code> | <code>object</code> | When true, the "CA" in Basic Constraints extension will be set to true. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>double</code> | Refers to the "path length constraint" in Basic Constraints extension. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa">NonCa</a></code> | <code>object</code> | When true, the "CA" in Basic Constraints extension will be set to false. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>object</code> | When true, the "path length constraint" in Basic Constraints extension will be set to 0. |

---

##### `IsCa`<sup>Optional</sup> <a name="IsCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa"></a>

```csharp
public object IsCa { get; set; }
```

- *Type:* object

When true, the "CA" in Basic Constraints extension will be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#is_ca GooglePrivatecaCaPool#is_ca}

---

##### `MaxIssuerPathLength`<sup>Optional</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength"></a>

```csharp
public double MaxIssuerPathLength { get; set; }
```

- *Type:* double

Refers to the "path length constraint" in Basic Constraints extension.

For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#max_issuer_path_length GooglePrivatecaCaPool#max_issuer_path_length}

---

##### `NonCa`<sup>Optional</sup> <a name="NonCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa"></a>

```csharp
public object NonCa { get; set; }
```

- *Type:* object

When true, the "CA" in Basic Constraints extension will be set to false.

If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#non_ca GooglePrivatecaCaPool#non_ca}

---

##### `ZeroMaxIssuerPathLength`<sup>Optional</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength"></a>

```csharp
public object ZeroMaxIssuerPathLength { get; set; }
```

- *Type:* object

When true, the "path length constraint" in Basic Constraints extension will be set to 0.

if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#zero_max_issuer_path_length GooglePrivatecaCaPool#zero_max_issuer_path_length}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage {
    GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage BaseKeyUsage,
    GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage ExtendedKeyUsage,
    object UnknownExtendedKeyUsages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code>object</code> | unknown_extended_key_usages block. |

---

##### `BaseKeyUsage`<sup>Required</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage BaseKeyUsage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#base_key_usage GooglePrivatecaCaPool#base_key_usage}

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage ExtendedKeyUsage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#extended_key_usage GooglePrivatecaCaPool#extended_key_usage}

---

##### `UnknownExtendedKeyUsages`<sup>Optional</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages"></a>

```csharp
public object UnknownExtendedKeyUsages { get; set; }
```

- *Type:* object

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#unknown_extended_key_usages GooglePrivatecaCaPool#unknown_extended_key_usages}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage {
    object CertSign = null,
    object ContentCommitment = null,
    object CrlSign = null,
    object DataEncipherment = null,
    object DecipherOnly = null,
    object DigitalSignature = null,
    object EncipherOnly = null,
    object KeyAgreement = null,
    object KeyEncipherment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign">CertSign</a></code> | <code>object</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment">ContentCommitment</a></code> | <code>object</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign">CrlSign</a></code> | <code>object</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment">DataEncipherment</a></code> | <code>object</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly">DecipherOnly</a></code> | <code>object</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature">DigitalSignature</a></code> | <code>object</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly">EncipherOnly</a></code> | <code>object</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement">KeyAgreement</a></code> | <code>object</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment">KeyEncipherment</a></code> | <code>object</code> | The key may be used to encipher other keys. |

---

##### `CertSign`<sup>Optional</sup> <a name="CertSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign"></a>

```csharp
public object CertSign { get; set; }
```

- *Type:* object

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#cert_sign GooglePrivatecaCaPool#cert_sign}

---

##### `ContentCommitment`<sup>Optional</sup> <a name="ContentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```csharp
public object ContentCommitment { get; set; }
```

- *Type:* object

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#content_commitment GooglePrivatecaCaPool#content_commitment}

---

##### `CrlSign`<sup>Optional</sup> <a name="CrlSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign"></a>

```csharp
public object CrlSign { get; set; }
```

- *Type:* object

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#crl_sign GooglePrivatecaCaPool#crl_sign}

---

##### `DataEncipherment`<sup>Optional</sup> <a name="DataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```csharp
public object DataEncipherment { get; set; }
```

- *Type:* object

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#data_encipherment GooglePrivatecaCaPool#data_encipherment}

---

##### `DecipherOnly`<sup>Optional</sup> <a name="DecipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```csharp
public object DecipherOnly { get; set; }
```

- *Type:* object

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#decipher_only GooglePrivatecaCaPool#decipher_only}

---

##### `DigitalSignature`<sup>Optional</sup> <a name="DigitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```csharp
public object DigitalSignature { get; set; }
```

- *Type:* object

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#digital_signature GooglePrivatecaCaPool#digital_signature}

---

##### `EncipherOnly`<sup>Optional</sup> <a name="EncipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```csharp
public object EncipherOnly { get; set; }
```

- *Type:* object

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#encipher_only GooglePrivatecaCaPool#encipher_only}

---

##### `KeyAgreement`<sup>Optional</sup> <a name="KeyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```csharp
public object KeyAgreement { get; set; }
```

- *Type:* object

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#key_agreement GooglePrivatecaCaPool#key_agreement}

---

##### `KeyEncipherment`<sup>Optional</sup> <a name="KeyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```csharp
public object KeyEncipherment { get; set; }
```

- *Type:* object

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#key_encipherment GooglePrivatecaCaPool#key_encipherment}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage {
    object ClientAuth = null,
    object CodeSigning = null,
    object EmailProtection = null,
    object OcspSigning = null,
    object ServerAuth = null,
    object TimeStamping = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth">ClientAuth</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning">CodeSigning</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection">EmailProtection</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning">OcspSigning</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth">ServerAuth</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping">TimeStamping</a></code> | <code>object</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `ClientAuth`<sup>Optional</sup> <a name="ClientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```csharp
public object ClientAuth { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#client_auth GooglePrivatecaCaPool#client_auth}

---

##### `CodeSigning`<sup>Optional</sup> <a name="CodeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```csharp
public object CodeSigning { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#code_signing GooglePrivatecaCaPool#code_signing}

---

##### `EmailProtection`<sup>Optional</sup> <a name="EmailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```csharp
public object EmailProtection { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#email_protection GooglePrivatecaCaPool#email_protection}

---

##### `OcspSigning`<sup>Optional</sup> <a name="OcspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```csharp
public object OcspSigning { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#ocsp_signing GooglePrivatecaCaPool#ocsp_signing}

---

##### `ServerAuth`<sup>Optional</sup> <a name="ServerAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```csharp
public object ServerAuth { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#server_auth GooglePrivatecaCaPool#server_auth}

---

##### `TimeStamping`<sup>Optional</sup> <a name="TimeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```csharp
public object TimeStamping { get; set; }
```

- *Type:* object

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#time_stamping GooglePrivatecaCaPool#time_stamping}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages {
    double[] ObjectIdPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; set; }
```

- *Type:* double[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints {
    object Critical,
    string[] ExcludedDnsNames = null,
    string[] ExcludedEmailAddresses = null,
    string[] ExcludedIpRanges = null,
    string[] ExcludedUris = null,
    string[] PermittedDnsNames = null,
    string[] PermittedEmailAddresses = null,
    string[] PermittedIpRanges = null,
    string[] PermittedUris = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical">Critical</a></code> | <code>object</code> | Indicates whether or not the name constraints are marked critical. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>string[]</code> | Contains excluded DNS names. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>string[]</code> | Contains the excluded email addresses. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>string[]</code> | Contains the excluded IP ranges. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris">ExcludedUris</a></code> | <code>string[]</code> | Contains the excluded URIs that apply to the host part of the name. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>string[]</code> | Contains permitted DNS names. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>string[]</code> | Contains the permitted email addresses. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>string[]</code> | Contains the permitted IP ranges. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris">PermittedUris</a></code> | <code>string[]</code> | Contains the permitted URIs that apply to the host part of the name. |

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical"></a>

```csharp
public object Critical { get; set; }
```

- *Type:* object

Indicates whether or not the name constraints are marked critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#critical GooglePrivatecaCaPool#critical}

---

##### `ExcludedDnsNames`<sup>Optional</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames"></a>

```csharp
public string[] ExcludedDnsNames { get; set; }
```

- *Type:* string[]

Contains excluded DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#excluded_dns_names GooglePrivatecaCaPool#excluded_dns_names}

---

##### `ExcludedEmailAddresses`<sup>Optional</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses"></a>

```csharp
public string[] ExcludedEmailAddresses { get; set; }
```

- *Type:* string[]

Contains the excluded email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#excluded_email_addresses GooglePrivatecaCaPool#excluded_email_addresses}

---

##### `ExcludedIpRanges`<sup>Optional</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges"></a>

```csharp
public string[] ExcludedIpRanges { get; set; }
```

- *Type:* string[]

Contains the excluded IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#excluded_ip_ranges GooglePrivatecaCaPool#excluded_ip_ranges}

---

##### `ExcludedUris`<sup>Optional</sup> <a name="ExcludedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris"></a>

```csharp
public string[] ExcludedUris { get; set; }
```

- *Type:* string[]

Contains the excluded URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#excluded_uris GooglePrivatecaCaPool#excluded_uris}

---

##### `PermittedDnsNames`<sup>Optional</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames"></a>

```csharp
public string[] PermittedDnsNames { get; set; }
```

- *Type:* string[]

Contains permitted DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#permitted_dns_names GooglePrivatecaCaPool#permitted_dns_names}

---

##### `PermittedEmailAddresses`<sup>Optional</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses"></a>

```csharp
public string[] PermittedEmailAddresses { get; set; }
```

- *Type:* string[]

Contains the permitted email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#permitted_email_addresses GooglePrivatecaCaPool#permitted_email_addresses}

---

##### `PermittedIpRanges`<sup>Optional</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges"></a>

```csharp
public string[] PermittedIpRanges { get; set; }
```

- *Type:* string[]

Contains the permitted IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#permitted_ip_ranges GooglePrivatecaCaPool#permitted_ip_ranges}

---

##### `PermittedUris`<sup>Optional</sup> <a name="PermittedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris"></a>

```csharp
public string[] PermittedUris { get; set; }
```

- *Type:* string[]

Contains the permitted URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#permitted_uris GooglePrivatecaCaPool#permitted_uris}

---

### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds {
    double[] ObjectIdPath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; set; }
```

- *Type:* double[]

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#object_id_path GooglePrivatecaCaPool#object_id_path}

---

### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints {
    object AllowSubjectAltNamesPassthrough,
    object AllowSubjectPassthrough,
    GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression CelExpression = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough">AllowSubjectAltNamesPassthrough</a></code> | <code>object</code> | If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough">AllowSubjectPassthrough</a></code> | <code>object</code> | If this is set, the Subject field may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression">CelExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | cel_expression block. |

---

##### `AllowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="AllowSubjectAltNamesPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough"></a>

```csharp
public object AllowSubjectAltNamesPassthrough { get; set; }
```

- *Type:* object

If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.

Otherwise, the requested SubjectAltNames will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#allow_subject_alt_names_passthrough GooglePrivatecaCaPool#allow_subject_alt_names_passthrough}

---

##### `AllowSubjectPassthrough`<sup>Required</sup> <a name="AllowSubjectPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough"></a>

```csharp
public object AllowSubjectPassthrough { get; set; }
```

- *Type:* object

If this is set, the Subject field may be copied from a certificate request into the signed certificate.

Otherwise, the requested Subject will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#allow_subject_passthrough GooglePrivatecaCaPool#allow_subject_passthrough}

---

##### `CelExpression`<sup>Optional</sup> <a name="CelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression CelExpression { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

cel_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#cel_expression GooglePrivatecaCaPool#cel_expression}

---

### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression {
    string Expression,
    string Description = null,
    string Location = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression">Expression</a></code> | <code>string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description">Description</a></code> | <code>string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location">Location</a></code> | <code>string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title">Title</a></code> | <code>string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#expression GooglePrivatecaCaPool#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the expression.

This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#description GooglePrivatecaCaPool#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#location GooglePrivatecaCaPool#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#title GooglePrivatecaCaPool#title}

---

### GooglePrivatecaCaPoolPublishingOptions <a name="GooglePrivatecaCaPoolPublishingOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolPublishingOptions {
    object PublishCaCert,
    object PublishCrl,
    string EncodingFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCaCert">PublishCaCert</a></code> | <code>object</code> | When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCrl">PublishCrl</a></code> | <code>object</code> | When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.encodingFormat">EncodingFormat</a></code> | <code>string</code> | Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs. |

---

##### `PublishCaCert`<sup>Required</sup> <a name="PublishCaCert" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCaCert"></a>

```csharp
public object PublishCaCert { get; set; }
```

- *Type:* object

When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#publish_ca_cert GooglePrivatecaCaPool#publish_ca_cert}

---

##### `PublishCrl`<sup>Required</sup> <a name="PublishCrl" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.publishCrl"></a>

```csharp
public object PublishCrl { get; set; }
```

- *Type:* object

When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#publish_crl GooglePrivatecaCaPool#publish_crl}

---

##### `EncodingFormat`<sup>Optional</sup> <a name="EncodingFormat" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions.property.encodingFormat"></a>

```csharp
public string EncodingFormat { get; set; }
```

- *Type:* string

Specifies the encoding format of each CertificateAuthority's CA certificate and CRLs.

If this is omitted, CA certificates and CRLs
will be published in PEM. Possible values: ["PEM", "DER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#encoding_format GooglePrivatecaCaPool#encoding_format}

---

### GooglePrivatecaCaPoolTimeouts <a name="GooglePrivatecaCaPoolTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#create GooglePrivatecaCaPool#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#delete GooglePrivatecaCaPool#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#update GooglePrivatecaCaPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#create GooglePrivatecaCaPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#delete GooglePrivatecaCaPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_ca_pool#update GooglePrivatecaCaPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput">AllowConfigBasedIssuanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput">AllowCsrBasedIssuanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance">AllowConfigBasedIssuance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance">AllowCsrBasedIssuance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowConfigBasedIssuanceInput`<sup>Optional</sup> <a name="AllowConfigBasedIssuanceInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput"></a>

```csharp
public object AllowConfigBasedIssuanceInput { get; }
```

- *Type:* object

---

##### `AllowCsrBasedIssuanceInput`<sup>Optional</sup> <a name="AllowCsrBasedIssuanceInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput"></a>

```csharp
public object AllowCsrBasedIssuanceInput { get; }
```

- *Type:* object

---

##### `AllowConfigBasedIssuance`<sup>Required</sup> <a name="AllowConfigBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance"></a>

```csharp
public object AllowConfigBasedIssuance { get; }
```

- *Type:* object

---

##### `AllowCsrBasedIssuance`<sup>Required</sup> <a name="AllowCsrBasedIssuance" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance"></a>

```csharp
public object AllowCsrBasedIssuance { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput"></a>

```csharp
public string SignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get"></a>

```csharp
private GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve">PutEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa">PutRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve">ResetEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa">ResetRsa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEllipticCurve` <a name="PutEllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve"></a>

```csharp
private void PutEllipticCurve(GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `PutRsa` <a name="PutRsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa"></a>

```csharp
private void PutRsa(GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `ResetEllipticCurve` <a name="ResetEllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve"></a>

```csharp
private void ResetEllipticCurve()
```

##### `ResetRsa` <a name="ResetRsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa"></a>

```csharp
private void ResetRsa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve">EllipticCurve</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa">Rsa</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput">EllipticCurveInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput">RsaInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EllipticCurve`<sup>Required</sup> <a name="EllipticCurve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference EllipticCurve { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a>

---

##### `Rsa`<sup>Required</sup> <a name="Rsa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference Rsa { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a>

---

##### `EllipticCurveInput`<sup>Optional</sup> <a name="EllipticCurveInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve EllipticCurveInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `RsaInput`<sup>Optional</sup> <a name="RsaInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa RsaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize">ResetMaxModulusSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize">ResetMinModulusSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxModulusSize` <a name="ResetMaxModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize"></a>

```csharp
private void ResetMaxModulusSize()
```

##### `ResetMinModulusSize` <a name="ResetMinModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize"></a>

```csharp
private void ResetMinModulusSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput">MaxModulusSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput">MinModulusSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize">MaxModulusSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize">MinModulusSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxModulusSizeInput`<sup>Optional</sup> <a name="MaxModulusSizeInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput"></a>

```csharp
public string MaxModulusSizeInput { get; }
```

- *Type:* string

---

##### `MinModulusSizeInput`<sup>Optional</sup> <a name="MinModulusSizeInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput"></a>

```csharp
public string MinModulusSizeInput { get; }
```

- *Type:* string

---

##### `MaxModulusSize`<sup>Required</sup> <a name="MaxModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize"></a>

```csharp
public string MaxModulusSize { get; }
```

- *Type:* string

---

##### `MinModulusSize`<sup>Required</sup> <a name="MinModulusSize" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize"></a>

```csharp
public string MinModulusSize { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get"></a>

```csharp
private GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```csharp
public double[] ObjectIdPathInput { get; }
```

- *Type:* double[]

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId">PutObjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectId` <a name="PutObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId"></a>

```csharp
private void PutObjectId(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical">Critical</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference ObjectId { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a>

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput"></a>

```csharp
public object CriticalInput { get; }
```

- *Type:* object

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId ObjectIdInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical"></a>

```csharp
public object Critical { get; }
```

- *Type:* object

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa">ResetIsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength">ResetMaxIssuerPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa">ResetNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength">ResetZeroMaxIssuerPathLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsCa` <a name="ResetIsCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa"></a>

```csharp
private void ResetIsCa()
```

##### `ResetMaxIssuerPathLength` <a name="ResetMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```csharp
private void ResetMaxIssuerPathLength()
```

##### `ResetNonCa` <a name="ResetNonCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa"></a>

```csharp
private void ResetNonCa()
```

##### `ResetZeroMaxIssuerPathLength` <a name="ResetZeroMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength"></a>

```csharp
private void ResetZeroMaxIssuerPathLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput">IsCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput">MaxIssuerPathLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput">NonCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput">ZeroMaxIssuerPathLengthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa">IsCa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa">NonCa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsCaInput`<sup>Optional</sup> <a name="IsCaInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput"></a>

```csharp
public object IsCaInput { get; }
```

- *Type:* object

---

##### `MaxIssuerPathLengthInput`<sup>Optional</sup> <a name="MaxIssuerPathLengthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```csharp
public double MaxIssuerPathLengthInput { get; }
```

- *Type:* double

---

##### `NonCaInput`<sup>Optional</sup> <a name="NonCaInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput"></a>

```csharp
public object NonCaInput { get; }
```

- *Type:* object

---

##### `ZeroMaxIssuerPathLengthInput`<sup>Optional</sup> <a name="ZeroMaxIssuerPathLengthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput"></a>

```csharp
public object ZeroMaxIssuerPathLengthInput { get; }
```

- *Type:* object

---

##### `IsCa`<sup>Required</sup> <a name="IsCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa"></a>

```csharp
public object IsCa { get; }
```

- *Type:* object

---

##### `MaxIssuerPathLength`<sup>Required</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```csharp
public double MaxIssuerPathLength { get; }
```

- *Type:* double

---

##### `NonCa`<sup>Required</sup> <a name="NonCa" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa"></a>

```csharp
public object NonCa { get; }
```

- *Type:* object

---

##### `ZeroMaxIssuerPathLength`<sup>Required</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength"></a>

```csharp
public object ZeroMaxIssuerPathLength { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign">ResetCertSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">ResetContentCommitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign">ResetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">ResetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">ResetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">ResetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">ResetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">ResetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">ResetKeyEncipherment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertSign` <a name="ResetCertSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```csharp
private void ResetCertSign()
```

##### `ResetContentCommitment` <a name="ResetContentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```csharp
private void ResetContentCommitment()
```

##### `ResetCrlSign` <a name="ResetCrlSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```csharp
private void ResetCrlSign()
```

##### `ResetDataEncipherment` <a name="ResetDataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```csharp
private void ResetDataEncipherment()
```

##### `ResetDecipherOnly` <a name="ResetDecipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```csharp
private void ResetDecipherOnly()
```

##### `ResetDigitalSignature` <a name="ResetDigitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```csharp
private void ResetDigitalSignature()
```

##### `ResetEncipherOnly` <a name="ResetEncipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```csharp
private void ResetEncipherOnly()
```

##### `ResetKeyAgreement` <a name="ResetKeyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```csharp
private void ResetKeyAgreement()
```

##### `ResetKeyEncipherment` <a name="ResetKeyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```csharp
private void ResetKeyEncipherment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput">CertSignInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">ContentCommitmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">CrlSignInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">DataEnciphermentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">DecipherOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">DigitalSignatureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">EncipherOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">KeyAgreementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">KeyEnciphermentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign">CertSign</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">ContentCommitment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign">CrlSign</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">DataEncipherment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">DecipherOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">DigitalSignature</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">EncipherOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">KeyAgreement</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">KeyEncipherment</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertSignInput`<sup>Optional</sup> <a name="CertSignInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```csharp
public object CertSignInput { get; }
```

- *Type:* object

---

##### `ContentCommitmentInput`<sup>Optional</sup> <a name="ContentCommitmentInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```csharp
public object ContentCommitmentInput { get; }
```

- *Type:* object

---

##### `CrlSignInput`<sup>Optional</sup> <a name="CrlSignInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```csharp
public object CrlSignInput { get; }
```

- *Type:* object

---

##### `DataEnciphermentInput`<sup>Optional</sup> <a name="DataEnciphermentInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```csharp
public object DataEnciphermentInput { get; }
```

- *Type:* object

---

##### `DecipherOnlyInput`<sup>Optional</sup> <a name="DecipherOnlyInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```csharp
public object DecipherOnlyInput { get; }
```

- *Type:* object

---

##### `DigitalSignatureInput`<sup>Optional</sup> <a name="DigitalSignatureInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```csharp
public object DigitalSignatureInput { get; }
```

- *Type:* object

---

##### `EncipherOnlyInput`<sup>Optional</sup> <a name="EncipherOnlyInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```csharp
public object EncipherOnlyInput { get; }
```

- *Type:* object

---

##### `KeyAgreementInput`<sup>Optional</sup> <a name="KeyAgreementInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```csharp
public object KeyAgreementInput { get; }
```

- *Type:* object

---

##### `KeyEnciphermentInput`<sup>Optional</sup> <a name="KeyEnciphermentInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```csharp
public object KeyEnciphermentInput { get; }
```

- *Type:* object

---

##### `CertSign`<sup>Required</sup> <a name="CertSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```csharp
public object CertSign { get; }
```

- *Type:* object

---

##### `ContentCommitment`<sup>Required</sup> <a name="ContentCommitment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```csharp
public object ContentCommitment { get; }
```

- *Type:* object

---

##### `CrlSign`<sup>Required</sup> <a name="CrlSign" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```csharp
public object CrlSign { get; }
```

- *Type:* object

---

##### `DataEncipherment`<sup>Required</sup> <a name="DataEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```csharp
public object DataEncipherment { get; }
```

- *Type:* object

---

##### `DecipherOnly`<sup>Required</sup> <a name="DecipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```csharp
public object DecipherOnly { get; }
```

- *Type:* object

---

##### `DigitalSignature`<sup>Required</sup> <a name="DigitalSignature" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```csharp
public object DigitalSignature { get; }
```

- *Type:* object

---

##### `EncipherOnly`<sup>Required</sup> <a name="EncipherOnly" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```csharp
public object EncipherOnly { get; }
```

- *Type:* object

---

##### `KeyAgreement`<sup>Required</sup> <a name="KeyAgreement" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```csharp
public object KeyAgreement { get; }
```

- *Type:* object

---

##### `KeyEncipherment`<sup>Required</sup> <a name="KeyEncipherment" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```csharp
public object KeyEncipherment { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">ResetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">ResetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">ResetEmailProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">ResetOcspSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">ResetServerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">ResetTimeStamping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientAuth` <a name="ResetClientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```csharp
private void ResetClientAuth()
```

##### `ResetCodeSigning` <a name="ResetCodeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```csharp
private void ResetCodeSigning()
```

##### `ResetEmailProtection` <a name="ResetEmailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```csharp
private void ResetEmailProtection()
```

##### `ResetOcspSigning` <a name="ResetOcspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```csharp
private void ResetOcspSigning()
```

##### `ResetServerAuth` <a name="ResetServerAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```csharp
private void ResetServerAuth()
```

##### `ResetTimeStamping` <a name="ResetTimeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```csharp
private void ResetTimeStamping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">ClientAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">CodeSigningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">EmailProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">OcspSigningInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">ServerAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">TimeStampingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">ClientAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">CodeSigning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">EmailProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">OcspSigning</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">ServerAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">TimeStamping</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientAuthInput`<sup>Optional</sup> <a name="ClientAuthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```csharp
public object ClientAuthInput { get; }
```

- *Type:* object

---

##### `CodeSigningInput`<sup>Optional</sup> <a name="CodeSigningInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```csharp
public object CodeSigningInput { get; }
```

- *Type:* object

---

##### `EmailProtectionInput`<sup>Optional</sup> <a name="EmailProtectionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```csharp
public object EmailProtectionInput { get; }
```

- *Type:* object

---

##### `OcspSigningInput`<sup>Optional</sup> <a name="OcspSigningInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```csharp
public object OcspSigningInput { get; }
```

- *Type:* object

---

##### `ServerAuthInput`<sup>Optional</sup> <a name="ServerAuthInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```csharp
public object ServerAuthInput { get; }
```

- *Type:* object

---

##### `TimeStampingInput`<sup>Optional</sup> <a name="TimeStampingInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```csharp
public object TimeStampingInput { get; }
```

- *Type:* object

---

##### `ClientAuth`<sup>Required</sup> <a name="ClientAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```csharp
public object ClientAuth { get; }
```

- *Type:* object

---

##### `CodeSigning`<sup>Required</sup> <a name="CodeSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```csharp
public object CodeSigning { get; }
```

- *Type:* object

---

##### `EmailProtection`<sup>Required</sup> <a name="EmailProtection" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```csharp
public object EmailProtection { get; }
```

- *Type:* object

---

##### `OcspSigning`<sup>Required</sup> <a name="OcspSigning" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```csharp
public object OcspSigning { get; }
```

- *Type:* object

---

##### `ServerAuth`<sup>Required</sup> <a name="ServerAuth" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```csharp
public object ServerAuth { get; }
```

- *Type:* object

---

##### `TimeStamping`<sup>Required</sup> <a name="TimeStamping" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```csharp
public object TimeStamping { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage">PutBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage">PutExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages">PutUnknownExtendedKeyUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages">ResetUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseKeyUsage` <a name="PutBaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage"></a>

```csharp
private void PutBaseKeyUsage(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `PutExtendedKeyUsage` <a name="PutExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage"></a>

```csharp
private void PutExtendedKeyUsage(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `PutUnknownExtendedKeyUsages` <a name="PutUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```csharp
private void PutUnknownExtendedKeyUsages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* object

---

##### `ResetUnknownExtendedKeyUsages` <a name="ResetUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```csharp
private void ResetUnknownExtendedKeyUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput">BaseKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput">ExtendedKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">UnknownExtendedKeyUsagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseKeyUsage`<sup>Required</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference BaseKeyUsage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a>

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference ExtendedKeyUsage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `UnknownExtendedKeyUsages`<sup>Required</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList UnknownExtendedKeyUsages { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `BaseKeyUsageInput`<sup>Optional</sup> <a name="BaseKeyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage BaseKeyUsageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `ExtendedKeyUsageInput`<sup>Optional</sup> <a name="ExtendedKeyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage ExtendedKeyUsageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `UnknownExtendedKeyUsagesInput`<sup>Optional</sup> <a name="UnknownExtendedKeyUsagesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```csharp
public object UnknownExtendedKeyUsagesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```csharp
private GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```csharp
public double[] ObjectIdPathInput { get; }
```

- *Type:* double[]

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames">ResetExcludedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses">ResetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges">ResetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris">ResetExcludedUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames">ResetPermittedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses">ResetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges">ResetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris">ResetPermittedUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedDnsNames` <a name="ResetExcludedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames"></a>

```csharp
private void ResetExcludedDnsNames()
```

##### `ResetExcludedEmailAddresses` <a name="ResetExcludedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses"></a>

```csharp
private void ResetExcludedEmailAddresses()
```

##### `ResetExcludedIpRanges` <a name="ResetExcludedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges"></a>

```csharp
private void ResetExcludedIpRanges()
```

##### `ResetExcludedUris` <a name="ResetExcludedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris"></a>

```csharp
private void ResetExcludedUris()
```

##### `ResetPermittedDnsNames` <a name="ResetPermittedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames"></a>

```csharp
private void ResetPermittedDnsNames()
```

##### `ResetPermittedEmailAddresses` <a name="ResetPermittedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses"></a>

```csharp
private void ResetPermittedEmailAddresses()
```

##### `ResetPermittedIpRanges` <a name="ResetPermittedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges"></a>

```csharp
private void ResetPermittedIpRanges()
```

##### `ResetPermittedUris` <a name="ResetPermittedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris"></a>

```csharp
private void ResetPermittedUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput">ExcludedDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput">ExcludedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput">ExcludedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput">ExcludedUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput">PermittedDnsNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput">PermittedEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput">PermittedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput">PermittedUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical">Critical</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris">ExcludedUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris">PermittedUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput"></a>

```csharp
public object CriticalInput { get; }
```

- *Type:* object

---

##### `ExcludedDnsNamesInput`<sup>Optional</sup> <a name="ExcludedDnsNamesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput"></a>

```csharp
public string[] ExcludedDnsNamesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedEmailAddressesInput`<sup>Optional</sup> <a name="ExcludedEmailAddressesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput"></a>

```csharp
public string[] ExcludedEmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedIpRangesInput`<sup>Optional</sup> <a name="ExcludedIpRangesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput"></a>

```csharp
public string[] ExcludedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedUrisInput`<sup>Optional</sup> <a name="ExcludedUrisInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput"></a>

```csharp
public string[] ExcludedUrisInput { get; }
```

- *Type:* string[]

---

##### `PermittedDnsNamesInput`<sup>Optional</sup> <a name="PermittedDnsNamesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput"></a>

```csharp
public string[] PermittedDnsNamesInput { get; }
```

- *Type:* string[]

---

##### `PermittedEmailAddressesInput`<sup>Optional</sup> <a name="PermittedEmailAddressesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput"></a>

```csharp
public string[] PermittedEmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `PermittedIpRangesInput`<sup>Optional</sup> <a name="PermittedIpRangesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput"></a>

```csharp
public string[] PermittedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `PermittedUrisInput`<sup>Optional</sup> <a name="PermittedUrisInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput"></a>

```csharp
public string[] PermittedUrisInput { get; }
```

- *Type:* string[]

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical"></a>

```csharp
public object Critical { get; }
```

- *Type:* object

---

##### `ExcludedDnsNames`<sup>Required</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames"></a>

```csharp
public string[] ExcludedDnsNames { get; }
```

- *Type:* string[]

---

##### `ExcludedEmailAddresses`<sup>Required</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses"></a>

```csharp
public string[] ExcludedEmailAddresses { get; }
```

- *Type:* string[]

---

##### `ExcludedIpRanges`<sup>Required</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges"></a>

```csharp
public string[] ExcludedIpRanges { get; }
```

- *Type:* string[]

---

##### `ExcludedUris`<sup>Required</sup> <a name="ExcludedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris"></a>

```csharp
public string[] ExcludedUris { get; }
```

- *Type:* string[]

---

##### `PermittedDnsNames`<sup>Required</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames"></a>

```csharp
public string[] PermittedDnsNames { get; }
```

- *Type:* string[]

---

##### `PermittedEmailAddresses`<sup>Required</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses"></a>

```csharp
public string[] PermittedEmailAddresses { get; }
```

- *Type:* string[]

---

##### `PermittedIpRanges`<sup>Required</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges"></a>

```csharp
public string[] PermittedIpRanges { get; }
```

- *Type:* string[]

---

##### `PermittedUris`<sup>Required</sup> <a name="PermittedUris" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris"></a>

```csharp
public string[] PermittedUris { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions">PutAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions">PutCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage">PutKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints">PutNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds">PutPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions">ResetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers">ResetAiaOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints">ResetNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds">ResetPolicyIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalExtensions` <a name="PutAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions"></a>

```csharp
private void PutAdditionalExtensions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* object

---

##### `PutCaOptions` <a name="PutCaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions"></a>

```csharp
private void PutCaOptions(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `PutKeyUsage` <a name="PutKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage"></a>

```csharp
private void PutKeyUsage(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `PutNameConstraints` <a name="PutNameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints"></a>

```csharp
private void PutNameConstraints(GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `PutPolicyIds` <a name="PutPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds"></a>

```csharp
private void PutPolicyIds(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* object

---

##### `ResetAdditionalExtensions` <a name="ResetAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions"></a>

```csharp
private void ResetAdditionalExtensions()
```

##### `ResetAiaOcspServers` <a name="ResetAiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers"></a>

```csharp
private void ResetAiaOcspServers()
```

##### `ResetNameConstraints` <a name="ResetNameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints"></a>

```csharp
private void ResetNameConstraints()
```

##### `ResetPolicyIds` <a name="ResetPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds"></a>

```csharp
private void ResetPolicyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions">AdditionalExtensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds">PolicyIds</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput">AdditionalExtensionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput">AiaOcspServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput">CaOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput">KeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput">NameConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput">PolicyIdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers">AiaOcspServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalExtensions`<sup>Required</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList AdditionalExtensions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a>

---

##### `CaOptions`<sup>Required</sup> <a name="CaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference CaOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a>

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference KeyUsage { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a>

---

##### `NameConstraints`<sup>Required</sup> <a name="NameConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference NameConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a>

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList PolicyIds { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a>

---

##### `AdditionalExtensionsInput`<sup>Optional</sup> <a name="AdditionalExtensionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput"></a>

```csharp
public object AdditionalExtensionsInput { get; }
```

- *Type:* object

---

##### `AiaOcspServersInput`<sup>Optional</sup> <a name="AiaOcspServersInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput"></a>

```csharp
public string[] AiaOcspServersInput { get; }
```

- *Type:* string[]

---

##### `CaOptionsInput`<sup>Optional</sup> <a name="CaOptionsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions CaOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage KeyUsageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `NameConstraintsInput`<sup>Optional</sup> <a name="NameConstraintsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints NameConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `PolicyIdsInput`<sup>Optional</sup> <a name="PolicyIdsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput"></a>

```csharp
public object PolicyIdsInput { get; }
```

- *Type:* object

---

##### `AiaOcspServers`<sup>Required</sup> <a name="AiaOcspServers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers"></a>

```csharp
public string[] AiaOcspServers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get"></a>

```csharp
private GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput"></a>

```csharp
public double[] ObjectIdPathInput { get; }
```

- *Type:* double[]

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath"></a>

```csharp
public double[] ObjectIdPath { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---


### GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression">PutCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression">ResetCelExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCelExpression` <a name="PutCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression"></a>

```csharp
private void PutCelExpression(GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `ResetCelExpression` <a name="ResetCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression"></a>

```csharp
private void ResetCelExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression">CelExpression</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput">AllowSubjectAltNamesPassthroughInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput">AllowSubjectPassthroughInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough">AllowSubjectAltNamesPassthrough</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough">AllowSubjectPassthrough</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference CelExpression { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a>

---

##### `AllowSubjectAltNamesPassthroughInput`<sup>Optional</sup> <a name="AllowSubjectAltNamesPassthroughInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput"></a>

```csharp
public object AllowSubjectAltNamesPassthroughInput { get; }
```

- *Type:* object

---

##### `AllowSubjectPassthroughInput`<sup>Optional</sup> <a name="AllowSubjectPassthroughInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput"></a>

```csharp
public object AllowSubjectPassthroughInput { get; }
```

- *Type:* object

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression CelExpressionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `AllowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="AllowSubjectAltNamesPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough"></a>

```csharp
public object AllowSubjectAltNamesPassthrough { get; }
```

- *Type:* object

---

##### `AllowSubjectPassthrough`<sup>Required</sup> <a name="AllowSubjectPassthrough" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough"></a>

```csharp
public object AllowSubjectPassthrough { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---


### GooglePrivatecaCaPoolIssuancePolicyOutputReference <a name="GooglePrivatecaCaPoolIssuancePolicyOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolIssuancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes">PutAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes">PutAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues">PutBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints">PutIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes">ResetAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes">ResetAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues">ResetBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints">ResetIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime">ResetMaximumLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedIssuanceModes` <a name="PutAllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes"></a>

```csharp
private void PutAllowedIssuanceModes(GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `PutAllowedKeyTypes` <a name="PutAllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes"></a>

```csharp
private void PutAllowedKeyTypes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes.parameter.value"></a>

- *Type:* object

---

##### `PutBaselineValues` <a name="PutBaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues"></a>

```csharp
private void PutBaselineValues(GooglePrivatecaCaPoolIssuancePolicyBaselineValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `PutIdentityConstraints` <a name="PutIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints"></a>

```csharp
private void PutIdentityConstraints(GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `ResetAllowedIssuanceModes` <a name="ResetAllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes"></a>

```csharp
private void ResetAllowedIssuanceModes()
```

##### `ResetAllowedKeyTypes` <a name="ResetAllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes"></a>

```csharp
private void ResetAllowedKeyTypes()
```

##### `ResetBaselineValues` <a name="ResetBaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues"></a>

```csharp
private void ResetBaselineValues()
```

##### `ResetIdentityConstraints` <a name="ResetIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints"></a>

```csharp
private void ResetIdentityConstraints()
```

##### `ResetMaximumLifetime` <a name="ResetMaximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime"></a>

```csharp
private void ResetMaximumLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes">AllowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes">AllowedKeyTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues">BaselineValues</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints">IdentityConstraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput">AllowedIssuanceModesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput">AllowedKeyTypesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput">BaselineValuesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput">IdentityConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput">MaximumLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime">MaximumLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedIssuanceModes`<sup>Required</sup> <a name="AllowedIssuanceModes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference AllowedIssuanceModes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a>

---

##### `AllowedKeyTypes`<sup>Required</sup> <a name="AllowedKeyTypes" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList AllowedKeyTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">GooglePrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a>

---

##### `BaselineValues`<sup>Required</sup> <a name="BaselineValues" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference BaselineValues { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">GooglePrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a>

---

##### `IdentityConstraints`<sup>Required</sup> <a name="IdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference IdentityConstraints { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a>

---

##### `AllowedIssuanceModesInput`<sup>Optional</sup> <a name="AllowedIssuanceModesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes AllowedIssuanceModesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">GooglePrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `AllowedKeyTypesInput`<sup>Optional</sup> <a name="AllowedKeyTypesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput"></a>

```csharp
public object AllowedKeyTypesInput { get; }
```

- *Type:* object

---

##### `BaselineValuesInput`<sup>Optional</sup> <a name="BaselineValuesInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyBaselineValues BaselineValuesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyBaselineValues">GooglePrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `IdentityConstraintsInput`<sup>Optional</sup> <a name="IdentityConstraintsInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints IdentityConstraintsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints">GooglePrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `MaximumLifetimeInput`<sup>Optional</sup> <a name="MaximumLifetimeInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput"></a>

```csharp
public string MaximumLifetimeInput { get; }
```

- *Type:* string

---

##### `MaximumLifetime`<sup>Required</sup> <a name="MaximumLifetime" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime"></a>

```csharp
public string MaximumLifetime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolIssuancePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolIssuancePolicy">GooglePrivatecaCaPoolIssuancePolicy</a>

---


### GooglePrivatecaCaPoolPublishingOptionsOutputReference <a name="GooglePrivatecaCaPoolPublishingOptionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolPublishingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resetEncodingFormat">ResetEncodingFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncodingFormat` <a name="ResetEncodingFormat" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.resetEncodingFormat"></a>

```csharp
private void ResetEncodingFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormatInput">EncodingFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput">PublishCaCertInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput">PublishCrlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormat">EncodingFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert">PublishCaCert</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl">PublishCrl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingFormatInput`<sup>Optional</sup> <a name="EncodingFormatInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormatInput"></a>

```csharp
public string EncodingFormatInput { get; }
```

- *Type:* string

---

##### `PublishCaCertInput`<sup>Optional</sup> <a name="PublishCaCertInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput"></a>

```csharp
public object PublishCaCertInput { get; }
```

- *Type:* object

---

##### `PublishCrlInput`<sup>Optional</sup> <a name="PublishCrlInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput"></a>

```csharp
public object PublishCrlInput { get; }
```

- *Type:* object

---

##### `EncodingFormat`<sup>Required</sup> <a name="EncodingFormat" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.encodingFormat"></a>

```csharp
public string EncodingFormat { get; }
```

- *Type:* string

---

##### `PublishCaCert`<sup>Required</sup> <a name="PublishCaCert" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert"></a>

```csharp
public object PublishCaCert { get; }
```

- *Type:* object

---

##### `PublishCrl`<sup>Required</sup> <a name="PublishCrl" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl"></a>

```csharp
public object PublishCrl { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue"></a>

```csharp
public GooglePrivatecaCaPoolPublishingOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolPublishingOptions">GooglePrivatecaCaPoolPublishingOptions</a>

---


### GooglePrivatecaCaPoolTimeoutsOutputReference <a name="GooglePrivatecaCaPoolTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePrivatecaCaPoolTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePrivatecaCaPool.GooglePrivatecaCaPoolTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



