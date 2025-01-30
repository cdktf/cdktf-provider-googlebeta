# `googleSecurityposturePostureDeployment` Submodule <a name="`googleSecurityposturePostureDeployment` Submodule" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSecurityposturePostureDeployment <a name="GoogleSecurityposturePostureDeployment" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment google_securityposture_posture_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityposturePostureDeployment(Construct Scope, string Id, GoogleSecurityposturePostureDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig">GoogleSecurityposturePostureDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig">GoogleSecurityposturePostureDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSecurityposturePostureDeploymentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSecurityposturePostureDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecurityposturePostureDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecurityposturePostureDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecurityposturePostureDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSecurityposturePostureDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSecurityposturePostureDeployment resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSecurityposturePostureDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSecurityposturePostureDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSecurityposturePostureDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureId">DesiredPostureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureRevisionId">DesiredPostureRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.failureMessage">FailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference">GoogleSecurityposturePostureDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentIdInput">PostureDeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureIdInput">PostureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionIdInput">PostureRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResourceInput">TargetResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentId">PostureDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureId">PostureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionId">PostureRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResource">TargetResource</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DesiredPostureId`<sup>Required</sup> <a name="DesiredPostureId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureId"></a>

```csharp
public string DesiredPostureId { get; }
```

- *Type:* string

---

##### `DesiredPostureRevisionId`<sup>Required</sup> <a name="DesiredPostureRevisionId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.desiredPostureRevisionId"></a>

```csharp
public string DesiredPostureRevisionId { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `FailureMessage`<sup>Required</sup> <a name="FailureMessage" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.failureMessage"></a>

```csharp
public string FailureMessage { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeouts"></a>

```csharp
public GoogleSecurityposturePostureDeploymentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference">GoogleSecurityposturePostureDeploymentTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `PostureDeploymentIdInput`<sup>Optional</sup> <a name="PostureDeploymentIdInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentIdInput"></a>

```csharp
public string PostureDeploymentIdInput { get; }
```

- *Type:* string

---

##### `PostureIdInput`<sup>Optional</sup> <a name="PostureIdInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureIdInput"></a>

```csharp
public string PostureIdInput { get; }
```

- *Type:* string

---

##### `PostureRevisionIdInput`<sup>Optional</sup> <a name="PostureRevisionIdInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionIdInput"></a>

```csharp
public string PostureRevisionIdInput { get; }
```

- *Type:* string

---

##### `TargetResourceInput`<sup>Optional</sup> <a name="TargetResourceInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResourceInput"></a>

```csharp
public string TargetResourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `PostureDeploymentId`<sup>Required</sup> <a name="PostureDeploymentId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureDeploymentId"></a>

```csharp
public string PostureDeploymentId { get; }
```

- *Type:* string

---

##### `PostureId`<sup>Required</sup> <a name="PostureId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureId"></a>

```csharp
public string PostureId { get; }
```

- *Type:* string

---

##### `PostureRevisionId`<sup>Required</sup> <a name="PostureRevisionId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.postureRevisionId"></a>

```csharp
public string PostureRevisionId { get; }
```

- *Type:* string

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.targetResource"></a>

```csharp
public string TargetResource { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSecurityposturePostureDeploymentConfig <a name="GoogleSecurityposturePostureDeploymentConfig" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityposturePostureDeploymentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Parent,
    string PostureDeploymentId,
    string PostureId,
    string PostureRevisionId,
    string TargetResource,
    string Description = null,
    string Id = null,
    GoogleSecurityposturePostureDeploymentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource, eg. global'. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.parent">Parent</a></code> | <code>string</code> | The parent of the resource, an organization. Format should be 'organizations/{organization_id}'. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureDeploymentId">PostureDeploymentId</a></code> | <code>string</code> | ID of the posture deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureId">PostureId</a></code> | <code>string</code> | Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureRevisionId">PostureRevisionId</a></code> | <code>string</code> | Revision_id the posture which needs to be deployed. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.targetResource">TargetResource</a></code> | <code>string</code> | The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Description of the posture deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#id GoogleSecurityposturePostureDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource, eg. global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#location GoogleSecurityposturePostureDeployment#location}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#parent GoogleSecurityposturePostureDeployment#parent}

---

##### `PostureDeploymentId`<sup>Required</sup> <a name="PostureDeploymentId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureDeploymentId"></a>

```csharp
public string PostureDeploymentId { get; set; }
```

- *Type:* string

ID of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#posture_deployment_id GoogleSecurityposturePostureDeployment#posture_deployment_id}

---

##### `PostureId`<sup>Required</sup> <a name="PostureId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureId"></a>

```csharp
public string PostureId { get; set; }
```

- *Type:* string

Relative name of the posture which needs to be deployed. It should be in the format:   organizations/{organization_id}/locations/{location}/postures/{posture_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#posture_id GoogleSecurityposturePostureDeployment#posture_id}

---

##### `PostureRevisionId`<sup>Required</sup> <a name="PostureRevisionId" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.postureRevisionId"></a>

```csharp
public string PostureRevisionId { get; set; }
```

- *Type:* string

Revision_id the posture which needs to be deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#posture_revision_id GoogleSecurityposturePostureDeployment#posture_revision_id}

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.targetResource"></a>

```csharp
public string TargetResource { get; set; }
```

- *Type:* string

The resource on which the posture should be deployed. This can be in one of the following formats: projects/{project_number}, folders/{folder_number}, organizations/{organization_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#target_resource GoogleSecurityposturePostureDeployment#target_resource}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the posture deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#description GoogleSecurityposturePostureDeployment#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#id GoogleSecurityposturePostureDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentConfig.property.timeouts"></a>

```csharp
public GoogleSecurityposturePostureDeploymentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts">GoogleSecurityposturePostureDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#timeouts GoogleSecurityposturePostureDeployment#timeouts}

---

### GoogleSecurityposturePostureDeploymentTimeouts <a name="GoogleSecurityposturePostureDeploymentTimeouts" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityposturePostureDeploymentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#create GoogleSecurityposturePostureDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#delete GoogleSecurityposturePostureDeployment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#update GoogleSecurityposturePostureDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#create GoogleSecurityposturePostureDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#delete GoogleSecurityposturePostureDeployment#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_securityposture_posture_deployment#update GoogleSecurityposturePostureDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSecurityposturePostureDeploymentTimeoutsOutputReference <a name="GoogleSecurityposturePostureDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSecurityposturePostureDeploymentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSecurityposturePostureDeployment.GoogleSecurityposturePostureDeploymentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



