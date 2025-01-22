# `googleDataplexZone` Submodule <a name="`googleDataplexZone` Submodule" id="@cdktf/provider-google-beta.googleDataplexZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataplexZone <a name="GoogleDataplexZone" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone google_dataplex_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZone(Construct Scope, string Id, GoogleDataplexZoneConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig">GoogleDataplexZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig">GoogleDataplexZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec">PutDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putResourceSpec">PutResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDiscoverySpec` <a name="PutDiscoverySpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec"></a>

```csharp
private void PutDiscoverySpec(GoogleDataplexZoneDiscoverySpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putDiscoverySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

---

##### `PutResourceSpec` <a name="PutResourceSpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putResourceSpec"></a>

```csharp
private void PutResourceSpec(GoogleDataplexZoneResourceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleDataplexZoneTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataplexZone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexZone.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleDataplexZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleDataplexZone resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataplexZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataplexZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataplexZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.assetStatus">AssetStatus</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList">GoogleDataplexZoneAssetStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpec">DiscoverySpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference">GoogleDataplexZoneDiscoverySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpec">ResourceSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference">GoogleDataplexZoneResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference">GoogleDataplexZoneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpecInput">DiscoverySpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lakeInput">LakeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpecInput">ResourceSpecInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lake">Lake</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AssetStatus`<sup>Required</sup> <a name="AssetStatus" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.assetStatus"></a>

```csharp
public GoogleDataplexZoneAssetStatusList AssetStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList">GoogleDataplexZoneAssetStatusList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DiscoverySpec`<sup>Required</sup> <a name="DiscoverySpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpec"></a>

```csharp
public GoogleDataplexZoneDiscoverySpecOutputReference DiscoverySpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference">GoogleDataplexZoneDiscoverySpecOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ResourceSpec`<sup>Required</sup> <a name="ResourceSpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpec"></a>

```csharp
public GoogleDataplexZoneResourceSpecOutputReference ResourceSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference">GoogleDataplexZoneResourceSpecOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeouts"></a>

```csharp
public GoogleDataplexZoneTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference">GoogleDataplexZoneTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiscoverySpecInput`<sup>Optional</sup> <a name="DiscoverySpecInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.discoverySpecInput"></a>

```csharp
public GoogleDataplexZoneDiscoverySpec DiscoverySpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LakeInput`<sup>Optional</sup> <a name="LakeInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lakeInput"></a>

```csharp
public string LakeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceSpecInput`<sup>Optional</sup> <a name="ResourceSpecInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.resourceSpecInput"></a>

```csharp
public GoogleDataplexZoneResourceSpec ResourceSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Lake`<sup>Required</sup> <a name="Lake" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.lake"></a>

```csharp
public string Lake { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataplexZoneAssetStatus <a name="GoogleDataplexZoneAssetStatus" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneAssetStatus {

};
```


### GoogleDataplexZoneConfig <a name="GoogleDataplexZoneConfig" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    GoogleDataplexZoneDiscoverySpec DiscoverySpec,
    string Lake,
    string Location,
    string Name,
    GoogleDataplexZoneResourceSpec ResourceSpec,
    string Type,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleDataplexZoneTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.discoverySpec">DiscoverySpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a></code> | discovery_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lake">Lake</a></code> | <code>string</code> | The lake for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.location">Location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.name">Name</a></code> | <code>string</code> | The name of the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.resourceSpec">ResourceSpec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a></code> | resource_spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.type">Type</a></code> | <code>string</code> | Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.description">Description</a></code> | <code>string</code> | Optional. Description of the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Optional. User friendly display name. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#id GoogleDataplexZone#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Optional. User defined labels for the zone. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DiscoverySpec`<sup>Required</sup> <a name="DiscoverySpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.discoverySpec"></a>

```csharp
public GoogleDataplexZoneDiscoverySpec DiscoverySpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#discovery_spec GoogleDataplexZone#discovery_spec}

---

##### `Lake`<sup>Required</sup> <a name="Lake" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.lake"></a>

```csharp
public string Lake { get; set; }
```

- *Type:* string

The lake for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#lake GoogleDataplexZone#lake}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#location GoogleDataplexZone#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#name GoogleDataplexZone#name}

---

##### `ResourceSpec`<sup>Required</sup> <a name="ResourceSpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.resourceSpec"></a>

```csharp
public GoogleDataplexZoneResourceSpec ResourceSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

resource_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#resource_spec GoogleDataplexZone#resource_spec}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Required. Immutable. The type of the zone. Possible values: TYPE_UNSPECIFIED, RAW, CURATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#type GoogleDataplexZone#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional. Description of the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#description GoogleDataplexZone#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Optional. User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#display_name GoogleDataplexZone#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#id GoogleDataplexZone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Optional. User defined labels for the zone.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#labels GoogleDataplexZone#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#project GoogleDataplexZone#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneConfig.property.timeouts"></a>

```csharp
public GoogleDataplexZoneTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts">GoogleDataplexZoneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#timeouts GoogleDataplexZone#timeouts}

---

### GoogleDataplexZoneDiscoverySpec <a name="GoogleDataplexZoneDiscoverySpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneDiscoverySpec {
    object Enabled,
    GoogleDataplexZoneDiscoverySpecCsvOptions CsvOptions = null,
    string[] ExcludePatterns = null,
    string[] IncludePatterns = null,
    GoogleDataplexZoneDiscoverySpecJsonOptions JsonOptions = null,
    string Schedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.enabled">Enabled</a></code> | <code>object</code> | Required. Whether discovery is enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.excludePatterns">ExcludePatterns</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.includePatterns">IncludePatterns</a></code> | <code>string[]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a></code> | json_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.schedule">Schedule</a></code> | <code>string</code> | Optional. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Required. Whether discovery is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#enabled GoogleDataplexZone#enabled}

---

##### `CsvOptions`<sup>Optional</sup> <a name="CsvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.csvOptions"></a>

```csharp
public GoogleDataplexZoneDiscoverySpecCsvOptions CsvOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#csv_options GoogleDataplexZone#csv_options}

---

##### `ExcludePatterns`<sup>Optional</sup> <a name="ExcludePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.excludePatterns"></a>

```csharp
public string[] ExcludePatterns { get; set; }
```

- *Type:* string[]

Optional.

The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#exclude_patterns GoogleDataplexZone#exclude_patterns}

---

##### `IncludePatterns`<sup>Optional</sup> <a name="IncludePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.includePatterns"></a>

```csharp
public string[] IncludePatterns { get; set; }
```

- *Type:* string[]

Optional.

The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#include_patterns GoogleDataplexZone#include_patterns}

---

##### `JsonOptions`<sup>Optional</sup> <a name="JsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.jsonOptions"></a>

```csharp
public GoogleDataplexZoneDiscoverySpecJsonOptions JsonOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#json_options GoogleDataplexZone#json_options}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Optional.

Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: "CRON_TZ=${IANA_TIME_ZONE}" or TZ=${IANA_TIME_ZONE}". The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, "CRON_TZ=America/New_York 1 * * * *", or "TZ=America/New_York 1 * * * *".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#schedule GoogleDataplexZone#schedule}

---

### GoogleDataplexZoneDiscoverySpecCsvOptions <a name="GoogleDataplexZoneDiscoverySpecCsvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneDiscoverySpecCsvOptions {
    string Delimiter = null,
    object DisableTypeInference = null,
    string Encoding = null,
    double HeaderRows = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.delimiter">Delimiter</a></code> | <code>string</code> | Optional. The delimiter being used to separate values. This defaults to ','. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference">DisableTypeInference</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.encoding">Encoding</a></code> | <code>string</code> | Optional. The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.headerRows">HeaderRows</a></code> | <code>double</code> | Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

Optional. The delimiter being used to separate values. This defaults to ','.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#delimiter GoogleDataplexZone#delimiter}

---

##### `DisableTypeInference`<sup>Optional</sup> <a name="DisableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.disableTypeInference"></a>

```csharp
public object DisableTypeInference { get; set; }
```

- *Type:* object

Optional.

Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#disable_type_inference GoogleDataplexZone#disable_type_inference}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#encoding GoogleDataplexZone#encoding}

---

##### `HeaderRows`<sup>Optional</sup> <a name="HeaderRows" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions.property.headerRows"></a>

```csharp
public double HeaderRows { get; set; }
```

- *Type:* double

Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#header_rows GoogleDataplexZone#header_rows}

---

### GoogleDataplexZoneDiscoverySpecJsonOptions <a name="GoogleDataplexZoneDiscoverySpecJsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneDiscoverySpecJsonOptions {
    object DisableTypeInference = null,
    string Encoding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference">DisableTypeInference</a></code> | <code>object</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.encoding">Encoding</a></code> | <code>string</code> | Optional. The character encoding of the data. The default is UTF-8. |

---

##### `DisableTypeInference`<sup>Optional</sup> <a name="DisableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.disableTypeInference"></a>

```csharp
public object DisableTypeInference { get; set; }
```

- *Type:* object

Optional.

Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#disable_type_inference GoogleDataplexZone#disable_type_inference}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions.property.encoding"></a>

```csharp
public string Encoding { get; set; }
```

- *Type:* string

Optional. The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#encoding GoogleDataplexZone#encoding}

---

### GoogleDataplexZoneResourceSpec <a name="GoogleDataplexZoneResourceSpec" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneResourceSpec {
    string LocationType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec.property.locationType">LocationType</a></code> | <code>string</code> | Required. |

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec.property.locationType"></a>

```csharp
public string LocationType { get; set; }
```

- *Type:* string

Required.

Immutable. The location type of the resources that are allowed to be attached to the assets within this zone. Possible values: LOCATION_TYPE_UNSPECIFIED, SINGLE_REGION, MULTI_REGION

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#location_type GoogleDataplexZone#location_type}

---

### GoogleDataplexZoneTimeouts <a name="GoogleDataplexZoneTimeouts" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#create GoogleDataplexZone#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#delete GoogleDataplexZone#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#update GoogleDataplexZone#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#create GoogleDataplexZone#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#delete GoogleDataplexZone#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_dataplex_zone#update GoogleDataplexZone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataplexZoneAssetStatusList <a name="GoogleDataplexZoneAssetStatusList" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneAssetStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.get"></a>

```csharp
private GoogleDataplexZoneAssetStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleDataplexZoneAssetStatusOutputReference <a name="GoogleDataplexZoneAssetStatusOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneAssetStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.activeAssets">ActiveAssets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets">SecurityPolicyApplyingAssets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus">GoogleDataplexZoneAssetStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveAssets`<sup>Required</sup> <a name="ActiveAssets" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.activeAssets"></a>

```csharp
public double ActiveAssets { get; }
```

- *Type:* double

---

##### `SecurityPolicyApplyingAssets`<sup>Required</sup> <a name="SecurityPolicyApplyingAssets" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.securityPolicyApplyingAssets"></a>

```csharp
public double SecurityPolicyApplyingAssets { get; }
```

- *Type:* double

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexZoneAssetStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneAssetStatus">GoogleDataplexZoneAssetStatus</a>

---


### GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference <a name="GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference">ResetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows">ResetHeaderRows</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetDisableTypeInference` <a name="ResetDisableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetDisableTypeInference"></a>

```csharp
private void ResetDisableTypeInference()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```

##### `ResetHeaderRows` <a name="ResetHeaderRows" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.resetHeaderRows"></a>

```csharp
private void ResetHeaderRows()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput">DisableTypeInferenceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput">HeaderRowsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference">DisableTypeInference</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows">HeaderRows</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `DisableTypeInferenceInput`<sup>Optional</sup> <a name="DisableTypeInferenceInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInferenceInput"></a>

```csharp
public object DisableTypeInferenceInput { get; }
```

- *Type:* object

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `HeaderRowsInput`<sup>Optional</sup> <a name="HeaderRowsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRowsInput"></a>

```csharp
public double HeaderRowsInput { get; }
```

- *Type:* double

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `DisableTypeInference`<sup>Required</sup> <a name="DisableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.disableTypeInference"></a>

```csharp
public object DisableTypeInference { get; }
```

- *Type:* object

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `HeaderRows`<sup>Required</sup> <a name="HeaderRows" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.headerRows"></a>

```csharp
public double HeaderRows { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexZoneDiscoverySpecCsvOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

---


### GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference <a name="GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference">ResetDisableTypeInference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableTypeInference` <a name="ResetDisableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetDisableTypeInference"></a>

```csharp
private void ResetDisableTypeInference()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.resetEncoding"></a>

```csharp
private void ResetEncoding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput">DisableTypeInferenceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference">DisableTypeInference</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding">Encoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableTypeInferenceInput`<sup>Optional</sup> <a name="DisableTypeInferenceInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInferenceInput"></a>

```csharp
public object DisableTypeInferenceInput { get; }
```

- *Type:* object

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encodingInput"></a>

```csharp
public string EncodingInput { get; }
```

- *Type:* string

---

##### `DisableTypeInference`<sup>Required</sup> <a name="DisableTypeInference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.disableTypeInference"></a>

```csharp
public object DisableTypeInference { get; }
```

- *Type:* object

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.encoding"></a>

```csharp
public string Encoding { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexZoneDiscoverySpecJsonOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

---


### GoogleDataplexZoneDiscoverySpecOutputReference <a name="GoogleDataplexZoneDiscoverySpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneDiscoverySpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions">PutCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putJsonOptions">PutJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetCsvOptions">ResetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetExcludePatterns">ResetExcludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetIncludePatterns">ResetIncludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetJsonOptions">ResetJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsvOptions` <a name="PutCsvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions"></a>

```csharp
private void PutCsvOptions(GoogleDataplexZoneDiscoverySpecCsvOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

---

##### `PutJsonOptions` <a name="PutJsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putJsonOptions"></a>

```csharp
private void PutJsonOptions(GoogleDataplexZoneDiscoverySpecJsonOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.putJsonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

---

##### `ResetCsvOptions` <a name="ResetCsvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetCsvOptions"></a>

```csharp
private void ResetCsvOptions()
```

##### `ResetExcludePatterns` <a name="ResetExcludePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetExcludePatterns"></a>

```csharp
private void ResetExcludePatterns()
```

##### `ResetIncludePatterns` <a name="ResetIncludePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetIncludePatterns"></a>

```csharp
private void ResetIncludePatterns()
```

##### `ResetJsonOptions` <a name="ResetJsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetJsonOptions"></a>

```csharp
private void ResetJsonOptions()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference">GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference">GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput">CsvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput">ExcludePatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatternsInput">IncludePatternsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput">JsonOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatterns">ExcludePatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatterns">IncludePatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptions"></a>

```csharp
public GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference CsvOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference">GoogleDataplexZoneDiscoverySpecCsvOptionsOutputReference</a>

---

##### `JsonOptions`<sup>Required</sup> <a name="JsonOptions" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptions"></a>

```csharp
public GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference JsonOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference">GoogleDataplexZoneDiscoverySpecJsonOptionsOutputReference</a>

---

##### `CsvOptionsInput`<sup>Optional</sup> <a name="CsvOptionsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.csvOptionsInput"></a>

```csharp
public GoogleDataplexZoneDiscoverySpecCsvOptions CsvOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecCsvOptions">GoogleDataplexZoneDiscoverySpecCsvOptions</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExcludePatternsInput`<sup>Optional</sup> <a name="ExcludePatternsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatternsInput"></a>

```csharp
public string[] ExcludePatternsInput { get; }
```

- *Type:* string[]

---

##### `IncludePatternsInput`<sup>Optional</sup> <a name="IncludePatternsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatternsInput"></a>

```csharp
public string[] IncludePatternsInput { get; }
```

- *Type:* string[]

---

##### `JsonOptionsInput`<sup>Optional</sup> <a name="JsonOptionsInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.jsonOptionsInput"></a>

```csharp
public GoogleDataplexZoneDiscoverySpecJsonOptions JsonOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecJsonOptions">GoogleDataplexZoneDiscoverySpecJsonOptions</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `ExcludePatterns`<sup>Required</sup> <a name="ExcludePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.excludePatterns"></a>

```csharp
public string[] ExcludePatterns { get; }
```

- *Type:* string[]

---

##### `IncludePatterns`<sup>Required</sup> <a name="IncludePatterns" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.includePatterns"></a>

```csharp
public string[] IncludePatterns { get; }
```

- *Type:* string[]

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexZoneDiscoverySpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneDiscoverySpec">GoogleDataplexZoneDiscoverySpec</a>

---


### GoogleDataplexZoneResourceSpecOutputReference <a name="GoogleDataplexZoneResourceSpecOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneResourceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationTypeInput">LocationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationType">LocationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationTypeInput`<sup>Optional</sup> <a name="LocationTypeInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationTypeInput"></a>

```csharp
public string LocationTypeInput { get; }
```

- *Type:* string

---

##### `LocationType`<sup>Required</sup> <a name="LocationType" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.locationType"></a>

```csharp
public string LocationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpecOutputReference.property.internalValue"></a>

```csharp
public GoogleDataplexZoneResourceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneResourceSpec">GoogleDataplexZoneResourceSpec</a>

---


### GoogleDataplexZoneTimeoutsOutputReference <a name="GoogleDataplexZoneTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleDataplexZoneTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataplexZone.GoogleDataplexZoneTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



